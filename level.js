class Level {
    constructor(lvl, spritesheet) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheet);
        this.listPolice = [];
        this.loadListPolice(lvl);
    }

    loadListPolice(lvl) {
        var sprites = [];
        // load all movements
        for(var i = 0; i < spriteSheetPolice.width; i += 16) {
            sprites.push(spriteSheetPolice.get(i, 0, 20, 48));
        }
        this.listPolice.push(new Police([
            createVector(4,3), 
            createVector(4,4), 
            createVector(4,5), 
            createVector(4,6)], sprites));
    }

    render() {
        this.map.render();
        for(var police of this.listPolice){
            police.render();
        }
    }
}