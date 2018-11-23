class Police {
    constructor(movement, sprite) {
        this.movement = movement;
        this.move = 0;
        this.pos = this.movement[0];
        this.maxMoves = this.movement.length;
        this.movesBelow = true;
        this.policeImg = sprite;
        this.margin = 5;
    }

    move() {
        if(this.movesBelow) {
            this.move++;
        }
        else {
            this.moves--;
        }
        if(this.move > this.maxMoves || this.move < 0) {
            this.movesBelow = !this.movesBelow;
        }

        this.pos = this.movement[this.move];
    }

    render() {
        imageMode(CENTER);
        image(this.policeImg[0], this.pos.x * unit/2, this.pos.y * unit/2, unit-this.margin, unit-this.margin)
    }

}