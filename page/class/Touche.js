class Touche {

    constructor(numero){
        this.numero = numero;
        this.colorBase = "#CCCCCC";
        this.colorClick = "#FF0088";
        this.button = new Clickable();
        this.button.text = "";
        this.button.color = this.colorBase;
        this.button.width = 75;
        this.button.height = 75;
    }

    applyPosition(ecartement){
        this.button.locate(ecartement*((this.numero-1)%3), ecartement*Math.trunc((this.numero-1)/3));
    }

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

    isOn(valeur){
        if(this.myKey(valeur)){
            this.button.color = this.colorClick;
        }else{
            this.isOff();
        }
    }

    isOff(){
        this.button.color = this.colorBase;
    }

    setSize(width, height) {
        this.button.width = width;
        this.button.height = height;
    }

    move(x, y){
        this.button.x += x;
        this.button.y += y;
    }

    draw(){
        this.button.draw();
    }

}