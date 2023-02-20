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
let paused = 0;

//Colors
let color1;
let color2;
let color3;
let color4;



function setup() {

  

  // OPTIONS
  
  color1 = color(30, 235, 105);     //green
  color2 = color(30, 235, 105, 77); //green alpha
  color3 = color(249);              //white
  color4 = color(60);               //black

  // Calculate cellsize
  w = floor(width / resolution);
  // Create p5 canvas
  cnv = createCanvas(windowWidth, windowHeight);
  // stop calculating when mouse outside canvas
  cnv.mouseOver(loop);
  cnv.mouseOut(noLoop);
  background(color3);

  //calculate columns and rows
  columns = floor(width  / w);
  rows =    floor(height / w);

  // Align html divs with grid
  divToGrid(); 

  //Pause button
  let button = createButton("⏵︎ PAUSE");
  button.position(0.5 * w, (rows - 1.5) * w);
  button.size(4 * w, w);
  button.mousePressed(function(){paused = !paused;});
  //button.mouseOver(loop);

  // create 2D arrays
  board = createBoard();
  next  = createBoard();
  // Initialize the game of life    
  initializeBoard();
}

function draw() {
  // GENERATE NEW BOARD
  if (paused == 0) {generateBoard();}

  // Logo Drawing
  jplusplus();

  // Drawing with mouse
  mouseDraw();
  
  // Fill cells accordig to generated board
  for (i = 0; i < columns; i++) {
    for (j = 0; j < rows; j++) {
      if        (board[i][j][0] == 2) {
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
      mouseX > w            && 
      mouseY > w) {
    let mouseCellX = calculateMouseCell(mouseX);
    let mouseCellY = calculateMouseCell(mouseY);
    fill(color2);
    circle(((mouseCellX) * w), ((mouseCellY) * w ), w);
  }
}

