var unit = 40;
var cols = 10;
var rows = 10;
var level;

var spritesheet, groundImg, wallImg;


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
  level = new Level(1);
}

function draw() {
  background(50);
  level.render();
}
