class Level {
    constructor(lvl) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheetGround);
        this.police = [];
        this.createPolice();
        this.exit = createVector(9,9);
    }

    createPolice() {
        var init = createVector(0, 3);
        var movs = ["R", "R", "R", "R", "R", "R", "R"];
        this.police.push(new Police(init, movs, 1));

        var init = createVector(0, 9);
        var movs = ["U", "U", "U", "R", "R", "D", "D", "D"];
        this.police.push(new Police(init, movs, 2));

        var init = createVector(9, 7);
        var movs = ["U", "L", "L", "U", "L", "L", "D", "D", "D"];
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
            //pol.renderSight();        
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