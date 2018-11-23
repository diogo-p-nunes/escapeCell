var unit = 40;
var cols = 10;
var rows = 10;
var level;

var spritesheetGround, spritesheetChar;


function preload() {
  spritesheetGround = loadImage("./assets/ground.png");
}



function setup() {
  createCanvas(400, 400);
  level = new Level(1, spritesheetGround);
}

function draw() {
  background(50);
  level.render();
}
