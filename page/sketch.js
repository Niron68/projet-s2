let value = 0;
let x,y = 0;

function setup() {
  createCanvas(1900,1000);
  frameRate(30);
  x = 10;
  y = 10;
}

var button = [];
for(var i = 0; i < 9; i++){
  button.push(new Touche(i+1));
  button[i].applyPosition(80);
}

function draw() {
  background(100,50,200);
  for(var i = 0; i < 9; i++){
    if(keyIsPressed === true){
      button[i].isOn(value);
    }else{
      button[i].isOff();
    }
    button[i].button.draw();
  }
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