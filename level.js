class Level {
    constructor(lvl) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheetGround);
        this.police = [];
        this.createPolice();
        this.exit = createVector(9,9);
    }

    createPolice() {
        var init = createVector(3, 3);
        var movs = ["U", "U", "R", "R", "R"];
        this.police.push(new Police(init, movs, 1));

        var init = createVector(6, 4);
        var movs = ["L", "U", "L", "D", "D"];
        this.police.push(new Police(init, movs, 2));

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

        stroke(255);
        fill(255);
        textAlign(CENTER);
        text("EXIT", this.exit.x*unit + unit/2, this.exit.y*unit + unit/2);
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