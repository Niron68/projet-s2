class Partie{

    constructor(nomJoueur, titre, id){
        this.nomJoueur = nomJoueur;
        this.score = 0;
        this.musique = new Musique(id, titre);
    }

}