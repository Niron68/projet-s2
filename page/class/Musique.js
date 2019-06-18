class Musique extends Son{

    constructor(temps, id, titre){
        this.call(temps, id);
        this.titre = titre;
        this.notes = [];
        this.notes.push(new Note(5.35, 1));
        this.notes.push(new Note(11.32, 2));
        this.notes.push(new Note(12.68, 3));
        this.notes.push(new Note(14, 4));
        this.notes.push(new Note(15.35, 5));
    }

}