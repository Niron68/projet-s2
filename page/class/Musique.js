class Musique extends Son{

    constructor(id, titre){
        super(id + ".ogg", 0);
        this.titre = titre;
        this.notes = [];
        this.notes.push(new Note(5.35, 1));
        this.notes.push(new Note(11.32, 2));
        this.notes.push(new Note(12.68, 3));
        this.notes.push(new Note(14, 4));
        this.notes.push(new Note(15.35, 5));
    }

    getNoteTime(id){
        return this.notes[id].temps;
    }

    load(){
        super.load();
        this.notes.forEach( (element) => {
            element.load();
        });
        
    }

    getActualTime(){
        return Math.floor(this.sound.currentTime()*100)/100;
    }
}