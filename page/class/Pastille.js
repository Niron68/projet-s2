class Pastille {

    /**
     * Constructeur
     * @param {*} sens Sens de la pastille (haut, bas, gauche, droite, centre)
     * @param {*} vitesse Vitesse de la pastille
     * @param {*} x Position de la touche en x
     * @param {*} y Position de la touche en y
     * @param {*} width Largeur de la touche
     * @param {*} height Hauteur de la touche
     */
    constructor(sens, vitesse, x, y, width, height) {

        /**
         * @var boolean Si la pastille est affichée ou non
         */
        this.active = false;

        /**
         * @var string Sens de la pastille
         */
        this.sens = sens;

        /**
         * @var int Vitesse de la pastille
         */
        this.vitesse = vitesse;

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

        /**
         * @var int La largeur de la touche
         */
        this.buttonWidth = width;

        /**
         * @var int La hauteur de la touche
         */
        this.buttonHeight = height;

        if(this.sens == "haut"){
            this.width = 30;
            this.height = 10;
            this.baseX = x + this.getMid();
            this.baseY = y + this.buttonHeight + this.taille;
        }else if(this.sens == "bas"){
            this.width = 30;
            this.height = 10;
            this.baseX = x + this.getMid();
            this.baseY = y - this.taille;
        }else if(this.sens == "droite"){
            this.width = 10;
            this.height = 30;
            this.baseX = x - this.taille;
            this.baseY = y + this.getMid();
        }else if(this.sens == "gauche"){
            this.width = 10;
            this.height = 30;
            this.baseX = x + this.buttonWidth + this.taille;
            this.baseY = y + this.getMid();
        }else if(this.sens == "centre"){
            this.baseX = x + this.buttonWidth/2;
            this.baseY = y + this.buttonHeight/2;
            this.width = 0;
            this.height = 0;
            this.corner = 10;
        }
        this.x = this.baseX;
        this.y = this.baseY;
    }

    /**
     * Remet l'animation de la pastille au debut
     */
    reset(){
        this.x = this.baseX;
        this.y = this.baseY;
        if(this.sens == "centre"){
            this.height = 0;
            this.width = 0;
        }
    }

    /**
     * Deplace l'animation de la pastille
     * @param {*} x 
     * @param {*} y 
     */
    deplace(x, y){
        this.baseX += x;
        this.baseY += y;
    }

    /**
     * Deplace la pastille d'un cran par rapport a la vitesse
     */
    move(){
        if(this.active){
            if(this.sens == "haut"){
                this.y -= this.vitesse;
                if(this.y < this.baseY - this.taille){
                    this.active = false;
                }
            }else if(this.sens == "bas"){
                this.y += this.vitesse;
                if(this.y > this.baseY + this.taille - this.height){
                    this.active = false;
                }
            }else if(this.sens == "droite"){
                this.x += this.vitesse;
                if(this.x > this.baseX + this.taille){
                    this.active = false;
                }
            }else if(this.sens == "gauche"){
                this.x -= this.vitesse;
                if(this.x < this.baseX - this.taille){
                    this.active = false;
                }
            }else if(this.sens == "centre"){
                this.width += this.getGrowingSpeed();
                this.height += this.getGrowingSpeed();
                this.x = this.baseX - Math.trunc(this.width/2);
                this.y = this.baseY - Math.trunc(this.height/2);
                if(this.width > 75){
                    this.active = false;
                }
            }
        }
        return this.active;
    }

    /**
     * Affiche la pastille
     */
    draw(){
        if(this.move()){
            stroke(50);
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
        var res = this.buttonWidth;
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
        var grow = this.buttonWidth;
        grow /= this.taille / this.vitesse;
        return grow;
    }

    /**
     * Active la pastille
     */
    setActive(){
        this.reset();
        this.active = true;
    }

}