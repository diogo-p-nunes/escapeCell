class Map {
    constructor(lvl, spritesheet) {
        this.walls = [];
        rows = 10;
        cols = 10;

        this.loadWalls(lvl);
        this.loadSprites(spritesheet);
    }

    loadWalls(lvl) {
        // for now its hardcoded
        this.walls.push(createVector(0,1));
        this.walls.push(createVector(1,1));
        this.walls.push(createVector(2,1));
        this.walls.push(createVector(2,2));

        this.walls.push(createVector(4,1));
        this.walls.push(createVector(5,1));
        this.walls.push(createVector(4,2));
        this.walls.push(createVector(5,2));

        this.walls.push(createVector(5,4));
        this.walls.push(createVector(6,4));
        this.walls.push(createVector(7,4));
        this.walls.push(createVector(8,4));
        this.walls.push(createVector(8,4));
        this.walls.push(createVector(8,3));
        this.walls.push(createVector(8,5));

        this.walls.push(createVector(0,5));
        this.walls.push(createVector(1,5));
        this.walls.push(createVector(2,5));
        this.walls.push(createVector(3,5));

        this.walls.push(createVector(1,7));
        this.walls.push(createVector(1,8));
        this.walls.push(createVector(1,9));

        this.walls.push(createVector(6,6));
        this.walls.push(createVector(6,7));
        this.walls.push(createVector(7,7));
        this.walls.push(createVector(7,8));
        this.walls.push(createVector(8,7));
        this.walls.push(createVector(8,8));
        this.walls.push(createVector(8,9));
    }

    isOutOfMap(x, y) {
        return x < 0 || y < 0 || x >= cols || y >= rows;
    }

    loadSprites(spritesheet) {
        // values specific to this spritesheet
        this.groundImg = spritesheet.get(0, 0, 48, 48);
        this.wallImg = spritesheet.get(2*48, 0, 48, 48);
    }

    wall(x, y) {
        var temp = createVector(x, y);
        for(var vec of this.walls) {
            if(vec.x == temp.x && vec.y == temp.y) {
                return true;
            }
        }
        return false;
    }

    render() {
        imageMode(CORNER);
        for(var x  = 0; x < cols; x++) {
            for(var y = 0; y < rows; y++) {
              if(this.wall(x,y)) {
                image(this.wallImg, x*unit, y*unit,unit, unit);
              }
              else {
                image(this.groundImg, x*unit, y*unit, unit, unit);
              }
            }
        }
    }
}