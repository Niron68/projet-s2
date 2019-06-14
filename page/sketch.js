let value = 0;

function setup() {
  createCanvas(1900,1000);
  //frameRate(30);
}

var pad = new Launchpad();
pad.move(300,300);
//var past = new Pastille("haut", 7, pad.touches[7]);
var past = new Pastille("centre", 7, pad.touches[4]);

function draw() {
  background(100,50,200);
  //rect(0,0,75,75,10);
  pad.checkKeyboard(value);
  pad.draw();
  past.draw();
}

function keyPressed() {
  value = keyCode;
}

