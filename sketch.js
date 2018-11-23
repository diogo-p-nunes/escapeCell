var unit = 40;
var cols = 10;
var rows = 10;

var level, mainChar;
var spritesheetGround, spritesheetMainChar, spriteSheetPolice;


function preload() {
  spritesheetGround = loadImage("./assets/ground.png");
  spritesheetMainChar = loadImage("./assets/character_base_16x16.png");
  spriteSheetPolice = loadImage("./assets/npc-oldman1.png");
}

function setup() {
  createCanvas(400, 400);
  level = new Level(1, spritesheetGround);
  mainChar = new MainChar(spritesheetMainChar);
}

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW:
      mainChar.move(createVector(0, -unit), 1);
      break;
    case DOWN_ARROW:
      mainChar.move(createVector(0, unit), 0);
      break;
    case RIGHT_ARROW:
      mainChar.move(createVector(unit, 0), 2);
      break;
    case LEFT_ARROW:
      mainChar.move(createVector(-unit,0), 3);
      break;
  }
}

function draw() {
  background(50);
  //frameRate(2);
  
  level.render();
  mainChar.render();
}
