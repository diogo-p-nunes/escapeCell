class Level {
    constructor(lvl) {
        this.lvl = lvl;
        this.map = new Map(lvl);
    }

    

    render() {
        this.map.render();
    }
}