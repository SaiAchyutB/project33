
var backGround;
var snow1,snow2



function preload(){

  backGround = loadImage("snow2.jpg");
  snow1  =loadImage("snow4.webp")
  snow2  =loadImage("snow5.webp")


}








function setup() {
  createCanvas(800,400);
 }




function draw() {
  background(backGround);  
  drawSprites();
createsnowfall();
createsnowfall2();
}

function createsnowfall(){
if(frameCount%10===0){
snowfall1 = createSprite(random(0,800),0,50,50);
snowfall1.velocityX = -2;
snowfall1.velocityY = 4;
snowfall1.addImage(snow1);
snowfall1.scale = 0.1

}
}

function createsnowfall2(){
  if(frameCount%10===0){
  snowfall2 = createSprite(random(0,1500),0,50,50);
  snowfall2.velocityX = -2;
  snowfall2.velocityY = 4;
  snowfall2.addImage(snow2);
  snowfall2.scale = 0.1
  
  }
  }