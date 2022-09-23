function initializeBoard() {
    for (i = 0; i < columns; i++) {
      for (j = 0; j < rows; j++) {
        if (i == 0 || j == 0 || i == columns - 1 || j == rows - 1) {
          fill(255);
          board[i][j][0] = 0;
        } else {
          board[i][j][0] = floor(random(2));
        }
        if (board[i][j][0] == 1) {
          fill(color1);
        } else {
          fill(color3);
        }
  
        if (board[i][j][1] == 1) {
          stroke(color4);
        } else {
          stroke(color3);
        }
        circle(i * w, j * w, w);
      }
    }
}