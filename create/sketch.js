var rowsSlider, colsSlider;
var spritesheetGround, spritesheetMainChar, spriteSheetPolice, groundImg, wallImg, mainCharImg;
var walls = [];
var unit = 40, maxRows = 20, maxCols = 20;
var state;
var initPos, finalPos;
var policeRoute = [];
var allPoliceRoutes = [];

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
    if(state == 'W') {
        walls.splice(-1,1);
    }
    else if(state == 'P') {
        allPoliceRoutes.splice(-1,1);
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
    if(gridPlace.x < colsSlider.value() && gridPlace.x >= 0 &&
        gridPlace.y < rowsSlider.value() && gridPlace.y >= 0) {
            if(state == 'I') {
                initPos = gridPlace.copy();
                console.log(initPos);
            }
            else if(state == 'F') {
                finalPos = gridPlace.copy();
            }
            else if(state == 'W') {
                walls.push(gridPlace);
            }
    }
}

function mouseDragged() {
    gridPlace = createVector(floor(mouseX/unit), floor(mouseY/unit));
    if(gridPlace.x < colsSlider.value() && gridPlace.y < rowsSlider.value()) {
        if(state == 'P') {
            for(var i = 0; i < policeRoute.length; i++) {
                if( (policeRoute[i].x == gridPlace.x) && (policeRoute[i].y == gridPlace.y)) {
                    return;
                }
            }
            policeRoute.push(gridPlace);
            console.log(gridPlace);
        }
    }
}

function mouseReleased() {
    if(policeRoute.length >= 0 && state == 'P') {
        allPoliceRoutes.push(policeRoute);
        policeRoute = [];
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

function renderExit() {
    if(finalPos) {
        stroke(255);
        fill(255);
        textAlign(CENTER);
        text("EXIT", finalPos.x*unit + unit/2, finalPos.y*unit + unit/2);
    }
}

function renderPolice() {
    for(var i = 0; i < allPoliceRoutes.length; i++) {
        var p = allPoliceRoutes[i];
        for(var j = 0; j < p.length; j++) {
            var pos = p[j];
            fill(255);
            rect(pos.x*unit, pos.y*unit, unit, unit);
        }
    }
}

function checkBoundaries() {
    if(initPos && (initPos.x+1 > colsSlider.value() || initPos.y+1 > rowsSlider.value())) {
        initPos = null;
    }

    if(finalPos && (finalPos.x+1 > colsSlider.value() || finalPos.y+1 > rowsSlider.value())) {
        finalPos = null;
    }

    for(var i = walls.length-1; i >= 0; i--) {
        if(walls[i].x+1 > colsSlider.value() || walls[i].y+1 > rowsSlider.value()) {
            walls.splice(i,1);
        }
    }

    for(var i = allPoliceRoutes.length-1; i >= 0; i--) {
        var p = allPoliceRoutes[i];
        for(var j = 0; j < p.length; j++) {
            var pos = p[j];
            if(pos.x+1 > colsSlider.value() || pos.y+1 > rowsSlider.value()) {
                allPoliceRoutes.splice(i,1);
            }
        }
    }
}

function draw() {
    background(50);

    // check size and fits
    checkBoundaries();

    // draw
    renderMap();
    renderMainChar();
    renderExit();
    renderPolice();
}