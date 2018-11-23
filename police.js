class Police extends Person {
    constructor(init, movs) {
        super();
        this.loadSprites(spriteSheetPolice);
        this.currentImg = this.imgs[0];
        this.pos = init;
        this.movs = movs;
        
    }

    loadSprites(spritesheet) {
        // load all movements
        for(var i = 0; i < spritesheet.width; i += 16) {
            this.imgs.push(spritesheet.get(0, i, 128, 128));
        }
    }


}