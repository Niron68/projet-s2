class Pastille {

    constructor(sens, vitesse, touche, taille) {
        this.sens = sens;
        this.vitesse = vitesse;
        this.touche = touche;
        this.taille = taille;
        this.couleur = "#00FF00";
        this.x = 0;
        this.y = 0;
        this.pastille = rect(10,10,10,30);
    }

    move(){
        if(this.sens == "haut"){
            this.y -= this.vitesse;
        }else if(this.sens == "bas"){
            this.y += this.vitesse;
        }else if(this.sens == "droite"){
            this.x += this.vitesse;
        }else if(this.sens == "gauche"){
            this.x -= this.vitesse;
        }
        this.pastille = rect(this.x,this.y,10,30);
        return this.pastille;
    }

}