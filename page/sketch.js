let value = 0;

function preload(){
  //son = new Son('a.mp3');
}

function setup() {
  createCanvas(1900,1000);
  //son.play();
  //frameRate(30);
}

var pad = new Launchpad();
pad.move(300,300);
//var past2 = new Pastille("bas", 7, pad.touches[0]);
//var past = new Pastille("centre", 7, pad.touches[4]);
//var note = new Note(2, 'a.mp3');

function draw() {
  background(100,50,200);
  //rect(0,0,75,75,10);
  pad.checkKeyboard(value);
  pad.draw();
  //past.draw();
  //past2.draw();
  //note.play();
}

function keyPressed() {
  value = keyCode;
}
