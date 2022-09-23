  
function mouseDraw(mouseX, mouseY, w, columns, rows, width, height){  
  // Allow drawing with mouse
  let mouseCellX = floor((mouseX+(0.5*w)) / w);
  let mouseCellY = floor((mouseY+(0.5*w)) / w);

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