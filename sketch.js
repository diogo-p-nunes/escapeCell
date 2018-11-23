var unit = 40;
var cols = 10;
var rows = 10;
var spritesheet, groundImg, wallImg;
var map;


function preload() {
  spritesheet = loadImage("./assets/ground.png");
}

function loadSprites() {
  groundImg = spritesheet.get(0, 0, 48, 48);
  wallImg = spritesheet.get(2*48, 0, 48, 48);
}

function setup() {
  createCanvas(400, 400);
  loadSprites();
  background(50);

  map = [
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0],
    [1,1,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]
}

function draw() {
  background(50);

  for(var x  = 0; x < cols; x++) {
    for(var y = 0; y < rows; y++) {
      if(map[x][y] == 0) {
        image(groundImg, y*unit, x*unit,unit, unit);
      }
      else if(map[x][y] == 1) {
        image(wallImg, y*unit, x*unit,unit, unit);
      }
    }
  }
}
