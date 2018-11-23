class MainChar {
    constructor(spritesheet) {
        this.margin = 5;
        this.pos = createVector(unit/2, unit/2);
        this.imgs = []
        this.loadSprites(spritesheet);

        this.currentImg = this.imgs[0];
        
    }

    loadSprites(spritesheet) {
        // load all movements
        for(var i = 0; i < spritesheet.width; i += 16) {
            this.imgs.push(spritesheet.get(0, i, 16, 16));
        }
    }

    move(movement, x) {
        this.currentImg = this.imgs[x];
        this.pos.add(movement);
    }

    render() {
        imageMode(CENTER);
        image(this.currentImg, this.pos.x, this.pos.y, unit-this.margin, unit-this.margin);
    }
}