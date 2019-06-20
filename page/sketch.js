let value = 0;

//var son = new Son("PremierSon.ogg");

var partie = new Partie("test", "Premier Son", "PremierSon");
var time = 0;
var actualNote = 0;

function preload(){
  soundFormats('ogg', 'mp3');
  partie.load();
  //son.load();
}



function setup() {
  var cnv = createCanvas(1920,800);
  cnv.position(100,100);
  //son.play();
  partie.play();
}

var pad = new Launchpad();
pad.move(705,268);
var notes = partie.getNotes();
console.debug(notes);
var timeNote = notes[actualNote].temps - pad.getTime();

console.log("temps note : " + notes[actualNote].temps);
console.log("temps pastille : " +pad.getTime());
//pad.pastille(notes[actualNote].toucheNum);

function draw() {
  time = partie.getActualTime();
  if(time > notes[actualNote].temps){
    actualNote++;
    timeNote = notes[actualNote].temps - pad.getTime();
  }
  if(!isNaN(timeNote)){
    //print(timeNote);
  }
  if(time > timeNote - 0.03 && time < timeNote + 0.03){
    pad.pastille(notes[actualNote].toucheNum);
  }
  clear();
  pad.checkKeyboard(value);
  pad.draw();
  textSize(32);
  text(time, 1000, 30);
}

function keyPressed() {
  value = keyCode;
}
