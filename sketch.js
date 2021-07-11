var path,pathimg,boyimg,boy,leftboundery,rightboundery
function preload(){
  //pre-load images
  pathimg=loadImage("path.png")
  boyimg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathimg)
  path.scale=1.2
  path.velocityY=4
  boy=createSprite(200,340,30,30)
  boy.addAnimation("running",boyimg)
  boy.scale=0.08
  leftboundery=createSprite(0,200,30,400)
  leftboundery.visible=false
  rightboundery=createSprite(400,200,30,400)
  rightboundery.visible=false
}

function draw() {
  background(0);
  boy.x=World.mouseX
  boy.collide(leftboundery)
  boy.collide(rightboundery)
  if(path.y>400){
    path.y=height/2
  }
drawSprites()
}
