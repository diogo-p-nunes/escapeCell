class Level {
    constructor(lvl) {
        this.lvl = lvl-1;
        this.map = new Map(this.lvl, spritesheetGround);
        this.exit = createVector(levels[this.lvl].exit[0], levels[this.lvl].exit[1]);
        this.police = this.createPolice();
    }

    createPolice() {
        var pol = [];
        
        var descp = levels[this.lvl].police;
        for(var i = 0; i < descp.length; i++) {
            var policeJson = descp[i];
            var init = createVector(policeJson.pos[0], policeJson.pos[1]);
            var movs = policeJson.movs;
            var dif = policeJson.dif;
            pol.push(new Police(init, movs, dif));
        }

        return pol;
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