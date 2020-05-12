var ball,img,paddle,img2,playerscore;
var count = 0;
var gameState = "serve";
function preload() {
img = loadImage("paddle.png");
img2 = loadImage("ball.png");  
}
function setup() {
createCanvas(1366, 650);
paddle = createSprite(1366,325,10,70); 
paddle.addAnimation("paddle",img); 

ball = createSprite(683,350,10,10);
ball.addAnimation("ball",img2);

}

function draw() {
background(225);
paddle.y = mouseY;
  if(gameState === "serve"){
    textSize(22);
  text("PRESS SPACE KEY TO START",500,100);
 }                       
   if(ball.bounceOff(paddle)){
count = count +1;
     randomVelocity();
   
    console.log(ball.velocityY);
     }
  

edge = createEdgeSprites();
ball.bounceOff(edge[2]); 
ball.bounceOff(edge[3]);
ball.bounceOff(edge[0]);
ball.bounceOff(paddle,randomVelocity);
paddle.collide(edge);  

if(keyWentDown("Space") && gameState === "serve"){
ball.velocityX = -20; 
gameState = "play" 

}
 if (gameState === "serve" || "play" || "over"){
   textSize(50);   
  text("Score:"+count,100,50); 
 } 
if(ball.x > 1336){
gameState = "over";
textSize(22);  
text("Press R to Restart",500,100);
}
 if(keyWentDown("r") && gameState ==="over"){
   reset();
 }
 
drawSprites();
 } 

function randomVelocity()
{
ball.velocityY = Math.round(random(30,-30));
}

function reset (){
 ball.x = 683;
  ball.y = 350;
  ball.velocityX = 0;
  ball.velocityY = 0;
  gameState = "serve";
  count = 0;
}