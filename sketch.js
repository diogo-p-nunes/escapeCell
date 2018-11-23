var unit = 40;
var cols;
var rows;
var margin = 5;

var level, mainChar;
var spritesheetGround, spritesheetMainChar, spriteSheetPolice;


function preload() {
  spritesheetGround = loadImage("./assets/ground.png");
  spritesheetMainChar = loadImage("./assets/character_base_16x16.png");
  spriteSheetPolice = loadImage("./assets/police.jpg");
}

function setup() {
  level = new Level(1, spritesheetGround);
  createCanvas(cols*unit, rows*unit);
  mainChar = new MainChar(spritesheetMainChar);
}

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW:
      mainChar.moveUp();
      break;
    case DOWN_ARROW:
      mainChar.moveDown();
      break;
    case RIGHT_ARROW:
      mainChar.moveRight();
      break;
    case LEFT_ARROW:
      mainChar.moveLeft();
      break;
  }
}

function draw() {
  background(50);
  
  level.render();
  level.updatePolice();
  mainChar.render();
}
