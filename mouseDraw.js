  
function mouseDraw(mouseX, mouseY, w){  
  // Allow drawing with mouse
  let mouseCellX = floor(mouseX / w);
  let mouseCellY = floor(mouseY / w);

  //mouse press
  if (mouseIsPressed === true) {
    if (
      //exclude borders
      mouseCellX != 0 &&
      mouseCellY != 0 &&
      mouseCellX != columns - 1 &&
      mouseCellY != rows - 1 &&
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