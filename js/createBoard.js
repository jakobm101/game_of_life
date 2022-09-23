function createBoard(){
    newboard = new Array(columns);
    for (let i = 0; i < columns; i++) {
    newboard[i] = new Array(rows);
      for (let j = 0; j < rows; j++) newboard[i][j] = new Array(2);
    }
    return newboard;
  }