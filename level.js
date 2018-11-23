class Level {
    constructor(lvl, spritesheet) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheet);
        this.listPolice = [];
        this.loadListPolice(lvl);
    }

    loadListPolice(lvl) {
        for()
    }

    render() {
        this.map.render();
    }
}