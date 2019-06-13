export * from "../sketch.js";

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
        this.button.locate(ecartement*(this.numero%3), ecartement*Math.trunc(this.numero/3));
    }

    myKey(valeur, mode){
        res = this.numero;
        if(this.numero <= 2){
            res += 6;
        }else if(this.numero >= 6){
            res -= 6;
        }
        res += 97;
        if(mode == "Off"){
            res += 1000;
        }
        return res == valeur;
    }

    isOn(valeur){
        if(this.myKey(valeur, "On")){
            this.button.color = colorClick;
        }
    }

    isOff(){
        if(this.myKey(valeur, "Off")){
            this.button.color = colorBase;
        }
    }

    setSize(width, height) {
        this.button.width = width;
        this.button.height = height;
    }

    check(valeur){
        this.isOn(valeur);
        this.isOff(valeur);
    }

}