var bg, sleep, brush, gym;
var eat, drink, move;
var astronaut, b;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  gym1 = loadImage("images/gym1.png", "images/gym2.png");
  gym2 = loadImage("images/gym11.png", "images/gym12.png");
  eat = loadImage("images/eat1.png","images/eat2.png");
  drink = loadImage("images/drink1.png","images/drink2.png");
  move = loadImage("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(600,460);

  b = createSprite(300,230);
  b.addImage("background",bg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background("lightblue");
  
  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing", brush);
    astronaut.changeImage("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addImage("gymming", gym1, gym2);
    astronaut.changeImage("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addImage("eating", eat);
    astronaut.changeImage("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addImage("bathing", bath);
    astronaut.changeImage("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addImage("moving", move);
    astronaut.changeImage("moving");
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = 1;
  }

  
  drawSprites();
}
