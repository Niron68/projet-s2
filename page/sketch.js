let value = 0;

var son = new Son("PremierSon.ogg");

function preload(){
  soundFormats('ogg', 'mp3');
  son.load();
}

//var partie = new Partie("test", "Premier Son", "PremierSon");

function setup() {
  var cnv = createCanvas(1920,800);
  cnv.position(100,100);
  son.play();
}

var pad = new Launchpad();
pad.move(705,268);
//partie.play();

function draw() {
  clear();
  pad.checkKeyboard(value);
  pad.draw();
  textSize(32);
  text(son.getActualTime());
}

function keyPressed() {
  value = keyCode;
}
