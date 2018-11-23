class Level {
    constructor(lvl, spritesheet) {
        this.lvl = lvl;
        this.map = new Map(lvl, spritesheet);
        this.listPolice = [];
        
    }
    
    render() {
        this.map.render();

        /* for(var police of this.listPolice){
            police.render();
        } */
    }
}