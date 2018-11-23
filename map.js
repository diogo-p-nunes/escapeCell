class Map {
    constructor(lvl, spritesheet) {
        this.getMapByLvl(lvl);
        this.loadSprites(spritesheet);
    }

    getMapByLvl(lvl) {
        // ignore just load hardcoded map
        this.layout = [
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,0,0,0],
            [1,1,1,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
          ]
    }

    loadSprites(spritesheet) {
        this.groundImg = spritesheet.get(0, 0, 48, 48);
        this.wallImg = spritesheet.get(2*48, 0, 48, 48);
    }

    render() {
        for(var x  = 0; x < cols; x++) {
            for(var y = 0; y < rows; y++) {
              if(this.layout[x][y] == 0) {
                image(this.groundImg, y*unit, x*unit,unit, unit);
              }
              else if(this.layout[x][y] == 1) {
                image(this.wallImg, y*unit, x*unit,unit, unit);
              }
            }
        }
    }
}