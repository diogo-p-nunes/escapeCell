class Map {
    constructor(lvl, spritesheet) {
        this.lvl = lvl;
        rows = levels[lvl].rows;
        cols = levels[lvl].cols;
        this.walls = [];
        this.loadWalls();
        this.loadSprites(spritesheet);
    }

    loadWalls() {
        var w = levels[this.lvl].walls;
        for(var i = 0; i < w.length; i++) {
            var x = w[i][0];
            var y = w[i][1];
            this.walls.push(createVector(x,y));
        }
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