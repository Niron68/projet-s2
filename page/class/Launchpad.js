class Launchpad {

    /**
     * Constructeur
     * Construit un launchpad à 9 touche
     */
    constructor(){
        
        /**
         * @var Array Tableau contenant les touches du launchpad
         */
        this.touches = [];

        for(var i = 0; i < 9; i++){
            this.touches.push(new Touche(i+1));
            this.touches[i].applyPosition(80);
        }
    }

    /**
     * Deplace le launchpad
     * @param {*} x 
     * @param {*} y 
     */
    move(x, y){
        for(var i = 0; i < 9; i++){
            this.touches[i].move(x, y);
        }
    }

    /**
     * Affiche le launchpad
     */
    draw(){
        for(var i = 0; i < 9; i++){
            this.touches[i].draw();
        }
    }

    /**
     * Verifie quelle touche du launchpad est activé grace à l'id d'une touche du clavier
     * @param {*} value L'id de la touche de clavier actuellement appuyer;
     */
    checkKeyboard(value){
        for(var i = 0; i < 9; i++){
            if(keyIsPressed === true){
              this.touches[i].isOn(value);
            }else{
              this.touches[i].isOff();
            }
        }
    }

    pastille(number){
        this.touches[number].pastille.setActive();
    }
}