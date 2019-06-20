class Son {

    constructor(fileName){
        this.fileName = fileName;
        this.loaded = false;
    }

    load(){
        this.sound = loadSound("./sound/"+this.fileName, () => {
            this.loaded = true;
            console.log(this.loaded);
        }, () => {
            print("load failed :" + this.fileName);
        }, () => {print("loading ....");});
    }

    play(){
        if(this.loaded){
            this.sound.play();
        }
        console.log("play this music !");
    }

}