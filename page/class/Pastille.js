class Pastille {

    constructor(sens, vitesse, touche) {
        this.sens = sens;
        this.vitesse = vitesse;
        this.touche = touche;
        this.taille = 200;
        this.couleur = "#00FF00";
        this.baseX = 0;
        this.baseY = 0;
        if(this.sens == "haut"){
            this.baseX = this.touche.button.x + this.getMid();
            this.baseY = this.touche.button.y + this.touche.button.height + this.taille;
            this.width = 30;
            this.height = 10;
        }else if(this.sens == "bas"){
            this.baseX = this.touche.button.x + this.getMid();
            this.baseY = this.touche.button.y - this.taille;
            this.width = 30;
            this.height = 10;
        }else if(this.sens == "droite"){
            this.baseX = this.touche.button.x - this.taille;
            this.baseY = this.touche.button.y + this.getMid();
            this.width = 10;
            this.height = 30;
        }else if(this.sens == "gauche"){
            this.baseX = this.touche.button.x + this.touche.button.width + this.taille;
            this.baseY = this.touche.button.y + this.getMid();
            this.width = 10;
            this.height = 30;
        }
        this.x = this.baseX;
        this.y = this.baseY;
    }

    move(){
        var finished = false;
        if(this.sens == "haut"){
            this.y -= this.vitesse;
            if(this.y < this.baseY - this.taille){
                finished = true;
            }
        }else if(this.sens == "bas"){
            this.y += this.vitesse;
            if(this.y > this.baseY + this.taille){
                finished = true;
            }
        }else if(this.sens == "droite"){
            this.x += this.vitesse;
            if(this.x > this.baseX + this.taille){
                finished = true;
            }
        }else if(this.sens == "gauche"){
            this.x -= this.vitesse;
            if(this.x < this.baseX - this.taille){
                finished = true;
            }
        }
        return !finished;
    }

    draw(){
        if(this.move()){
            stroke(50);
            fill(this.couleur);
            rect(this.x, this.y, this.width, this.height);
        }
    }

    getTime(){
        var time = 0;
        time = this.taille / this.vitesse;
        time /= 60;
        return time;
    }

    getMid(){
        var res = this.touche.button.width;
        res -= 30;
        return Math.trunc(res/2);
    }

}