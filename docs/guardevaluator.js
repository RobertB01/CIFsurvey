
document.getElementById("guardCheckbox").addEventListener("change", function () {
  const gaurdDiv = document.getElementById("guardAreaId"); 
  const guardcheckboxtext = document.getElementById("guard-overlay-text");

  if (gaurdDiv) {
    if (this.checked) {
      eventEvalationChecked = true;
      gaurdDiv.classList.add("two-hundred-height");
      guardcheckboxtext.classList.add("orange");
      gaurdDiv.classList.remove("dissapear");
    } else {
      gaurdDiv.classList.remove("two-hundred-height");
      eventEvalationChecked = false;
      selectedYellowEvent = "none";
      yellowAutomata = [];
      guardcheckboxtext.classList.remove("orange");
      gaurdDiv.classList.add("dissapear");
      automatonNames.forEach(name => {
        const guardDiv = document.getElementById(name + "-div");
        if (guardDiv) {
          guardDiv.classList.remove("automaton-container-orange");
        }
      });
      automatonNames.forEach(automatonName => {
        const edges = automatonEdges[automatonName];
        const hasOnlySelfLoops = window.automatonProperties &&
                                 window.automatonProperties[automatonName]?.hasOnlySelfLoops;
        updateYellowHighlighting(automatonName, edges, hasOnlySelfLoops);
      });
    }
  }
});



function updateGuardOverlay(edge, sourceAutomatonName) {
  const guardCheckbox = document.getElementById('guardCheckbox');
  if (!guardCheckbox.checked) {
    return;
  }

  const overlay = document.getElementById('guardAreaId');
  const eventName = edge.full_label || edge.label || "Unnamed Event";
  selectedYellowEvent = eventName;

  
  let guardInfo = edge.guardExpression || "- No guard";
  if (edge.guard) {
    const guardContext = buildContextFromStateText();
    const overallEval = evaluateGuard(edge.guard, guardContext);
    const overallColor = (overallEval.value === true) ? "green" : "darkred";
    const guardHtml = generateGuardHTML(edge.guard, guardContext, overallColor);
    
  }

  const myCheckboxElem = document.getElementById("myCheckbox");
  const myCheckboxChecked = myCheckboxElem && myCheckboxElem.checked;

  let allGreen = true; 

  
  const nonRestrictedAutomata = automatonNames.filter(otherName =>
    !restrictionList.includes(otherName) &&
    automatonEdges[otherName].get().some(otherEdge => (otherEdge.full_label || otherEdge.label) === eventName)
  );

  const nonRestrictedHtml = nonRestrictedAutomata.map(otherName => {
    
    let rightLocation = false;
    let guardOk = true; 
    let guardDisplay = ""; 

    
    const currentStateProperty = `spec.${otherName}_`;
    let currentStateValue;
    try {
      const currentState = eval(currentStateProperty);
      currentStateValue = (currentState !== undefined)
        ? specUtils.valueToStr(currentState)
        : " ";
    } catch (e) {
      currentStateValue = " ";
    }

    
    if (currentStateValue != null) {
      const nodes = automatonNodes[otherName];
      if (nodes) {
        let currentNode;
        if (nodes.length === 1) {
          currentNode = nodes.get()[0];
        } else {
          currentNode = nodes.get({
            filter: node => node.fullName === currentStateValue ||
              (node.fullName === " " && currentStateValue === " ")
          })[0];
        }
        if (currentNode) {
          const edgesDS = automatonEdges[otherName];
          if (edgesDS) {
            
            const outgoingEdges = edgesDS.get({
              filter: e => e.from === currentNode.id && ((e.full_label || e.label) === eventName)
            });
            if (outgoingEdges.length > 0) {
              rightLocation = true;
              
              const matchingEdge = outgoingEdges[0];
              if (matchingEdge.guard) {
                const guardContext = buildContextFromStateText();
                const overallEval = evaluateGuard(matchingEdge.guard, guardContext);
                guardOk = (overallEval.value === true);
                const overallColor = (overallEval.value === true) ? "green" : "darkred";
                const guardHtml = generateGuardHTML(matchingEdge.guard, guardContext, overallColor);
                guardDisplay = `<span class="guard-expression" style="color:black;"> - Guard: ${guardHtml}</span> ` +
                               `<span style="color:${overallColor};">--> (${overallEval.evaluation})</span>`;
              } else {
                guardOk = true;
                guardDisplay = "- No guard";
              }
            }
          }
        }
      }
    }

    const overallCorrect = rightLocation && guardOk;
    if (!overallCorrect) {
      allGreen = false;
    }
    let labelColor = overallCorrect ? "darkgreen" : "darkred";
    let labelSpan = `<span style="background:${labelColor}; color:white; padding: 0.1em 0.3em; line-height: 1.2;">${otherName}</span>`;
    return `<div class="sync-item" style="display: flex; align-items: center; gap: 0.5em; margin-bottom: 0.3em;">
              ${labelSpan}
              <span style="line-height: 1.2;">${guardDisplay}</span>
            </div>`;
  }).join("");

  
  const restrictedAutomata = automatonNames.filter(otherName =>
    restrictionList.includes(otherName) &&
    automatonEdges[otherName].get().some(otherEdge => (otherEdge.full_label || otherEdge.label) === eventName)
  );

  const restrictedHtml = restrictedAutomata.map(otherName => {
    
    let rightLocation = false;
    let guardOk = true;
    let guardDisplay = "";

    
    const currentStateProperty = `spec.${otherName}_`;
    let currentStateValue;
    try {
      const currentState = eval(currentStateProperty);
      currentStateValue = (currentState !== undefined)
        ? specUtils.valueToStr(currentState)
        : " ";
    } catch (e) {
      currentStateValue = " ";
    }

    
    if (currentStateValue != null) {
      const nodes = automatonNodes[otherName];
      if (nodes) {
        let currentNode;
        if (nodes.length === 1) {
          currentNode = nodes.get()[0];
        } else {
          currentNode = nodes.get({
            filter: node => node.fullName === currentStateValue ||
              (node.fullName === " " && currentStateValue === " ")
          })[0];
        }
        if (currentNode) {
          const edgesDS = automatonEdges[otherName];
          if (edgesDS) {
            
            const outgoingEdges = edgesDS.get({
              filter: e => e.from === currentNode.id && ((e.full_label || e.label) === eventName)
            });
            if (outgoingEdges.length > 0) {
              rightLocation = true;
              
              const matchingEdge = outgoingEdges[0];
              if (matchingEdge.guard) {
                const guardContext = buildContextFromStateText();
                const overallEval = evaluateGuard(matchingEdge.guard, guardContext);
                guardOk = (overallEval.value === true);
                const overallColor = (overallEval.value === true) ? "green" : "darkred";
                const guardHtml = generateGuardHTML(matchingEdge.guard, guardContext, overallColor);
                guardDisplay = `<span class="guard-expression" style="color:black;"> - Guard: ${guardHtml}</span> ` +
                               `<span style="color:${overallColor};">--> (${overallEval.evaluation})</span>`;
              } else {
                guardOk = true;
                guardDisplay = "- No guard";
              }
            }
          }
        }
      }
    }

    const overallCorrect = rightLocation && guardOk;
    let labelColor = overallCorrect ? "darkgreen" : "darkred";
    
    
    if (myCheckboxChecked && allGreen && !overallCorrect) {
      labelColor = "purple";
    }
    if (!rightLocation) {
      guardDisplay = "- wrong location";
    }
    let labelSpan = `<span style="background:${labelColor}; color:white; padding: 0.1em 0.3em; line-height: 1.2;">${otherName}</span>`;
    return `<div class="sync-item" style="display: flex; align-items: center; gap: 0.5em; margin-bottom: 0.3em;">
              ${labelSpan}
              <span style="line-height: 1.2;">${guardDisplay}</span>
            </div>`;
  }).join("");

  
  let syncWithList = nonRestrictedHtml + restrictedHtml;

  
  automatonNames.forEach(name => {
    const guardDiv = document.getElementById(name + "-div");
    if (guardDiv) {
      guardDiv.classList.remove("automaton-container-orange");
    }
  });

  
  const syncAutomata = automatonNames.filter(otherName => {
    const otherEdges = automatonEdges[otherName].get();
    return otherEdges.some(otherEdge => (otherEdge.full_label || otherEdge.label) === eventName);
  });

  for (const id of syncAutomata) {
    const guardDiv = document.getElementById(id + "-div");
    if (guardDiv) {
      guardDiv.classList.add("automaton-container-orange");
    }
  }

  yellowAutomata = syncAutomata;

  let content = `<div class="event-info">Selected event: <strong>${eventName}</strong></div>`;
  if (guardInfo) {
    content += `<div class="guard-info">${syncWithList}</div>`;
  }

  overlay.innerHTML = content;

  
  automatonNames.forEach(automatonName => {
    const edges = automatonEdges[automatonName];
    const hasOnlySelfLoops = window.automatonProperties &&
                             window.automatonProperties[automatonName]?.hasOnlySelfLoops;
    updateYellowHighlighting(automatonName, edges, hasOnlySelfLoops);
  });
}


function astToPerLiteralDisplayString(ast, context, overallColor, parentOp = null) {
  const baseStyle = "font-family: 'Fira Code', Consolas, 'Source Code Pro', monospace;";
  if (!ast) return "";
  
  const atomicTypes = ["literal", "intLiteral", "constant", "discVar", "location"];
  
  
  if (atomicTypes.includes(ast.type)) {
    let text = ast.expression;
    let evalVal = evaluateGuard(ast, context).value;
    
    let contributes = (overallColor === "green") ? (evalVal === true) : (evalVal === false);
    let displayColor = (overallColor === "green") ? "darkgreen" : overallColor;
    if (contributes) {
      return `<span style="${baseStyle} color: ${displayColor};">${text}</span>`;
    } else {
      return `<span style="${baseStyle} color: grey;">${text}</span>`;
    }
  }
  
  
  if (ast.type === "unary") {
    const opSymbol = ast.operator;
    
    if (ast.operator === "!" && atomicTypes.includes(ast.child.type)) {
      let childText = ast.child.expression;
      let combined = childText;
      
      let evalVal = evaluateGuard(ast, context).value;
      let contributes = (overallColor === "green") ? (evalVal === true) : (evalVal === false);
      let displayColor = (overallColor === "green") ? "darkgreen" : overallColor;
      if (contributes) {
        return `<span style="${baseStyle} --neg-color: ${displayColor};" class="negated">${combined}</span>`;


      } else {
        return `<span style="${baseStyle} color: grey;">${combined}</span>`;
      }
    } else {
      
      let childStr = astToPerLiteralDisplayString(ast.child, context, overallColor, ast.operator);
      if (ast.child.type === "binary") {
        childStr = "(" + childStr + ")";
      }
      return `<span style="${baseStyle}">${opSymbol}${childStr}</span>`;
    }
  }
  
  
  if (ast.type === "binary") {
    let opSymbol = (ast.operator === "&&") ? " ∧ " : (ast.operator === "||") ? " ∨ " : " " + ast.operator + " ";
    let leftStr = astToPerLiteralDisplayString(ast.left, context, overallColor, ast.operator);
    let rightStr = astToPerLiteralDisplayString(ast.right, context, overallColor, ast.operator);
    let combined = leftStr + opSymbol + rightStr;
    if (parentOp && parentOp !== ast.operator) {
      combined = "(" + combined + ")";
    }
    return `<span style="${baseStyle}">${combined}</span>`;
  }
  
  return `<span style="${baseStyle}">${ast.expression || "UNKNOWN"}</span>`;
}

function generateGuardHTML(ast, context, overallColor) {
  if (!ast) return "";
  return `<span class="guard-display">${astToPerLiteralDisplayString(ast, context, overallColor)}</span>`;
}


function evaluateGuard(ast, context) {
  if (!ast) return { value: undefined, text: "undefined", evaluation: "unknown" };

  switch (ast.type) {
    case "literal":
      return {
        type: "literal",
        value: ast.value,
        text: ast.expression,
        evaluation: ast.value ? "true" : "false"
      };
    case "intLiteral":
      return {
        type: "intLiteral",
        value: ast.value,
        text: ast.expression,
        evaluation: ast.expression
      };
    case "constant":
      return {
        type: "constant",
        value: ast.value,
        text: ast.expression,
        evaluation: ast.expression
      };
    case "discVar": {
      const fullExpr = ast.expression.trim();
      if (context.hasOwnProperty(fullExpr)) {
        const varVal = context[fullExpr];
        
        return {
          type: "discVar",
          value: varVal,
          text: fullExpr,
          evaluation: (typeof varVal === "boolean" ? (varVal ? "true" : "false") : varVal)
        };
      }
      const parts = fullExpr.split(".");
      if (parts.length > 1 && context.hasOwnProperty(parts[0])) {
        const automatonName = parts[0];
        const expectedState = parts.slice(1).join(".");
        const actualState = context[automatonName];
        const value = (actualState === expectedState);
        
        return {
          type: "discVar",
          value: value,
          text: fullExpr,
          evaluation: value ? "true" : "false"
        };
      } else {
        const varVal = context[fullExpr];
        
        return {
          type: "discVar",
          value: varVal,
          text: fullExpr,
          evaluation: (varVal !== undefined ? varVal.toString() : "undefined")
        };
      }
    }
    case "location":
      const locVal = context[ast.expression];
      return {
        type: "location",
        value: locVal,
        text: ast.expression,
        evaluation: (locVal !== undefined ? locVal.toString() : "undefined")
      };
    case "unary":
      const childEval = evaluateGuard(ast.child, context);
      let unaryRes;
      if (ast.operator === "!") {
        unaryRes = !childEval.value;
      } else {
        unaryRes = undefined;
      }
      return {
        type: "unary",
        operator: ast.operator,
        child: childEval,
        value: unaryRes,
        text: ast.operator + "(" + childEval.text + ")",
        evaluation: unaryRes ? "true" : "false"
      };
    case "binary":
      const leftEval = evaluateGuard(ast.left, context);
      const rightEval = evaluateGuard(ast.right, context);
      let binRes;
      if (ast.operator === "&&") {
        binRes = leftEval.value && rightEval.value;
      } else if (ast.operator === "||") {
        binRes = leftEval.value || rightEval.value;
      } else if (["<", ">", "<=", ">="].includes(ast.operator)) {
        const leftNum = typeof leftEval.value === "number" ? leftEval.value : Number(leftEval.value);
        const rightNum = typeof rightEval.value === "number" ? rightEval.value : Number(rightEval.value);
        switch (ast.operator) {
          case ">=": binRes = leftNum >= rightNum; break;
          case "<=": binRes = leftNum <= rightNum; break;
          case ">": binRes = leftNum > rightNum; break;
          case "<": binRes = leftNum < rightNum; break;
        }
      } else if (ast.operator === "+") {
        binRes = Number(leftEval.value) + Number(rightEval.value);
      } else if (ast.operator === "%") {
        binRes = Number(leftEval.value) % Number(rightEval.value);
      } else if (ast.operator === "==") {
        binRes = leftEval.value == rightEval.value;
      } else if (ast.operator === "!=") {
        binRes = leftEval.value != rightEval.value;
      }
      return {
        type: "binary",
        operator: ast.operator,
        left: leftEval,
        right: rightEval,
        value: binRes,
        text: "(" + leftEval.text + " " + ast.operator + " " + rightEval.text + ")",
        evaluation: (binRes !== undefined ? binRes.toString() : "undefined")
      };
    default:
      return { value: undefined, text: "unknown", evaluation: "unknown" };
  }
}


function buildContextFromStateText() {
  const stateText = spec.getStateText();
  const context = {};

  const pairs = stateText.split(",");
  pairs.forEach(pair => {
    const parts = pair.split("=");
    if (parts.length >= 2) {
      let key = parts[0].trim();
      let value = parts.slice(1).join("=").trim();

      if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      } else if (!isNaN(value)) {
        value = Number(value);
      }
      context[key] = value;
    }
  });

  for (const compositeKey in locationBools) {
    if (locationBools.hasOwnProperty(compositeKey)) {
      const parts = compositeKey.split(".");
      if (parts.length === 2) {
        const [automatonName, locationName] = parts;
        if (context.hasOwnProperty(automatonName)) {
          locationBools[compositeKey] = (context[automatonName] === locationName);
        }
      }
    }
  }

  Object.keys(context).forEach(key => {
    
    if (typeof context[key] === "string" && !key.includes(".")) {
      delete context[key];
    }
  });
  

  Object.assign(context, locationBools);

  
  
  return context;
}

function clearGuardOverlay() {
  const overlay = document.getElementById('guardAreaId');
  if (overlay) {
    overlay.innerHTML = "";
  }
  automatonNames.forEach(name => {
    const automatonDiv = document.getElementById(`${name}-div`);
    if (automatonDiv) {
      automatonDiv.classList.remove("automaton-container-orange");
    }
  });
}

function attachEdgeSelectionListener(network, automatonName) {
  network.on("selectEdge", function (params) {
    if (params.edges && params.edges.length > 0) {
      const edgeId = params.edges[0];
      const selectedEdge = automatonEdges[automatonName].get(edgeId);
      if (selectedEdge) {
        updateGuardOverlay(selectedEdge, automatonName);

      }
    }
  });
}



function updateYellowHighlighting(automatonName, edges, hasOnlySelfLoops) {
  
  
  
  const trimmedAutomatonName = automatonName.trim();
  
  
  let effectiveSelectedEvent = "";
  if (selectedYellowEvent !== "none") {
    
    effectiveSelectedEvent = selectedYellowEvent.replace(/\u00A0/g, " ").trim();
    
    if (effectiveSelectedEvent.indexOf(trimmedAutomatonName + ".") === 0) {
      effectiveSelectedEvent = effectiveSelectedEvent.substring(trimmedAutomatonName.length + 1).trim();
    }
  }

  
  const allEdges = edges.get();
  let highlightedCount = 0; 
  
  allEdges.forEach(edge => {
    
    const rawLabel = edge.full_label || edge.label || "";
    const normalizedLabel = rawLabel.replace(/\u00A0/g, " ").trim();
    
    
    
    
    let effectiveEdgeLabel = normalizedLabel;
    if (normalizedLabel.indexOf(trimmedAutomatonName + ".") === 0) {
      effectiveEdgeLabel = normalizedLabel.substring(trimmedAutomatonName.length + 1).trim();
    }
    
    
    
    const isExactMatch = (selectedYellowEvent !== "none" && effectiveEdgeLabel === effectiveSelectedEvent);
    
    
    
    
    
    const shouldHighlight = (yellowAutomata.includes(automatonName) || hasOnlySelfLoops) && isExactMatch;
    
    
    
    const newStrokeColor = shouldHighlight
      ? "rgb(255, 234, 141)"
      : (edge.isSelfLoop ? "transparent" : "#f8f8f8");
    
    
    
    let newStrokeWidth = (edge.font && typeof edge.font.strokeWidth !== 'undefined')
      ? edge.font.strokeWidth
      : 0;
    if (edge.isSelfLoop && shouldHighlight) {
      newStrokeWidth = 5;
    }
    
    
    
    let newTextColor = (edge.font && edge.font.color) ? edge.font.color : "black";
    if (edge.isSelfLoop && edge.font && edge.font.background && edge.font.background !== "transparent") {
      newTextColor  = shouldHighlight ? "black" : "white";
    }


    
    
    const newFont = Object.assign({}, edge.font, {
      strokeColor: newStrokeColor,
      strokeWidth: newStrokeWidth,
      color: newTextColor
    });
    
    edges.update({
      id: edge.id,
      font: newFont
    });
    
    
    if (shouldHighlight) {
      highlightedCount++;
    }
  });
  
}
