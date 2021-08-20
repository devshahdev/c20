var astronaut, bath, drink, eat, gym, move, brush, bgI, sleep, bg;
var edges;
var PLAY=0;
var START=1;
var gameState=1;

function preload(){
bath = loadAnimation("bath1.png","bath2.png");
drink = loadAnimation("drink1.png","drink2.png");
eat = loadAnimation("eat1.png","eat2.png");
move = loadAnimation("move.png","move1.png");
brush = loadAnimation("brush.png");
bgI = loadImage("iss.png");
gym = loadAnimation("gym1.png","gym2.png");
sleep = loadAnimation("sleep.png");
}

function setup() {
createCanvas(600, 400);
bg = createSprite(300,200,600,600);
bg.addImage(bgI)
bg.scale=0.13;

astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;
edges = createEdgeSprites();

}

function draw() {
if (gameState === START){
    background(0);
    textSize(30);
    fill("red");
text("instructions",200,100);
text("Up arrow = Brushing",200,150);
text("Down arrow = Gymming",200,200);
text("Left arrow = Eating",200,250);
text("Right arrow = Bathing",200,300);
text("m Key = Moving",200,350);
fill("yellow");
text("press y to",10,200);
text("start",10,250);

if(keyDown("y")){
    gameState=PLAY;
}
}

if(gameState === PLAY){

 background(90);

if(keyDown("UP_ARROW"))
{
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=300;
astronaut.velocityY = 0;
astronaut.velocityX = 0;
}

if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gym);
    astronaut.changeAnimation("gym");
    astronaut.y=300;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    }

if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eat);
    astronaut.changeAnimation("eat");
    astronaut.y=300;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    }

if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath");
    astronaut.y=300;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    }
if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("move");
    astronaut.y=300;
    astronaut.velocityY = 5;
    astronaut.velocityX = 5;
    }

astronaut.bounceOff(edges);
drawSprites();
}
}