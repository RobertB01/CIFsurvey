function addCanvasOverlay(automaton, automatonName, networkContainer, network) {

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";

    networkContainer.style.position = "relative";
    networkContainer.appendChild(canvas);
  
    function resizeCanvas() {
      canvas.width = networkContainer.clientWidth;
      canvas.height = networkContainer.clientHeight;
    }
    resizeCanvas();
    
    const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
        network.redraw(); 
    });
    resizeObserver.observe(networkContainer);
    const startX = 15; 
    const startY = 25; 
  
    function drawOverlay() {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
      const dotRadius = 2;
      ctx.fillStyle = "rgba(85, 85, 85, 0.8)";
      ctx.beginPath();
      ctx.arc(startX, startY, dotRadius, 0, 2 * Math.PI);
      ctx.fill();
  

      const nodesData = automatonNodes[automatonName].get();
      const targetNode = nodesData.find(node =>
        automaton.locations.find(loc => loc.id === node.id && loc.initial)
      );
      if (!targetNode) return;
  

      const posNetwork = network.getPositions([targetNode.id]);
      const nodePos = posNetwork[targetNode.id];

      const posDOM = network.canvasToDOM(nodePos);
  
      const dx = posDOM.x - startX;
      const dy = posDOM.y - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance === 0) return; 
      const unitX = dx / distance;
      const unitY = dy / distance;
  
      const offset = 20; 
      const finalX = posDOM.x - unitX * offset;
      const finalY = posDOM.y - unitY * offset;
  
      ctx.strokeStyle = "rgba(68, 68, 68, 0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(finalX, finalY);
      ctx.stroke();
  
      const arrowHeadLength = 20; 
      const arrowAngle = Math.PI / 12; 
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
    network.on("beforeDrawing", function() {
      drawOverlay();
    });
  }
  