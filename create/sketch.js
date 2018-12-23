var rowsSlider, colsSlider;
var spritesheetGround, spritesheetMainChar, spriteSheetPolice, groundImg, wallImg, mainCharImg;
var walls = [];
var unit = 40, maxRows = 20, maxCols = 20;
var state;
var initPos;

function preload() {
    spritesheetGround = loadImage("../assets/ground.png");
    spritesheetMainChar = loadImage("../assets/character_base_16x16.png");
    spriteSheetPolice = loadImage("../assets/police.jpg");
}

function loadSprites() {
    // values specific to this spritesheet
    groundImg = spritesheetGround.get(0, 0, 48, 48);
    wallImg = spritesheetGround.get(2*48, 0, 48, 48);
    mainCharImg = spritesheetMainChar.get(0, 0, 16, 16);
}

function setup() {
    rowsSlider = createSlider(1,maxRows,5,1);
    colsSlider = createSlider(1,maxCols,5,1);
    loadSprites();
    createCanvas(maxCols*unit, maxRows*unit)
}

function removeLast() {
    if(state == 'I') {
        initPos = null;
    }
}

function keyPressed() {
    //console.log(key);
    if(keyCode == BACKSPACE) {
        removeLast();
    }
    else if (key == 'I' || key == 'F' ||
             key == 'P'|| key == 'W') {
        state = key;
    }
}


function mousePressed() {
    gridPlace = createVector(floor(mouseX/unit), floor(mouseY/unit));
    console.log(gridPlace);
    
    if(state == 'I') {
        if(gridPlace.x < colsSlider.value() &&
           gridPlace.y < rowsSlider.value()) {
                initPos = gridPlace.copy();
           }
    }
}

function wall(x, y) {
    var temp = createVector(x, y);
    for(var vec of walls) {
        if(vec.x == temp.x && vec.y == temp.y) {
            return true;
        }
    }
    return false;
}

function renderMap() {
    imageMode(CORNER);
    for(var x  = 0; x < colsSlider.value(); x++) {
        for(var y = 0; y < rowsSlider.value(); y++) {
          if(wall(x,y)) {
            image(wallImg, x*unit, y*unit,unit, unit);
          }
          else {
            image(groundImg, x*unit, y*unit, unit, unit);
          }
        }
    }
}

function renderMainChar() {
    if(initPos) {
        imageMode(CORNER);
        image(mainCharImg, initPos.x*unit, initPos.y*unit, unit, unit);
    } 
}

function draw() {
    background(255);
    renderMap();
    renderMainChar();
}