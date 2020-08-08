var fixedRect, movingRect;
var fixedBox, movingBox;
var tempObjc;
function setup() {
  createCanvas(1200,400);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="red";
  movingRect= createSprite(500,200,80,30);
  movingRect.shapeColor="red";
  fixedBox = createSprite(500,300,30,80);
  fixedBox.shapeColor = "green";
  fixedBox.velocityX = 5
  movingBox = createSprite(900,300,80,30)
  movingBox.shapeColor = "green";
  movingBox.velocityX = -5
  tempObjc = createSprite(700,300,80,30)
  tempObjc.shapeColor = "red";
}

function draw() {
  background(0); 
   movingRect.y = mouseY;
   movingRect.x = mouseX;
   if(isTouching(tempObjc,movingRect)){
    movingRect.shapeColor = "blue"
    tempObjc.shapeColor = "blue"
   }
   else{
    movingRect.shapeColor = "red"
    tempObjc.shapeColor = "red"
   }
   bounceOff(fixedBox,movingBox);
   
  drawSprites();
}