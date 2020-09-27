var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,100,50,90);
  fixedRect.shapeColor = "cyan";

  movingRect = createSprite(200,250,30,100);
  movingRect.shapeColor = "cyan";
   fixedRect.velocityY= 3;
   movingRect.velocityY= -4;
}

function draw() {
  background("pink");

  //movingRect.x = mouseX;
 // movingRect.y = mouseY;

  /*if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y - fixedRect.y <movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
    
  {
    fixedRect.shapeColor = "black";
    movingRect.shapeColor = "black"
  }

  else{
    fixedRect.shapeColor = "cyan";
    movingRect.shapeColor = "cyan"
  }*/
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
    {
      movingRect.velocityX= movingRect.velocityX* (-1);
      fixedRect.velocityX= fixedRect.velocityX* (-1);
    }
if (movingRect.y - fixedRect.y <movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
{
  movingRect.velocityY= movingRect.velocityY* (-1);
      fixedRect.velocityY= fixedRect.velocityY* (-1); 
}
  drawSprites();
}