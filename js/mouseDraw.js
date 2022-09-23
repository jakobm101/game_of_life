  
function mouseDraw(mouseX, mouseY, w, columns, rows, width, height){  
  // Allow drawing with mouse
  let mouseCellX = calculateMouseCell(mouseX, w);
  let mouseCellY = calculateMouseCell(mouseY, w);

  //mouse press
  if (mouseIsPressed === true) {
    if (
      //exclude borders
      mouseCellX != 0 &&
      mouseCellY != 0 &&
      mouseCellX <= columns - 2 &&
      mouseCellY <= rows - 2 &&
      // just inside canvas
      mouseX < width &&
      mouseY < height
    ) {
      // activate clicked cell
      board[mouseCellX][mouseCellY][0] = 1;
      package = new Array;
      package.push(mouseCellX,mouseCellY);
      return 
    }
  }
}

function calculateMouseCell(mouse, w){
    return floor((mouse+(0.5*w)) / w);
}