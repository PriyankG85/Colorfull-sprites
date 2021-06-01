
var fixedRect, movingRect;
var gameObject1, gameObject2;
var fixedRect1, fixedRect2, fixedRect3;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(width/2, height/2, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(width/3, height/3, 50, 50);
  fixedRect1.shapeColor = "yellow";

  fixedRect2 = createSprite(width/3+100, height/3-50, 50, 50);
  fixedRect2.shapeColor = "green";

  fixedRect3 = createSprite(width/3+200, height/3-200, 50, 50);
  fixedRect3.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect, fixedRect1)){
    movingRect.shapeColor="blue";
    fixedRect1.shapeColor="blue";
  }
  else if(isTouching(movingRect, fixedRect2)){
    movingRect.shapeColor="blue";
    fixedRect2.shapeColor="blue";
  }
  else if(isTouching(movingRect, fixedRect3)){
    fixedRect3.velocityX=3;
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


