/* 
GAME OF LIFE 
a discrete system for creating a reductionist model of self-replication
—Stanislav Ulam
*/

let w; 
const resolution = 4;

let columns;
let rows;

let board;
let next;

//Pausing
let paused;

//Colors
let color1;
let color2;
let color3;
let color4;

function setup() {
  // OPTIONS
  
  color1 = color(30, 235, 105);     //green
  color2 = color(30, 235, 105, 77); //green alpha
  color3 = color(255);              //white
  color4 = color(0);                //black

  // Calculate cellsize
  w = floor(width / resolution);
  // Create p5 canvas
  createCanvas(windowWidth, windowHeight);
  background(color3);
  //calculate columns and rows
  columns = floor(width  / w);
  rows =    floor(height / w);

  // Align html divs with grid
  divToGrid(w, columns); 

  //Pause button
  let button = createButton("⏵︎ PAUSE");
  button.position(0.5 * w, (rows - 1.5) * w);
  button.size(4 * w, w);
  button.mousePressed(function(){paused = !paused;});
  paused = 0;

  // create 2D arrays
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
    let boards = generateBoard(board, next, columns, rows);
    board = boards[0];
    next =  boards[1];
  }

  // Logo Drawing
  jplusplus(columns, rows);

  // Drawing with mouse
  mouseDraw(mouseX, mouseY, w, columns, rows, width, height);
  
  // Fill cells accordig to generated board
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
  //show which cells are going to be activated
  if (mouseX < width  - 2*w && 
      mouseY < height - 2*w &&
      mouseX > w && 
      mouseY > w) {
    let mouseCellX = calculateMouseCell(mouseX, w);
    let mouseCellY = calculateMouseCell(mouseY, w);
    fill(color2);
    circle(((mouseCellX) * w), ((mouseCellY) * w ), w);
  }
}

