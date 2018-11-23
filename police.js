class Police extends Person {
    constructor(init, movs, dif) {
        super();
        this.loadSprites(spriteSheetPolice);
        this.currentImg = this.imgs[0];
        this.pos = init;
        this.movs = movs; 
        this.index = 0;
        this.goingUp = true;
        this.oldFrameCount = 0;
        this.dif = 60/dif;
    }

    loadSprites(spritesheet) {
        // load all movements
        for(var i = 32*4; i < spritesheet.width; i += 32) {
            this.imgs.push(spritesheet.get(0, i, 32, 32));
        }
    }

    selectSprite(mov) {
        switch(mov) {
            case "U":
                return 3;
                break;
            case "D":
                return 0;
                break;
            case "R":
                return 2;
                break;
            case "L":
                return 1;
                break;
        }
    }

    update() {
        if(frameCount - this.oldFrameCount < this.dif) {
            return;
        }
        switch(this.movs[this.index]) {
            case "U":
                this.moveUp();
                break;
            case "D":
                this.moveDown();
                break;
            case "R":
                this.moveRight();
                break;
            case "L":
                this.moveLeft();
                break;
        }

        if(this.goingUp) {
            this.index++;
            if(this.index >= this.movs.length) {
                this.index--;
                this.goingUp = false;
                this.negMovs();
            }
        }
        else {
            this.index--;
            if(this.index < 0) {
                this.index++;
                this.goingUp = true;
                this.negMovs();
            } 
        }
        this.oldFrameCount = frameCount;
    }

    negMovs() {
        for(var i = 0; i < this.movs.length; i++) {
            if(this.movs[i] == "U") {
                this.movs[i] = "D";
            }
            else if(this.movs[i] == "D") {
                this.movs[i] = "U";
            }
            else if(this.movs[i] == "L") {
                this.movs[i] = "R";
            }   
            else if(this.movs[i] == "R") {
                this.movs[i] = "L";
            }
        }
    }
}