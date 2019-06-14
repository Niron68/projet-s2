class Pastille {

    constructor(sens, vitesse, touche) {
        this.sens = sens;
        this.vitesse = vitesse;
        this.touche = touche;
        this.taille = 200;
        this.couleur = "#00FF00";
        this.baseX = 0;
        this.baseY = 0;
        this.corner = 0;
        if(this.sens == "haut"){
            this.width = 30;
            this.height = 10;
            this.baseX = this.touche.button.x + this.getMid();
            this.baseY = this.touche.button.y + this.touche.button.height + this.taille;
        }else if(this.sens == "bas"){
            this.width = 30;
            this.height = 10;
            this.baseX = this.touche.button.x + this.getMid();
            this.baseY = this.touche.button.y - this.taille;
        }else if(this.sens == "droite"){
            this.width = 10;
            this.height = 30;
            this.baseX = this.touche.button.x - this.taille;
            this.baseY = this.touche.button.y + this.getMid();
        }else if(this.sens == "gauche"){
            this.width = 10;
            this.height = 30;
            this.baseX = this.touche.button.x + this.touche.button.width + this.taille;
            this.baseY = this.touche.button.y + this.getMid();
        }else if(this.sens == "centre"){
            this.baseX = this.touche.button.x + this.touche.button.width/2 + 300;
            this.baseY = this.touche.button.y + this.touche.button.height/2;
            this.width = 0;
            this.height = 0;
            this.corner = 10;
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
        }else if(this.sens == "centre"){
            this.width += this.getGrowingSpeed();
            this.height += this.getGrowingSpeed();
            console.log(this.width);
            console.log(this.height);
            if(this.width > 75){
                finished = true;
            }
        }
        return !finished;
    }

    draw(){
        if(this.move()){
            stroke("#FF0000");
            fill(this.couleur);
            rect(this.x, this.y, Math.trunc(this.width), Math.trunc(this.height), this.corner);
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
        if(this.width >= this.height){
            res -= this.width;
        }else{
            res -= this.height;
        }
        return Math.trunc(res/2);
    }

    getGrowingSpeed(){
        var grow = this.touche.width / 2;
        grow /= this.taille / this.vitesse;
        return grow;
    }

}