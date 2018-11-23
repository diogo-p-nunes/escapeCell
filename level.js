class Level {
    constructor(lvl) {
        this.lvl = lvl;
        this.getMapByLvl(lvl);
    }

    getMapByLvl(lvl) {
        // ignore just load hardcoded map
        this.map = [
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

    render() {
        for(var x  = 0; x < cols; x++) {
            for(var y = 0; y < rows; y++) {
              if(this.map[x][y] == 0) {
                image(groundImg, y*unit, x*unit,unit, unit);
              }
              else if(this.map[x][y] == 1) {
                image(wallImg, y*unit, x*unit,unit, unit);
              }
            }
          }
    }
}