class Level {
    constructor(lvl) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheetGround);
        this.police = [];
        this.createPolice();
    }

    createPolice() {
        var init = createVector(3, 3);
        var movs = ["U", "U", "R", "R", "R"];
        this.police.push(new Police(init))
    }

    render() {
        this.map.render();
        for(var pol of this.police) {
            pol.render();
        }
    }
}