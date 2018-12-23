var unit = 40;
var cols;
var rows;
var margin = 5;
var end = false, success = false;

var level, mainChar;
var spritesheetGround, spritesheetMainChar, spriteSheetPolice;


function preload() {
  spritesheetGround = loadImage("../assets/ground.png");
  spritesheetMainChar = loadImage("../assets/character_base_16x16.png");
  spriteSheetPolice = loadImage("../assets/police.jpg");
}

function setup() {
  level = new Level(1, spritesheetGround);
  createCanvas(cols*unit, rows*unit);
  mainChar = new MainChar(spritesheetMainChar);
  level.render();
  mainChar.render();
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

  level.updatePolice();
  end = level.policeVision(mainChar.pos.x, mainChar.pos.y);
  success = (mainChar.pos.x == level.exit.x) && (mainChar.pos.y == level.exit.y);

  level.render();
  mainChar.render();

  if(end) {
    text("CAUGHT!", width/2, height/2);
    noLoop();
  }
  else if(success) {
    text("SUCCESS!", width/2, height/2);
    noLoop();
  }
}
