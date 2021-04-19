var bgsprite, bgimage;
var mariosprite, marioimage;
var invisiblesprite, firesprite, fireimage
var score
var cloudimage, cloudsprite

function preload(){
bgimage=loadImage("bgimage.jpg");
marioimage=loadAnimation("mario1.png", "mario2.png");
fireimage=loadAnimation("fire11.png", "fire22.png", "fire33.png", "fire4.png")
cloudimage=loadImage("cloud.png")
}

function setup(){
createCanvas(1200, 800);
bgsprite = createSprite(0, 410, 1200, 800)
bgsprite.addImage(bgimage)
bgsprite.scale = 1.5
bgsprite.velocityX = -4
mariosprite = createSprite(50, 680, 50, 50);
mariosprite.addAnimation("marioimage", marioimage);
invisiblesprite = createSprite(600, 735, 1200, 20)
invisiblesprite.visible=false;
score=0

}

function draw(){
background(0);

if(bgsprite.x<0){
    bgsprite.x = 600
}

if(keyDown("space")){
    mariosprite.velocityY = -12
}
mariosprite.velocityY = mariosprite.velocityY+0.5
mariosprite.collide(invisiblesprite);

drawSprites();
textSize(18)
fill("white")
text("SURVIVAL TIME:"+score, 990, 50)
score = score+1

fire();
cloud();
}

function fire(){
    if(frameCount%200===0){
        firesprite = createSprite(1200, 680, 50, 50)
        firesprite.addAnimation("fireimage", fireimage)
        firesprite.velocityX = -4;
        firesprite.lifetime=600
    }
}

function cloud(){
    if(frameCount%300===0){
        cloudsprite = createSprite(1200, 100, 50, 50)
        cloudsprite.addImage(cloudimage)
        cloudsprite.velocityX = -4
        cloudsprite.lifetime=600
        cloudsprite.scale = 0.3
    }
}