let w; 
let resolution;
let columns;
let rows;
let board;
let next;

//Mouse Position in cells
let cellX;
let cellY;

//Pausing
let button; //for pausing
let paused;

//Colors
let color1;
let color2;

function setup() {
  resolution = 4;
  w = floor(width / resolution);
  createCanvas(windowWidth, windowHeight);
  //calculate columns and rows
  columns = floor(width / w);
  rows = floor(height / w);

  // Set title DIV to match grid
  document.getElementById("title").style.top = (w * 12.5).toString() + "px";
  document.getElementById("title").style.left =
    (w * (columns - 10.5)).toString() + "px";

  //set circly DIV to match size
  document.getElementById("circly").style.width = w.toString() + "px";
  document.getElementById("circly").style.height = w.toString() + "px";

  color1 = color(30, 235, 105); //green
  color2 = color(30, 235, 105, 77); //green translucent

  //Pause button
  button = createButton("⏵︎ PAUSE");
  button.position(0.5 * w, (rows - 1.5) * w);
  button.size(4 * w, w);
  button.mousePressed(pausing);
  paused = 0;

  //setup basics

  cellX = floor(mouseX / w);
  cellY = floor(mouseY / w);

  background(255);

  board = new Array(columns);
  for (let i = 0; i < columns; i++) {
    board[i] = new Array(rows);
    for (let j = 0; j < rows; j++) board[i][j] = new Array(2);
  }
  next = new Array(columns);
  for (let i = 0; i < columns; i++) {
    next[i] = new Array(rows);
    for (let j = 0; j < rows; j++) next[i][j] = new Array(2);
  }

  // Start the game of life
  initialize();
}

function draw() {
  // GENERATE
  if (paused == 0) {
    generate();
  }

  /////// Logo Drawing
  let xxx = floor(columns / 2) - 5;
  let yyy = floor(rows / 2) - 5;
  board[xxx + 2][yyy + 0][0] = 2;
  board[xxx + 1][yyy + 0][0] = 2;
  board[xxx + 2][yyy + 1][0] = 2;
  board[xxx + 2][yyy + 2][0] = 2;
  board[xxx + 2][yyy + 3][0] = 2;
  board[xxx + 1][yyy + 4][0] = 2;

  board[xxx + 5][yyy + 1][0] = 2;
  board[xxx + 4][yyy + 2][0] = 2;
  board[xxx + 5][yyy + 2][0] = 2;
  board[xxx + 6][yyy + 2][0] = 2;
  board[xxx + 5][yyy + 3][0] = 2;

  board[xxx + 9][yyy + 1][0] = 2;
  board[xxx + 8][yyy + 2][0] = 2;
  board[xxx + 9][yyy + 2][0] = 2;
  board[xxx +10][yyy + 2][0] = 2;
  board[xxx + 9][yyy + 3][0] = 2;

  // DRAWING CELLS
  cellX = floor(mouseX / w);
  cellY = floor(mouseY / w);

  //mouse press
  if (mouseIsPressed === true) {
    if (
      //exclude borders
      cellX != 0 &&
      cellY != 0 &&
      cellX != columns - 1 &&
      cellY != rows - 1 &&
      // just inside canvas
      mouseX < width &&
      mouseY < height
    ) {
      // activate clicked cell
      board[cellX][cellY][0] = 1;
    }
  }

  // Create "pixel" accordig to generated board
  for (i = 0; i < columns; i++) {
    for (j = 0; j < rows; j++) {
      if (board[i][j][0] == 2) {
        fill(0);
      } else if (board[i][j][0] == 1) {
        fill(color1);
      } else {
        fill(255, 255, 255);
      }
      circle(i * w, j * w, w);
    }
  }

  //HOVER Mouse on grid
  if (mouseX < width - w && mouseY < height - w && mouseX > w && mouseY > w) {
    fill(color2); ////
    circle(cellX * w, cellY * w, w);
  }
}

function initialize() {
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
        fill(255, 255, 255);
      }

      if (board[i][j][1] == 1) {
        stroke(0);
      } else {
        stroke(255);
      }
      circle(i * w, j * w, w);
    }
  }
}

function generate() {
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

  // Swap
  let temp = board;
  board = next;
  next = temp;
}

function pausing() {
  paused = !paused;
}
