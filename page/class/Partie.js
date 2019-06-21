class Partie{

    constructor(nomJoueur, titre, id){
        this.nomJoueur = nomJoueur;
        this.score = 0;
        this.musique = new Musique(id, titre);
    }

    play(){
        this.musique.play();
    }

    load(){
        this.musique.load();
    }

    getActualTime(){
        return this.musique.getActualTime();
    }

    getNotes(){
        return this.musique.notes;
    }

    refreshScore(note){
        this.score += this.musique.notes[note].score;
    }

}