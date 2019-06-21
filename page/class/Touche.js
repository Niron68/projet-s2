class Touche {

    /**
     * Constructeur
     * 
     * @param {*} numero Le numero de la touche
     */
    constructor(numero){

        /**
         * @var int Numero de la touche
         */
        this.numero = numero;

        /**
         * @var string Couleur de la touche
         */
        this.colorBase = "#CCCCCC";

        /**
         * @var string Couleur de la touche quand elle est appuyer
         */
        this.colorClick = "#FF0088";

        this.son = null;

        /**
         * @var Clickable Boutton représentant la touche
         */
        this.button = new Clickable();
        this.button.text = "";
        this.button.color = this.colorBase;
        this.button.width = 75;
        this.button.height = 75;
        this.applyPosition(80);

        if(numero <= 3){
            this.pastille = new Pastille("bas", 7, this.button.x, this.button.y, this.button.width, this.button.height);
        }else if(numero == 4){
            this.pastille = new Pastille("droite", 7, this.button.x, this.button.y, this.button.width, this.button.height);
        }else if(numero == 6){
            this.pastille = new Pastille("gauche", 7, this.button.x, this.button.y, this.button.width, this.button.height);
        }else if(numero == 5){
            this.pastille = new Pastille("centre", 7, this.button.x, this.button.y, this.button.width, this.button.height);
        }else{
            this.pastille = new Pastille("haut", 7, this.button.x, this.button.y, this.button.width, this.button.height);
        }
    }

    /**
     * Applique la position des touche avec un espace entre chacune
     * @param {*} ecartement Espace entre les touches
     */
    applyPosition(ecartement){
        this.button.locate(ecartement*((this.numero-1)%3), ecartement*Math.trunc((this.numero-1)/3));
    }

    /**
     * Retourne si la valeur passer en paramètre correponds a l'id de la touche
     * @param {*} valeur L'id d'une touche du clavier
     */
    myKey(valeur){
        var res = this.numero-1;
        if(this.numero-1 <= 2){
            res += 6;
        }else if(this.numero-1 >= 6){
            res -= 6;
        }
        res += 97;
        return res == valeur;
    }

    /**
     * Les actions à effectuer si la touche est activer sinon renvoie vers isOff
     * @param {*} valeur L'id d'une touche du clavier
     */
    isOn(valeur){
        var res = false;
        if(this.myKey(valeur)){
            //Action a effectuer quand la touche est active
            res = true;
            this.button.color = this.colorClick;
            
        }else{
            this.isOff();
        }
        return res;
    }

    /**
     * Les action à effectuer si la touche est relacher
     */
    isOff(){
        //Action a effectuer quand la touche est inactive
        this.button.color = this.colorBase;
    }

    /**
     * Change la taille du bouton
     * @param {*} width Largeur du bouton
     * @param {*} height Hauteur du bouton
     */
    setSize(width, height) {
        this.button.width = width;
        this.button.height = height;
    }

    /**
     * Deplace le bouton
     * @param {*} x 
     * @param {*} y 
     */
    move(x, y){
        this.button.x += x;
        this.button.y += y;
        this.pastille.deplace(x, y);
    }

    /**
     * Dessine le bouton
     */
    draw(){
        this.button.draw();
        this.pastille.draw();
    }

    setSon(id){
        this.son = new Son(id + ".ogg");
    }

    playSon(){
        this.son.play();
    }

    getTime(){
        return this.pastille.getTime();
    }

}