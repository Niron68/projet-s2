class Son {

    constructor(fileName){
        soundFormats('ogg', 'mp3');
        this.fileName = fileName;
        this.sound = loadSound("./sound/"+this.fileName);
    }

    play(){
        this.sound.play();
    }

}