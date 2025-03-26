function addCanvasOverlay(automaton, automatonName, networkContainer, network) {
    // Create a canvas element that overlays the networkContainer.
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none"; // allow interactions to pass through
    // Ensure the container is positioned relatively.
    networkContainer.style.position = "relative";
    networkContainer.appendChild(canvas);
  
    // Adjust canvas resolution to match the container.
    function resizeCanvas() {
      canvas.width = networkContainer.clientWidth;
      canvas.height = networkContainer.clientHeight;
    }
    resizeCanvas();
    
    const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
        network.redraw(); // Force redraw to update arrow positions
    });
    resizeObserver.observe(networkContainer);
    // Starting dot position (e.g. slightly offset from top-left).
    const startX = 15; // pixels from left
    const startY = 25; // pixels from top
  
    // Function to draw the overlay line and arrow.
    function drawOverlay() {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw the starting dot.
      const dotRadius = 2;
      ctx.fillStyle = "rgba(85, 85, 85, 0.8)";
      ctx.beginPath();
      ctx.arc(startX, startY, dotRadius, 0, 2 * Math.PI);
      ctx.fill();
  
      // Retrieve nodes for this automaton.
      const nodesData = automatonNodes[automatonName].get();
      // Find the target node (assumed to be the initial node).
      const targetNode = nodesData.find(node =>
        automaton.locations.find(loc => loc.id === node.id && loc.initial)
      );
      if (!targetNode) return;
  
      // Get the node's position in network coordinates.
      const posNetwork = network.getPositions([targetNode.id]);
      const nodePos = posNetwork[targetNode.id];
      // Convert the network position to DOM coordinates.
      const posDOM = network.canvasToDOM(nodePos);
  
      // Compute vector from the starting dot (startX, startY) to the node's DOM position.
      const dx = posDOM.x - startX;
      const dy = posDOM.y - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance === 0) return; // Avoid division by zero.
      const unitX = dx / distance;
      const unitY = dy / distance;
  
      // Define an offset so the line stops before reaching the node's center.
      const offset = 20; // Adjust as needed.
      const finalX = posDOM.x - unitX * offset;
      const finalY = posDOM.y - unitY * offset;
  
      // Draw a black, transparent line from the dot (startX, startY) to (finalX, finalY).
      ctx.strokeStyle = "rgba(68, 68, 68, 0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(finalX, finalY);
      ctx.stroke();
  
      // Draw an arrowhead at the end of the line.
      const arrowHeadLength = 20; // Length of the arrowhead.
      const arrowAngle = Math.PI / 12; // 15° angle.
      const angle = Math.atan2(finalY - startY, finalX - startX);
      const arrowPoint1 = {
        x: finalX - arrowHeadLength * Math.cos(angle - arrowAngle),
        y: finalY - arrowHeadLength * Math.sin(angle - arrowAngle)
      };
      const arrowPoint2 = {
        x: finalX - arrowHeadLength * Math.cos(angle + arrowAngle),
        y: finalY - arrowHeadLength * Math.sin(angle + arrowAngle)
      };
  
      ctx.fillStyle = ctx.strokeStyle;
      ctx.beginPath();
      ctx.moveTo(finalX, finalY);
      ctx.lineTo(arrowPoint1.x, arrowPoint1.y);
      ctx.lineTo(arrowPoint2.x, arrowPoint2.y);
      ctx.closePath();
      ctx.fill();
    }
  
    // Use "beforeDrawing" so the custom drawing appears behind nodes and edges.
    network.on("beforeDrawing", function() {
      drawOverlay();
    });
  }
  