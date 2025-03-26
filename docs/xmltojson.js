function parseCIFXML(xmi) { 
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmi, "application/xml");

    const locationMap = {};
    const automataData = [];

    // ---------------------
    // Prepopulate global locationMap with all locations from all automata
    // ---------------------
    const automataElements = Array.from(xmlDoc.getElementsByTagName("components"));
    automataElements.forEach(automaton => {
        const automatonName = automaton.getAttribute("name");
        const locElements = Array.from(automaton.getElementsByTagName("locations"));
        locElements.forEach(location => {
            const locationId = location.getAttribute("xmi:id");
            const locationName = location.getAttribute("name");
            locationMap[locationId] = `${automatonName}.${locationName}`;
        });
    });

    // ---------------------
    // Build global variable map so that DiscVariableExpressions can be resolved across automata
    // ---------------------
    const globalVariableMap = {};
    automataElements.forEach(automaton => {
        const automatonName = automaton.getAttribute("name");
        const variableElements = automaton.getElementsByTagName("declarations");
        for (let variable of variableElements) {
            if (variable.getAttribute("xmi:type") === "declarations:DiscVariable") {
                const variableId = variable.getAttribute("xmi:id");
                const variableName = variable.getAttribute("name");
                const qualifiedName = automatonName + "." + variableName;
                globalVariableMap[variableId] = qualifiedName;
            }
        }
    });

    // ---------------------
    // 1. Parse Global Events
    // ---------------------
    const allDeclarations = xmlDoc.getElementsByTagName("declarations");
    for (let decl of allDeclarations) {
        if (!isDescendantOf(decl, "components")) {
            if (decl.getAttribute("xmi:type") === "declarations:Event") {
                const eventId = decl.getAttribute("xmi:id");
                const eventName = decl.getAttribute("name");
                const controllable = decl.hasAttribute("controllable") 
                    ? (decl.getAttribute("controllable") === "true") 
                    : null;

                globalEventMap[eventId] = {
                    id: eventId,
                    name: eventName,
                    controllable: controllable,
                    automaton: 'global'
                };
                globalEventNameMap[eventName] = globalEventMap[eventId];
            }
        }
    }

    // ---------------------
    // 2. Parse Automata
    // ---------------------
    automataElements.forEach(automaton => {
        const automatonName = automaton.getAttribute("name");
        const automatonKind = automaton.getAttribute("kind");
        const events = [];
        const variables = {};
        const locations = [];
        const edges = [];
        const monitors = [];

        // Parse events within the current automaton
        const eventElements = automaton.getElementsByTagName("declarations");
        for (let event of eventElements) {
            if (event.getAttribute("xmi:type") === "declarations:Event") {
                const eventId = event.getAttribute("xmi:id");
                const eventName = event.getAttribute("name");
                const controllable = event.hasAttribute("controllable")
                    ? (event.getAttribute("controllable") === "true")
                    : null;

                events.push({
                    id: eventId,
                    name: eventName,
                    controllable: controllable,
                    automaton: automatonName
                });

                globalEventMap[eventId] = {
                    id: eventId,
                    name: eventName,
                    controllable: controllable,
                    automaton: automatonName
                };

                globalEventNameMap[eventName] = globalEventMap[eventId];
            }
        }

        // Parse variables (local map used for updates)
        const variableElements = automaton.getElementsByTagName("declarations");
        for (let variable of variableElements) {
            if (variable.getAttribute("xmi:type") === "declarations:DiscVariable") {
                const variableId = variable.getAttribute("xmi:id");
                const variableName = variable.getAttribute("name");
                const qualifiedName = automatonName + "." + variableName;
                variables[variableId] = {
                    id: variableId,
                    name: variableName,
                    qualifiedName: qualifiedName,
                    type: variable.getAttribute("type") || "unknown",
                    value: variable.querySelector("value")?.getAttribute("value") || null
                };
            }
        }

        // Parse monitors
        const monitorElements = automaton.getElementsByTagName("monitors");
        for (let monitor of monitorElements) {
            const monitorId = monitor.getAttribute("xmi:id");
            const monitorEvents = [];
            const monitorEventElements = monitor.getElementsByTagName("events");
            for (let me of monitorEventElements) {
                const monitoredEventId = me.getAttribute("event");
                if (monitoredEventId) {
                    const monitoredEvent = globalEventMap[monitoredEventId];
                    if (monitoredEvent) {
                        monitorEvents.push({
                            id: monitoredEventId,
                            name: monitoredEvent.name,
                            automaton: monitoredEvent.automaton
                        });
                    }
                }
            }
            monitors.push({
                id: monitorId,
                events: monitorEvents
            });
        }

        // Parse locations and edges
        const locationElements = automaton.getElementsByTagName("locations");
        for (let location of locationElements) {
            const locationId = location.getAttribute("xmi:id");
            const locationName = location.getAttribute("name");
            const isInitial = location.querySelector("initials") !== null;
            const isMarked = location.querySelector("markeds") !== null;

            // Even though locationMap was prepopulated, update it here too if needed.
            locationMap[locationId] = `${automatonName}.${locationName}`;

            locations.push({
                id: locationId,
                name: locationName,
                initial: isInitial,
                marked: isMarked
            });

            // Collect edges for this location
            const locationEdges = [];
            const edgeElements = location.getElementsByTagName("edges");
            for (let edge of edgeElements) {
                const targetLocation = edge.getAttribute("target") || locationId;
                const eventElement = edge.querySelector("events event");
                const eventRef = eventElement ? eventElement.getAttribute("event") : null;

                // Parse guard using the global locationMap and global variable map
                const guardElement = edge.querySelector("guards");
                let parsedGuard = parseGuard(guardElement, variables, locationMap, globalVariableMap);
                if (parsedGuard) {
                    parsedGuard = simplifyAST(parsedGuard);
                }
                const guardExpression = (parsedGuard && parsedGuard.type === "literal" && parsedGuard.value === true)
                                          ? null
                                          : (parsedGuard ? parsedGuard.expression : null);

                // Parse updates
                const updateElements = edge.querySelectorAll("updates");
                const updates = Array.from(updateElements).map(update => {
                    const variableId = update.querySelector("addressable")?.getAttribute("variable");
                    // Use the local variable qualified name if available, or fall back to the global variable map
                    const variableName = variables[variableId]?.qualifiedName || globalVariableMap[variableId] || variableId;
                    const valueElement = update.querySelector("value");

                    let value = null;
                    let operator = null;
                    let updateExpression = null;

                    if (valueElement) {
                        const valueType = valueElement.getAttribute("xmi:type");
                        if (valueType === "expressions:IntExpression") {
                            value = valueElement.getAttribute("value") ||
                                valueElement.querySelector("type")?.getAttribute("lower");
                            updateExpression = `${variableName} := ${value}`;
                        } else if (valueType === "expressions:BinaryExpression") {
                            operator = valueElement.getAttribute("operator");
                            const leftOperand = valueElement.querySelector("left");
                            const rightOperand = valueElement.querySelector("right");
                            const left = leftOperand.getAttribute("variable") || leftOperand.getAttribute("value");
                            const right = rightOperand.getAttribute("variable") || rightOperand.getAttribute("value");
                            const leftName = variables[left]?.qualifiedName || globalVariableMap[left] || left;
                            const rightName = variables[right]?.qualifiedName || globalVariableMap[right] || right;
                            value = `${leftName} ${translateUpdateOperator(operator)} ${rightName}`;
                            updateExpression = `${variableName} := ${value}`;
                        }
                    }
                    return {
                        variable: variableName,
                        value: value,
                        operator: operator,
                        updateExpression: updateExpression
                    };
                });

                // Determine the event's automaton, type, and controllability
                let eventAutomaton = null;
                let eventType = 'unknown';
                let isControllable = null;
                if (eventRef && globalEventMap[eventRef]) {
                    eventAutomaton = globalEventMap[eventRef].automaton;
                    isControllable = globalEventMap[eventRef].controllable;
                    if (eventAutomaton === automatonName) {
                        eventType = 'owned';
                    } else if (eventAutomaton === 'global') {
                        eventType = 'global';
                    } else {
                        eventType = 'cross-automaton';
                    }
                }

                locationEdges.push({
                    from: locationId,
                    to: targetLocation,
                    event: eventRef,
                    eventAutomaton: eventAutomaton,
                    eventType: eventType,
                    guard: parsedGuard,
                    guardExpression: guardExpression,
                    updates: updates,
                    controllable: isControllable
                });
            }

            // Sort self loops if necessary
            const selfLoops = locationEdges.filter(e => e.from === e.to);
            if (selfLoops.length > 1) {
                selfLoops.sort((a, b) => {
                    if (a.controllable === b.controllable) return 0;
                    return a.controllable ? 1 : -1;
                });
                let selfLoopIndex = 0;
                locationEdges.forEach((edge, index) => {
                    if (edge.from === edge.to) {
                        locationEdges[index] = selfLoops[selfLoopIndex++];
                    }
                });
            }
            edges.push(...locationEdges);
        }

        automataData.push({
            name: automatonName,
            kind: automatonKind,
            events: events,
            variables: variables,
            locations: locations,
            edges: edges,
            monitors: monitors,
            totalEdges: edges.length
        });
    });

    const synchronizingEvents = identifySynchronizingEvents(automataData);
    let totalEdgesOverall = 0;
    automataData.forEach(automaton => {
        totalEdgesOverall += automaton.totalEdges;
    });
    return { automata: automataData, synchronizingEvents: synchronizingEvents, totalEdgesOverall: totalEdgesOverall };
}

// Helper function to check if an element is a descendant of a given tag
function isDescendantOf(element, tagName) {
    let parent = element.parentNode;
    while (parent) {
        if (parent.tagName === tagName) {
            return true;
        }
        parent = parent.parentNode;
    }
    return false;
}

function translateUpdateOperator(operator) {
    switch (operator) {
        case "Addition": return "+";
        case "Subtraction": return "-";
        default: return operator;
    }
}

function identifySynchronizingEvents(parsedData) {
    if (!Array.isArray(parsedData)) {
        console.error("Parsed data structure is invalid:", parsedData);
        return [];
    }
    const eventOccurrences = new Map();
    parsedData.forEach(automaton => {
        if (automaton && Array.isArray(automaton.events)) {  
            automaton.events.forEach(event => {
                if (event && event.name) {  
                    if (!eventOccurrences.has(event.name)) {
                        eventOccurrences.set(event.name, new Set());
                    }
                    eventOccurrences.get(event.name).add(event.automaton);
                }
            });
        }
    });
    const synchronizingEvents = [];
    eventOccurrences.forEach((automataSet, eventName) => {
        if (automataSet.size > 1) {
            synchronizingEvents.push({
                name: eventName,
                automata: Array.from(automataSet)
            });
        }
    });
    return synchronizingEvents;
}

// ------------------------------
// Guard Parser Functions
// ------------------------------

function parseGuard(guardElement, localVariables, locationMap, globalVariableMap) {
    if (!guardElement) return null;
    const guardType = guardElement.getAttribute("xmi:type");
  
    if (guardType === "expressions:BoolExpression") {
      const boolVal = guardElement.getAttribute("value");
      return {
        type: "literal",
        expression: boolVal,
        value: boolVal === "true"
      };
    }
  
    if (guardType === "expressions:IntExpression") {
      // Try to get the value attribute; if missing, fallback to a "lower" attribute or default to "0"
      let intVal = guardElement.getAttribute("value");
      if (!intVal) {
          intVal = guardElement.querySelector("type")?.getAttribute("lower");
      }
      if (intVal === null || intVal === undefined) {
          intVal = "0";
      }
      return {
        type: "intLiteral",
        expression: intVal,
        value: parseInt(intVal, 10)
      };
    }
  
    if (guardType === "expressions:ConstantExpression") {
      const constVal = guardElement.getAttribute("constant");
      return {
        type: "constant",
        expression: constVal,
        value: parseFloat(constVal)
      };
    }
  
    if (guardType === "expressions:DiscVariableExpression") {
      const varId = guardElement.getAttribute("variable");
      const varName = globalVariableMap[varId] || varId;
      return {
        type: "discVar",
        expression: varName,
        varId: varId
      };
    }
  
    if (guardType === "expressions:LocationExpression") {
      const locationId = guardElement.getAttribute("location");
      const qualifiedLocationName = locationMap[locationId];
      return {
        type: "location",
        expression: qualifiedLocationName,
        location: locationId
      };
    }
  
    if (guardType === "expressions:UnaryExpression") {
      const op = guardElement.getAttribute("operator") || "Not";
      const unaryOp = (op === "Not") ? "!" : op;
      const childElement = guardElement.querySelector(":scope > child");
      const childAst = parseGuard(childElement, localVariables, locationMap, globalVariableMap);
      return {
        type: "unary",
        operator: unaryOp,
        child: childAst,
        expression: unaryOp + "(" + childAst.expression + ")"
      };
    }
  
    if (guardType === "expressions:BinaryExpression") {
      let op = guardElement.getAttribute("operator") || "||";
      op = translateOperator(op);
      const leftElement = guardElement.querySelector(":scope > left");
      const rightElement = guardElement.querySelector(":scope > right");
      const leftAst = parseGuard(leftElement, localVariables, locationMap, globalVariableMap);
      const rightAst = parseGuard(rightElement, localVariables, locationMap, globalVariableMap);
      return {
        type: "binary",
        operator: op,
        left: leftAst,
        right: rightAst,
        expression: "(" + leftAst.expression + " " + op + " " + rightAst.expression + ")"
      };
    }
  
    return { type: "unknown", expression: "UNKNOWN" };
}
  
function translateOperator(operator) {
    switch (operator) {
      case "Equal":         return "==";
      case "NotEqual":      return "!=";
      case "GreaterEqual":  return ">=";
      case "LessEqual":     return "<=";
      case "LessThan":      return "<";
      case "Greater":       return ">";
      case "GreaterThan":   return ">";
      case "Conjunction":   return "&&";
      case "Disjunction":   return "||";
      case "Addition":      return "+";
      case "Modulus":       return "%";
      default:              return operator;
    }
}


function simplifyAST(ast) {
    if (!ast) return ast;
    if (ast.type === "literal" || ast.type === "intLiteral" || ast.type === "constant" ||
        ast.type === "discVar" || ast.type === "location") {
        return ast;
    }
    if (ast.type === "unary") {
        let child = simplifyAST(ast.child);
        if (child.type === "unary" && child.operator === "!") {
            return simplifyAST(child.child);
        }
        if (child.type === "binary") {
            if (child.operator === "&&") {
                let newLeft = simplifyAST({ type: "unary", operator: "!", child: child.left, expression: "!" + child.left.expression });
                let newRight = simplifyAST({ type: "unary", operator: "!", child: child.right, expression: "!" + child.right.expression });
                return {
                    type: "binary",
                    operator: "||",
                    left: newLeft,
                    right: newRight,
                    expression: "(" + newLeft.expression + " || " + newRight.expression + ")"
                };
            } else if (child.operator === "||") {
                let newLeft = simplifyAST({ type: "unary", operator: "!", child: child.left, expression: "!" + child.left.expression });
                let newRight = simplifyAST({ type: "unary", operator: "!", child: child.right, expression: "!" + child.right.expression });
                return {
                    type: "binary",
                    operator: "&&",
                    left: newLeft,
                    right: newRight,
                    expression: "(" + newLeft.expression + " && " + newRight.expression + ")"
                };
            }
        }
        return {
            type: "unary",
            operator: ast.operator,
            child: child,
            expression: ast.operator + "(" + child.expression + ")"
        };
    }
    if (ast.type === "binary") {
        let left = simplifyAST(ast.left);
        let right = simplifyAST(ast.right);
        if (ast.operator === "&&") {
            if (left.type === "literal" && left.value === true) return right;
            if (right.type === "literal" && right.value === true) return left;
            if (left.type === "literal" && left.value === false) return { type: "literal", value: false, expression: "false" };
            if (right.type === "literal" && right.value === false) return { type: "literal", value: false, expression: "false" };
        }
        if (ast.operator === "||") {
            if (left.type === "literal" && left.value === false) return right;
            if (right.type === "literal" && right.value === false) return left;
            if (left.type === "literal" && left.value === true) return { type: "literal", value: true, expression: "true" };
            if (right.type === "literal" && right.value === true) return { type: "literal", value: true, expression: "true" };
        }
        return {
            type: "binary",
            operator: ast.operator,
            left: left,
            right: right,
            expression: "(" + left.expression + " " + ast.operator + " " + right.expression + ")"
        };
    }
    return ast;
}
