class MainChar extends Person {
    constructor(spritesheet) {
        super();
        this.pos = createVector(0,0);
        this.loadSprites(spritesheet);
        this.currentImg = this.imgs[0];
    }

    loadSprites(spritesheet) {
        // load all movements
        for(var i = 0; i < spritesheet.width; i += 16) {
            this.imgs.push(spritesheet.get(0, i, 16, 16));
        }
    }

    selectSprite(mov) {
        switch(mov) {
            case "U":
                return 1;
                break;
            case "D":
                return 0;
                break;
            case "R":
                return 2;
                break;
            case "L":
                return 3;
                break;
        }
    }


    validMove(old) {
        // only move if not wall
        if( level.map.isOutOfMap(this.pos.x, this.pos.y)
            || level.map.wall(this.pos.x, this.pos.y)) {
                this.pos = old;
        }

        // cannot do this verification here because it's 
        // only called when MAIN char moves
        if(level.policeVision(this.pos.x, this.pos.y)) {
            end = true;
        }
    }

}