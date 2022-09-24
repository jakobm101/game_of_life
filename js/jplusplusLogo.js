function jplusplus(){
  xTranslate = 1;
  yTranslate = 7;
  let startX = floor(columns / 2) - xTranslate;
  let startY = floor(rows    / 2) - yTranslate;
  
  // Drawing the "J"
  drawingCellsJ = [
      [2,0],
      [1,0],
      [2,1],
      [2,2],
      [2,3],
      [1,4],     
  ]
  // Drawing a plus
  drawingCellsPlus = [
      [5,1],
      [4,2],
      [5,2],
      [6,2],
      [5,3]
  ]
  // Put "J" on board
  for (cell of drawingCellsJ) {
    board[startX + cell[0]][startY + cell[1]][0] = 2;
  }

  // Put plusses on board
  for (cell of drawingCellsPlus){
    let plusQuantity = 0;
    for (plus=0;plus<plusQuantity;plus++){
    board[startX+(plus*(4)) + cell[0]][startY + cell[1]][0] = 2;
  }
}
}