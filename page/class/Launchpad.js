class Launchpad {

    constructor(){
        this.touches = [];
        for(var i = 0; i < 9; i++){
            this.touches.push(new Touche(i+1));
            this.touches[i].applyPosition(80);
        }
    }

    move(x, y){
        for(var i = 0; i < 9; i++){
            this.touches[i].move(x, y);
        }
    }

    draw(){
        for(var i = 0; i < 9; i++){
            this.touches[i].draw();
        }
    }

    checkKeyboard(value){
        for(var i = 0; i < 9; i++){
            if(keyIsPressed === true){
              this.touches[i].isOn(value);
            }else{
              this.touches[i].isOff();
            }
        }
    }

}