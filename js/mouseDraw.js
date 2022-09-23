  
function mouseDraw(){  
  // Allow drawing with mouse
  let mouseCellX = calculateMouseCell(mouseX);
  let mouseCellY = calculateMouseCell(mouseY);

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
    }
  }
}

function calculateMouseCell(mouse){
    return floor((mouse+(0.5*w)) / w);
}