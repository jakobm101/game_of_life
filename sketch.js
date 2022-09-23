/* 
GAME OF LIFE 
a discrete system for creating a reductionist model of self-replication
—Stanislav Ulam
*/

let w; 
let resolution;

let columns;
let rows;

let board;
let next;

//Mouse Position in cells
let mouseCellX;
let mouseCellY;

//Pausing
let button; //for pausing
let paused;

//Spawn 

//Colors
let color1;
let color2;
let color3;

function setup() {
  // OPTIONS
  color1 = color(30, 235, 105);     //green
  color2 = color(30, 235, 105, 77); //green alpha
  color3 = (255);
  color4 = (0);
  resolution = 4;
  
  // Calculations
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
  document.getElementById("circly").style.width = (w*2).toString() + "px";
  document.getElementById("circly").style.height = (w*2).toString() + "px";


  //Pause button
  button = createButton("⏵︎ PAUSE");
  button.position(0.5 * w, (rows - 1.5) * w);
  button.size(4 * w, w);
  button.mousePressed(pausing);
  paused = 0;

  //setup basics

  mouseCellX = floor(mouseX / w);
  mouseCellY = floor(mouseY / w);

  background(color3);

  board = createBoard(columns,rows);
  next  = createBoard(columns,rows);
  // Initialize the game of life    
  initializeBoard(board,columns,rows,color1,color2,color3,color4)

}

function draw() {
  // GENERATE NEW BOARD
  let boards = new Array;
  boards.push(board,next);
  if (paused == 0) { 
    boards = generateBoard(board, next, columns, rows);
    board = boards[0];
    next = boards[1];
  }

  // Logo Drawing
  jplusplus(columns, rows);

  // Allow drawing with mouse
  mouseCellX = floor(mouseX / w);
  mouseCellY = floor(mouseY / w);

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
    }
  }

  // Create "pixel" accordig to generated board
  for (i = 0; i < columns; i++) {
    for (j = 0; j < rows; j++) {
      if (board[i][j][0] == 2) {
        fill(color4);
      } else if (board[i][j][0] == 1) {
        fill(color1);
      } else {
        fill(color3);
      }
      circle(i * w, j * w, w);
    }
  }

  //HOVER Mouse on grid
  if (mouseX < width - w && mouseY < height - w && mouseX > w && mouseY > w) {
    fill(color2); ////
    circle(mouseCellX * w, mouseCellY * w, w);
  }
}

/*
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

  // Swap old board to new board
  let temp = board;
  board = next;
  next = temp;
}
*/

function pausing() {
  paused = !paused;
}
