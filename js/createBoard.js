function createBoard(numcolumns,numrows){
    newboard = new Array(columns);
    for (let i = 0; i < numcolumns; i++) {
    newboard[i] = new Array(rows);
      for (let j = 0; j < numrows; j++) newboard[i][j] = new Array(2);
    }
    return newboard;
  }