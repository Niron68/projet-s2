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
/*
colorBase = "#CCCCCC";
colorClick = "#FF0088";
for(var i = 0; i < 9; i++){
  button.push(new Clickable());
  posX = 80*((i%3)+1);
  posY = 80*(Math.trunc(i/3)+1);
  posX = posX + 400;
  posY = posY + 150;
  button[i].locate(posX,posY);
  button[i].width = 75;
  button[i].height = 75;
  button[i].color = colorBase;
  button[i].text = "";
}
*/

function draw() {
  background(100,50,200);
  /*
  for(var i = 0; i < 9; i++){
    if(value == associateKey(i))
    {
      button[i].color = colorClick;
    }
    if(value == (associateKey(i)+1000))
    {
      button[i].color = colorBase;
    }
    button[i].draw();
  }
  */
  for(var i = 0; i < 9; i++){
    button[i].check(value);
    button[i].button.draw();
  }
}

function keyPressed() {
  value = keyCode;
}

function keyReleased() {
  value = keyCode + 1000;
}

/*
function associateKey(number) {
  res = number;
  if(number <= 2){
    res = number + 6;
  }else if(number >= 6){
    res = number - 6;
  }
  return res + 97;
}
*/
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