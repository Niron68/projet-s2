class Note {

    constructor(temps, id){
        this.temps = temps;
        this.score = 0;
        this.id = id;
        this.toucheNum = Math.floor(Math.random() * Math.floor(9));
        this.son = new Son(id + ".ogg");
        this.epsilon = 0.3;
    }

    calculateScore(temps){
        var difference = Math.abs(temps - this.temps);
        if(!difference > this.epsilon){
            this.score = (this.epsilon / difference) * 500;
        }
        return this.score;
    }

    play(){
        this.son.play();
    }

    load(){
        this.son.load();
    }

}