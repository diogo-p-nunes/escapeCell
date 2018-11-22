var unit = 40;
var spritesheet, groundImg, wallImg;

function preload() {
  spritesheet = loadImage("./assets/ground.png");
}

function loadSprites() {
  groundImg = spritesheet.get(0, 0, 48, 48);
  wallImg = spritesheet.get(2*48, 0, 48, 48);
}

function setup() {
  createCanvas(600, 400);
  loadSprites();
  background(50);
}

function draw() {
  background(50);
  for(var i = 0; i < width/unit; i++) {
    for(var j = 0; j < height/unit; j++) {
      image(groundImg, i*unit, j*unit,unit, unit);
    }
  }
}
