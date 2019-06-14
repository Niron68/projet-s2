class Pastille {

    /**
     * Constructeur
     * @param {*} sens Sens de la pastille (haut, bas, gauche, droite, centre)
     * @param {*} vitesse Vitesse de la pastille
     * @param {*} touche Touche concerner par la pastille
     */
    constructor(sens, vitesse, touche) {

        /**
         * @var string Sens de la pastille
         */
        this.sens = sens;

        /**
         * @var int Vitesse de la pastille
         */
        this.vitesse = vitesse;

        /**
         * @var Touche Touche concerner par la pastille
         */
        this.touche = touche;

        /**
         * @var int Taille du trajet de la pastille en pixel
         */
        this.taille = 200;

        /**
         * @var string Couleur de la pastille
         */
        this.couleur = "#00FF00";

        /**
         * @var int Position x de départ de la pastille
         */
        this.baseX = 0;

        /**
         * @var int Position y de départ de la pastille
         */
        this.baseY = 0;

        /**
         * @var int Coin de la pastille
         */
        this.corner = 0;

        /**
         * @var int Position actuelle en x de la pastille
         */
        this.x = 0;

        /**
         * @var int Position actuelle en y de la pastille 
         */
        this.y = 0;

        /**
         * @var int Largeur actuelle de la pastille
         */
        this.width = 0;

        /**
         * @var int Hauteur actuelle de la pastille
         */
        this.height = 0;

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

    /**
     * Deplace la pastille d'un cran par rapport a la vitesse
     */
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

    /**
     * Affiche la pastille
     */
    draw(){
        if(this.move()){
            stroke("#FF0000");
            fill(this.couleur);
            rect(this.x, this.y, Math.trunc(this.width), Math.trunc(this.height), this.corner);
        }
    }

    /**
     * Donne le temps en seconde du trajet de la pastille
     */
    getTime(){
        var time = 0;
        time = this.taille / this.vitesse;
        time /= 60;
        return time;
    }

    /**
     * Donnne le milieu de la touche en hauteur ou en largeur en fonction du sens de la pastille
     */
    getMid(){
        var res = this.touche.button.width;
        if(this.width >= this.height){
            res -= this.width;
        }else{
            res -= this.height;
        }
        return Math.trunc(res/2);
    }

    /**
     * Donne la vitesse de grossissement de la pastille central par rapport a la vitesse
     */
    getGrowingSpeed(){
        var grow = this.touche.width / 2;
        grow /= this.taille / this.vitesse;
        return grow;
    }

}