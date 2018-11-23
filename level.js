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
        this.police.push(new Police(init, movs, 1));

        /* var init = createVector(6, 4);
        var movs = ["L", "U", "L", "D", "D"];
        this.police.push(new Police(init, movs, 2)); */

    }

    updatePolice() {
        for(var pol of this.police) {
            pol.update();
        }
    }

    render() {
        this.map.render();
        for(var pol of this.police) {
            pol.render();
            pol.renderSight();        
        }
    }

    policeVision(x, y) {
        for(var pol of this.police) {
            if(pol.inSight(x,y)) {
                return true;
            }
        }
        return false;
    }
}