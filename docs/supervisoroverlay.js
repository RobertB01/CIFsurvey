



function isEventGreenForAutomaton(eventName, automatonName) {
  let rightLocation = false;
  let guardOk = true;

  
  const currentStateProperty = `spec.${automatonName}_`;
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
    const nodes = automatonNodes[automatonName];
    if (nodes) {
      let currentNode;
      if (nodes.length === 1) {
        currentNode = nodes.get()[0];
      } else {
        currentNode = nodes.get({
          filter: node =>
            node.fullName === currentStateValue ||
            (node.fullName === " " && currentStateValue === " ")
        })[0];
      }
      if (currentNode) {
        const edgesDS = automatonEdges[automatonName];
        if (edgesDS) {
          
          const outgoingEdges = edgesDS.get({
            filter: e =>
              e.from === currentNode.id &&
              ((e.full_label || e.label) === eventName)
          });
          if (outgoingEdges.length > 0) {
            rightLocation = true;
            
            const matchingEdge = outgoingEdges[0];
            if (matchingEdge.guard) {
              const guardContext = buildContextFromStateText();
              const overallEval = evaluateGuard(matchingEdge.guard, guardContext);
              guardOk = (overallEval.value === true);
            } else {
              
              guardOk = true;
            }
          }
        }
      }
    }
  }
  
  return rightLocation && guardOk;
}














function updatePurpleOverlay() {
  
  purpleEvents = [];
  
  
  eventMap.forEach(eventName => {
    
    let restrictorRelevant = false;   
    let restrictorBlocks = false;       
    let nonRestrictorRelevant = false;  
    let nonRestrictorGreen = true;      
    let blockCount = 0;

    
    
    automatonNames.forEach(automatonName => {
      const edgesDS = automatonEdges[automatonName];
      if (!edgesDS) return;
      
      
      const edges = edgesDS.get();
      const eventOccurs = edges.some(edge => (edge.full_label || edge.label) === eventName);
      if (!eventOccurs) return;
      
      
      if (restrictionList.includes(automatonName)) {
        restrictorRelevant = true;
        
        if (!isEventGreenForAutomaton(eventName, automatonName)) {
          restrictorBlocks = true;
          blockCount++;
        }
      } else {
        nonRestrictorRelevant = true;
        
        if (!isEventGreenForAutomaton(eventName, automatonName)) {
          nonRestrictorGreen = false;
        }
      }
    });
    
    
    
    
    
    if (restrictorRelevant && restrictorBlocks && nonRestrictorGreen) {
      purpleEvents.push({ eventName, blockCount });
    }
  });
  
  console.log("Purple events (only blocked by automata in restrictionList):", purpleEvents);
  
  
  Object.keys(eventMap).forEach(eventName => {
    const edgeElement = document.getElementById(eventName + "-edge");
    if (edgeElement) {
      edgeElement.classList.remove("edge-purple");
    }
  });
  
  
  purpleEvents.forEach(eventName => {
    const edgeElement = document.getElementById(eventName + "-edge");
    if (edgeElement) {
      edgeElement.classList.add("edge-purple");
    }
  });

  highlightCurrentState();
}



document.getElementById("myCheckbox").addEventListener("change", updateAutomataClasses);





function updateAutomataClasses() {
  const checkboxText = document.getElementById("sup-overlay-text");
  const myCheckbox = document.getElementById("myCheckbox");

  if (restrictionList.length > 0) {
    restrictionList.forEach(automatonName => {
      const automatonDiv = document.getElementById(`${automatonName}-div`);
      if (!automatonDiv) {
        console.warn(`${automatonName}-div not found.`);
        return;
      }

      if (myCheckbox.checked) {
        checkboxText.classList.add("purple");
        automatonDiv.classList.add("automaton-container-purple");
        highlightCurrentState();
      } else {
        automatonDiv.classList.remove("automaton-container-purple");
        checkboxText.classList.remove("purple");
        highlightCurrentState();
      }
    });

    if (myCheckbox.checked) {
      updatePurpleOverlay();
    } else {
      purpleEvents = [];
    }
    highlightCurrentState();
  } else {
    console.warn("No automata found in the restrictionList.");
  }


}

