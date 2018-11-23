class Level {
    constructor(lvl, spritesheet) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheet);
    }

    

    render() {
        this.map.render();
    }
}