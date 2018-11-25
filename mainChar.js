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
}