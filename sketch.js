var gameState="Name"; 
var ground1, ground2;
var info;
var player;
var lava;
var heart=5;
var step1, step2, step3;
var back;
var b1, b2, b3, b4;
var s1, s2, s3;
var d1, d2, d3, d4, d5;
var badGuy;
var bullets;
var person;
var playerImage;
function preload(){
playerImage=loadImage("Player.png");
back=loadImage("Background.png");
}
function setup() {
  createCanvas(700, 400);
  
  //level1
 ground1=createSprite(350, 300, 750, 30); 
  ground1.shapeColor="green";
  
  ground2=createSprite(650, 190, 100, 190);
  ground2.shapeColor="brown";
  
  info=createInput("");
  info.position(300, 200);
  
  

  
  lava=createSprite(400, -100, 400, 10);
  lava.shapeColor="red";
  
  step1=createSprite(240, -100, 70, 22);
  step1.shapeColor="brown";
   
  step2=createSprite(370, -100, 70, 22);
  step2.shapeColor="brown";
  
    step3=createSprite(500, -100, 70, 22);
  step3.shapeColor="brown";
  
  
  //level2
  b1=createSprite(200, -100, 20, 50);
  b2=createSprite(300, -100, 20, 60);
  b3=createSprite(400, -100, 20, 30);
  b4=createSprite(500, -100, 20, 60);
  
  //level3
  s1=createSprite(200, -10, 20, 20);
  s2=createSprite(300, -40, 20, 20);
  s3=createSprite(400, -70, 20, 20);
  
  //level4
   d1=createSprite(200, -50, 10, 100);
  d2=createSprite(300, -50, 10, 100);
  d3=createSprite(400, -50, 10, 100);
  d4=createSprite(500, -50, 10, 100);
  d5=createSprite(600, -50, 10, 100);
  
  //level5
  badGuy=createSprite(400, -100, 40, 40);
  bullets=createSprite(400, -100, 10, 10);
  person=createSprite(650, -100, 15, 15);
  person.shapeColor="red";
  
  player=createSprite(50, 275, 15, 15);
  player.addImage(playerImage);
  player.shapeColor="blue";
  player.scale=0.1;

 
}

function draw() {
 background(back);

if(gameState==="Name"){
  info.position(300, 200);
  info.show();
   player.y=player.y+4
  ground1.x=350;
  ground1.y=300;
  ground2.x=650;
  ground2.y=190;
  heart=5;
  lava.y=-100;
  step1.y=-100;
  step2.y=-100;
  step3.y=-100
   b1.y=-100;
  b2.y=-100;
  b3.y=-100
  s1.y=-10;
  s2.y=-40;
  s3.y=-70
   d1.y=-50;
  d2.y=-50
  d3.y=-50;
  d4.y=-50;
  d5.y=-50
  badGuy.y=-100;
  bullets.y=-100;
  person.y=-100;
  textSize(15);
  fill("red")
  text("Name:", 250, 215);
  textSize(20);
  text("A Fun Challenging Game", 300, 50);
  text("Press Space to Contiune", 300, 350);
  if(keyDown("space")){
    gameState="Note";
  }
}
  
  if(gameState==="Note"){
    info.hide();
     player.y=player.y+4
    textSize(20);
    fill("red")
    text("Hi "+ info.value()+ " If you lose one live you restart the level", 50, 70);
    text("If you lose all your lives you go back to level 1", 50, 100);
      text("Press p to Play", 300, 350);
    textSize(15);
    text(info.value()+ " You need to complete the levels to save the people on the last level",  50,  30 );
  if(keyDown("p")){    
    gameState="Level1";
    player.x=50;
    player.y=275;
  }
  }
  
  if(gameState==="Level1"){
    player.y=player.y+4 
    step1.y=250;
    step2.y=200;
    step3.y=150;
    lava.y=280;
    textSize(15);
    fill("red");
    text("Use the ARROW KEYS to move your player", 300, 50);
    text("LEVEL1", 300, 100);
    text("Lives:"+ heart, 50, 50);
     if(keyDown("up") && player.y >= 270) {
      player.velocityY = -15;
    }
    
     if(keyDown("up") && player.y>220&&player.y<240&&player.x>210&&player.x<280){
      player.velocityY = -15;
    }
    
    if(keyDown("up") && player.y>170&&player.y<190&&player.x>330&&player.x<410){
      player.velocityY = -15;
    }  
    
     if(keyDown("up") && player.y>120&&player.y<140&&player.x>460&&player.x<540){
      player.velocityY = -15;
    }  
    
    if(keyDown("right")){
      player.x+=5;
    }
    
    if(keyDown("left")){
      player.x-=5;
    }
  
   player.velocityY = player.velocityY + 0.8
  
    if(player.isTouching(lava)){
      player.x=50;
      player.y=275;
      heart-=1;
      
    }
    
    if(heart<1){
      gameState="End";
      
    }
    
    if(player.x>680){
       player.x=50;
    player.y=280;
      player.velocityY=0;
      gameState="Level2"
    }
  }
  
  
  if(gameState==="Level2"){
       player.y=player.y+4 
   
    step1.y=-100;
    step2.y=-100;
    step3.y=-100;
    ground2.y=-300;
    b1.y=260;
    b2.y=255;
    b3.y=270;
    b4.y=255;
    textSize(20);
    fill("red");
     text("LEVEL2", 300, 100);
    textSize(15);
    text("Lives:"+ heart, 50, 50);
    text("Do not touch the barriers", 300, 50);
    
    lava.y=-100;
    
      if(keyDown("up") && player.y >= 270) {
      player.velocityY = -15;
    }
    
    if(keyDown("right")){
      player.x+=5;
    }
    
    if(keyDown("left")){
      player.x-=5;
    }
    
      player.velocityY = player.velocityY + 0.8
    
    if(player.isTouching(b1)||player.isTouching(b2)||player.isTouching(b3)||player.isTouching(b4)){
      player.x=50;
      player.y=275;
      heart-=1;
    }
    
    if(heart<1){
      gameState="End"
    }
    if(player.x>680){
       player.x=50;
    player.y=275; 
      gameState="Level3";
    }
  }
  
  if(gameState==="Level3"){
   player.y=player.y+4
    b1.y=-100;
    b2.y=-100;
    b3.y=-100;
    b4.y=-100;
    s1.y=s1.y+13;
    s2.y=s2.y+13;
    s3.y=s3.y+13;
    
   
    textSize(20);
    fill("red");
    text("Level 3", 300, 50);
    textSize(15);
    text("Lives:"+ heart, 50, 50);
    text("Do not touch the stones that are falling", 300, 20);
      if(keyDown("up") && player.y >= 270) {
      player.velocityY = -15;
    }
    
    if(keyDown("right")){
      player.x+=5;
    }
    
    if(keyDown("left")){
      player.x-=5;
    }
    
      player.velocityY = player.velocityY + 0.8
    
    if(player.isTouching(s1)||player.isTouching(s2)||player.isTouching(s3)){
      heart-=1;
      player.x=50;
      player.y=275;
    }
    
    if(s1.isTouching(ground1)){
      s1.y=-10;
    }
      if(s2.isTouching(ground1)){
      s2.y=-10;
    }
    
      if(s3.isTouching(ground1)){
      s3.y=-10;
    }
    
    if(heart<1){
      gameState="End";
    }
    
    if(player.x>650){
      gameState="Level4";
      player.x=50; 
      player.y=275;
    }
  }
  
  if(gameState==="Level4"){
    s1.y=-100;
    s2.y=-100;
    s3.y=-100;
    d1.y=d1.y+8;
    textSize(20);
    fill("red");
    text("Level4", 350, 100);
     textSize(15);
    text("Lives:"+ heart, 50, 50);
    player.y=player.y+4
    
      if(keyDown("up") && player.y >= 270) {
      player.velocityY = -15;
    }
    
    if(keyDown("right")){
      player.x+=5;
    }
    
    if(keyDown("left")){
      player.x-=5;
    }
    player.velocityY = player.velocityY + 0.8
    
    if(d1.isTouching(ground1)){
      
      d2.y=d2.y+11;
    }
    if(d2.isTouching(ground1)){
  
      d3.y=d3.y+11;
    }
    if(d3.isTouching(ground1)){
      
      d4.y=d4.y+12;
    }
    if(d4.isTouching(ground1)){
     
      d5.y=d5.y+13;
    }
    
    if(player.isTouching(d1)||player.isTouching(d2)||player.isTouching(d3)||player.isTouching(d4)||player.isTouching(d5)){
      heart-=1;
      player.x=50; player.y=275;
      d1.y=-50;
      d2.y=-50;      
      d3.y=-50;      
      d4.y=-50;      
      d5.y=-50;
    }
    
    if(heart<1){
      gameState="End";
    }
    
    if(player.x>650){
      player.x=50;
      player.y=275;
      gameState="Level5";
    }
  }
  
  if(gameState==="Level5"){
    person.y=275;
    d1.y=-100;
    d2.y=-100;
    d3.y=-100;
    d4.y=-100;
    d5.y=240;
    badGuy.y=265;
    bullets.y=280;
    bullets.x-=5;
    textSize(20);
    fill("red");
    text("Level5", 350, 100);
     textSize(15);
    text("Lives:"+ heart, 50, 50);
    text("Dodge the bullets and touch the bad guy to banish him", 250, 50);
    player.y=player.y+4
    
    if(keyDown("up") && player.y >= 270) {
      player.velocityY = -15;
    }
    
    if(keyDown("right")){
      player.x+=5;
    }
    
    if(keyDown("left")){
      player.x-=5;
    }
    player.velocityY = player.velocityY + 0.8
    
    
    if(bullets.x<1){
      bullets.x=400;
    }
    
    if(player.isTouching(bullets)){
      heart-=1; 
      player.x=50;
      player.y=275;
      bullets.x=400;
    }
    
    if(heart<1){
      gameState="End";
    }
    
    if(player.isTouching(badGuy)){
      badGuy.y=-100;
      bullets.y=-100;
      gameState="Last";
    }
  
  }
  
  if(gameState==="Last"){
     textSize(20);
    fill("red");
    text("Level5", 350, 100);
     textSize(15);
    text("Lives:"+ heart, 50, 50);
    text("Rescue the people by touching the barrier", 300, 50);
    player.y=player.y+4
    
    if(keyDown("up") && player.y >= 270) {
      player.velocityY = -15;
    }
    
    if(keyDown("right")){
      player.x+=5;
    }
    
    if(keyDown("left")){
      player.x-=5;
    }
    player.velocityY = player.velocityY + 0.8
    
    if(player.isTouching(d5)){
      d5.y=200;
      gameState="Win";
      person.y=-100;
      player.y=275;
    player.x=50;
      d5.y=-100;
    }
  }
  
  if(gameState==="Win"){
   textSize(50);
    fill("red");
    text(info.value()+ " YOU WON!", 200, 200);
    textSize(20);
    text("PRESS ENTER TO PLAY AGAIN", 300, 50);
    if(keyDown("enter")){
      gameState="Name";
    }
    
  }
  
  if(gameState==="End"){
     player.y=player.y+4
    ground2.y=-100;
  lava.y=-100;
  step1.y=-100;
  step2.y=-100;
  step3.y=-100
   b1.y=-100;
  b2.y=-100;
  b3.y=-100;
  b4.y=-100;
  s1.y=-10;
  s2.y=-40;
  s3.y=-70;
   d1.y=-50;
  d2.y=-50
  d3.y=-50;
  d4.y=-50;
  d5.y=-50;
     badGuy.y=-100;
  bullets.y=-100;
  person.y=-100;
    textSize(50);
    fill("red"); 
    text("YOU LOST", 200, 200);
    textSize(15);
    text("PRESS e TO RESTART", 300, 50);
    if(keyDown("e")){
      gameState="Name";
    }
  }
  
  //level1
     player.bounceOff(ground1);
    player.bounceOff(ground2);
  player.bounceOff(step1);
  player.bounceOff(step2);
  player.bounceOff(step3);
  player.bounceOff(lava);
  
  //level2
  player.bounceOff(b1);
  player.bounceOff(b2);
  player.bounceOff(b3);
  player.bounceOff(b4);
  
  //level3
  player.bounceOff(s1);
  player.bounceOff(s2);
  player.bounceOff(s3);
  s1.bounceOff(ground1);
  s2.bounceOff(ground1);
  s3.bounceOff(ground1);
  
  //level4
   player.bounceOff(d1);
  player.bounceOff(d2);
  player.bounceOff(d3);
  player.bounceOff(d4);
  player.bounceOff(d5);
  d1.bounceOff(ground1);
  d2.bounceOff(ground1);
  d3.bounceOff(ground1);
  d4.bounceOff(ground1);
  d5.bounceOff(ground1);
  
  //level5
  player.bounceOff(badGuy);
  badGuy.bounceOff(ground1);
  player.bounceOff(bullets);
  person.bounceOff(ground1);
  
  
  
  
  step1.setCollider("rectangle", 0, 0, 85, 22);
  step2.setCollider("rectangle", 0, 0, 85, 22);
  step3.setCollider("rectangle", 0, 0, 85, 22);
  
  s1.setCollider("rectangle", 0, 0, 19, 19);
  s2.setCollider("rectangle", 0, 0, 19, 19);
  s3.setCollider("rectangle", 0, 0, 19, 19);
  
  
  player.setCollider("circle", 0, 0, 100);
  
  
  drawSprites();
}


