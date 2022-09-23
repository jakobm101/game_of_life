function generateBoard() {
    for (x = 1; x < columns - 1; x++) {
      for (y = 1; y < rows - 1; y++) {
        let neighbors = 0;
        // Check neighbors
        for (k = -1; k <= 1; k++) {
          for (l = -1; l <= 1; l++) {
            neighbors += board[x + k][y + l][0];
          }
        }
  
        neighbors -= board[x][y][0];
  
        // Rules of life
        //reproduction
        if (board[x][y][0] == 0 && neighbors == 3) {
          next[x][y][0] = 1;
        }
        //lonely
        else if (board[x][y][0] == 1 && neighbors < 2) {
          next[x][y][0] = 0;
        }
        //too crowdy
        else if (board[x][y][0] == 1 && neighbors > 3) [(next[x][y][0] = 0)];
        else next[x][y][0] = board[x][y][0];
      }
    }
  
    // Swap old board to new board
    let temp = board;
    board = next;
    next = temp;


}