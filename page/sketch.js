let value = 0;
let x,y = 0;

function setup() {
  createCanvas(1900,1000);
  frameRate(30);
  x = 10;
  y = 10;
}

var pad = new Launchpad();
//pad.move(150,150);

function draw() {
  background(100,50,200);
  pad.checkKeyboard(value);
  pad.draw();
}

function keyPressed() {
  value = keyCode;
}

function makeAnimation(direction, taille, posX, posY, vitesse) {
  stroke(50);
  fill(0,255,0);
  x = posX;
  y = posY;
  if(direction == "haut"){

  }
  rect(x, y, 10, 30);
  x = x + vitesse;
  if(x > 700){
    x = 500;
  }
}