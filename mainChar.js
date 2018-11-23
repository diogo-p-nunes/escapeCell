class MainChar extends Person {
    constructor() {
        super();
        this.pos = createVector(0,0);
        this.loadSprites(spritesheetMainChar);
        this.currentImg = this.imgs[0];
    }

    loadSprites(spritesheet) {
        // load all movements
        for(var i = 0; i < spritesheet.width; i += 16) {
            this.imgs.push(spritesheet.get(0, i, 16, 16));
        }
    }

}