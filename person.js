class Person {
    constructor() {
        this.pos = createVector(0,0);
        this.imgs = [];
    }

    validMove(old) {
        // only move if not wall
        if( level.map.isOutOfMap(this.pos.x, this.pos.y)
            || level.map.wall(this.pos.x, this.pos.y)) {
                this.pos = old;
        }
    }

    moveUp() {
        this.currentImg = this.imgs[1];
        var oldPos = this.pos.copy();
        this.pos.add(createVector(0, -1));
        this.validMove(oldPos);
    }

    moveDown() {
        this.currentImg = this.imgs[0];
        var oldPos = this.pos.copy();
        this.pos.add(createVector(0, 1));
        this.validMove(oldPos);
    }

    moveLeft() {
        this.currentImg = this.imgs[3];
        var oldPos = this.pos.copy();
        this.pos.add(createVector(-1, 0));
        this.validMove(oldPos);
    }

    moveRight() {
        this.currentImg = this.imgs[2];
        var oldPos = this.pos.copy();
        this.pos.add(createVector(1, 0));
        this.validMove(oldPos);
    }

    render() {
        imageMode(CORNER);
        image(this.currentImg, this.pos.x*unit, this.pos.y*unit, unit, unit);
    }
}