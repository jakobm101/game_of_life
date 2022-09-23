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

//Pausing
let button; //for pausing
let paused;

//Spawn 

//Colors
let color1;
let color2;
let color3;
let color4;

function setup() {
  // OPTIONS
  color1 = color(30, 235, 105);     //green
  color2 = color(30, 235, 105, 77); //green alpha
  color3 = (255);                   //white
  color4 = (0);                     //black
  resolution = 4;
  
  // Calculate cellsize
  w = floor(width / resolution);
  // Create p5 canvas
  createCanvas(windowWidth, windowHeight);
  background(color3);
  //calculate columns and rows
  columns = floor(width / w);
  rows =    floor(height / w);

  // Align html divs with grid
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
  let mCellX = floor(mouseX / w);
  let mCellY = floor(mouseY / w);
  if (mouseX < width - w && mouseY < height - w && mouseX > w && mouseY > w) {
    fill(color2); ////
    circle(mCellX * w, mCellY * w, w);
  }
}

function pausing() {
  paused = !paused;
}
