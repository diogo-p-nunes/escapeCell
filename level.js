class Level {
    constructor(lvl, spritesheet) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheet);
    }

    
    isWall(x, y) {
        return this.map.isWall(x, y);
    }

    render() {
        this.map.render();
    }
}