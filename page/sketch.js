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
var timePastille = notes[actualNote].temps - pad.getTime();
var key = 999;
var lastTimePressed = 0;

console.log("temps note : " + notes[actualNote].temps);
console.log("temps pastille : " +pad.getTime());
//pad.pastille(notes[actualNote].toucheNum);

function draw() {
  time = partie.getActualTime();
  if(time > notes[actualNote].temps && actualNote < notes.length-1){
    partie.refreshScore(actualNote);
    actualNote++;
    timePastille = notes[actualNote].temps - pad.getTime();
  }
  if(!isNaN(timePastille)){
    //print(timePastille);
  }
  if(time > timePastille - 0.03 && time < timePastille + 0.03){
    pad.pastille(notes[actualNote].toucheNum);
  }
  clear();
  key = pad.checkKeyboard(value);
  pad.draw();
  if(key < 10){
    lastTimePressed = time;
  }
  if(notes[actualNote].calculateScore(lastTimePressed) > 0 && key == notes[actualNote].toucheNum){
    notes[actualNote].play();
    key = 999;
    partie.refreshScore(actualNote);
    actualNote++;
  }
  textSize(32);
  fill(255);
  noStroke();
  text(time, 1000, 30);
  text(partie.score, 1000,60);
}

function keyPressed() {
  value = keyCode;
}
