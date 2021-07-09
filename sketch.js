var bg, sleep, brush, gym;
var eat, drink, move;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym1 = loadAnimation("images/gym1.png", "images/gym2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(800,800);

  background = createSprite(400,400);
  background.addImage("background",bg);
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}