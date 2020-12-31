var player, playerS, playerRunning;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, door;
var gameState = "play";
var deaths = 0;
var heart1, heart2, heart3,heart4, heart5, heartIM;
lives = 5;
var stage = 1;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10, obstacle11, obstacle12,obstacle13;
var obstacle14, obstacle15, obstacle16, obstacle17;
var speed;


function preload(){
  playerRunning = loadAnimation("man1.png", "man2.png","man3.png");
  
  playerS = loadImage("manS.png");

  heartIM = loadImage("Heart.png")

}

function setup() {
  createCanvas(1200,800);

wall1 = createSprite(100,600,5,200);
wall2 = createSprite(450,500,700,5);
wall3 = createSprite(550,700,900,5);
wall4 = createSprite(1000,475,5,450);
wall5 = createSprite(600,250,800,5);

wall6 = createSprite(800,475,5,50);
wall7 = createSprite(450,450,700,5);
wall8 = createSprite(100,350,5,200);


door = createSprite(150,250,100,5);
door.shapeColor = "white";



  obstacle1 = createSprite(300,600,30,30);
  obstacle10 = createSprite(375,600,30,30);
  obstacle2 = createSprite(450,600,30,30);
  obstacle11 = createSprite(525,600,30,30);
  obstacle3 = createSprite(600,600,30,30);
  obstacle12 = createSprite(675,600,30,30)
  obstacle4 = createSprite(750,600, 30,30);
  obstacle13 = createSprite(850,475,30,30);
  obstacle5 = createSprite(900,475,30,30);
  obstacle14 = createSprite(950,475,30,30);
  obstacle6 = createSprite(750,350,30,30);
  obstacle15 = createSprite(675,350,30,30);
  obstacle7 = createSprite(600,350,30,30);
  obstacle16 = createSprite(525,350,30,30);
  obstacle8 = createSprite(450,350,30,30);
  obstacle17 = createSprite(375,350,30,30);
  obstacle9 = createSprite(320,350,30,30);
  
  

  
  obstacle1.velocityY = 6;
  obstacle10.velocityY = -6;
  obstacle2.velocityY = 6;
  obstacle11.velocityY = -6;
  obstacle3.velocityY = 6;
  obstacle12.velocityY = -6;
  obstacle4.velocityY = 6;
  obstacle13.velocityY = -6;
  obstacle5.velocityX = 6;
  obstacle14.velocityY = 6;
  obstacle6.velocityY = 6;
  obstacle15.velocityY = -6;
  obstacle7.velocityY = 6;
  obstacle16.velocityY = -6;
  obstacle8.velocityY = 6;
  obstacle17.velocityY = -6;
  obstacle9.velocityY = 6;
 
 

  player = createSprite(140,600,20,20);
  player.addAnimation("running",playerRunning)

  player.scale = 0.20;
  
  heart1 = createSprite(25,25,20,20);
  heart1.addImage(heartIM);
  heart1.scale = 0.1;

  heart2 = createSprite(68,25,20,20);
  heart2.addImage(heartIM);
  heart2.scale = 0.1;

  heart3 = createSprite(110,25,20,20);
  heart3.addImage(heartIM);
  heart3.scale = 0.1;

  
  heart4 = createSprite(152,25,20,20);
  heart4.addImage(heartIM);
  heart4.scale = 0.1;

  heart5 = createSprite(194,25,20,20);
  heart5.addImage(heartIM);
  heart5.scale = 0.1;





 
}

function draw() {
  background("lightGray");  

  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);


  console.log(obstacle1.velocityY);

  


  
  obstacle1.bounceOff(wall2);
  obstacle1.bounceOff(wall3);
  obstacle10.bounceOff(wall2);
  obstacle10.bounceOff(wall3);
  obstacle2.bounceOff(wall2);
  obstacle2.bounceOff(wall3);
  obstacle11.bounceOff(wall2);
  obstacle11.bounceOff(wall3);
  obstacle3.bounceOff(wall2);
  obstacle3.bounceOff(wall3);
  obstacle12.bounceOff(wall2);
  obstacle12.bounceOff(wall3);
  obstacle4.bounceOff(wall2);
  obstacle4.bounceOff(wall3);
  obstacle13.bounceOff(wall5);
  obstacle13.bounceOff(wall3);
  obstacle5.bounceOff(wall4);
  obstacle5.bounceOff(wall6);
  obstacle14.bounceOff(wall5);
  obstacle14.bounceOff(wall3);
  obstacle6.bounceOff(wall7);
  obstacle6.bounceOff(wall5);
  obstacle7.bounceOff(wall7);
  obstacle7.bounceOff(wall5);
  obstacle8.bounceOff(wall7);
  obstacle8.bounceOff(wall5);
  obstacle9.bounceOff(wall7);
  obstacle9.bounceOff(wall5);
  obstacle15.bounceOff(wall7);
  obstacle15.bounceOff(wall5);
  obstacle16.bounceOff(wall7);
  obstacle16.bounceOff(wall5);
  obstacle17.bounceOff(wall7);
  obstacle17.bounceOff(wall5);

  



    
  if(player.isTouching(door)&&stage <4){
    stage = stage + 1;
    player.x = 140;
    player.y = 600;
    obstacle1.velocityY = obstacle1.velocityY + obstacle1.velocityY*1/3;
    obstacle2.velocityY = obstacle2.velocityY + obstacle2.velocityY*1/3;
    obstacle3.velocityY = obstacle3.velocityY + obstacle3.velocityY*1/3;
    obstacle4.velocityY = obstacle4.velocityY + obstacle4.velocityY*1/3;
    obstacle5.velocityX = obstacle5.velocityX + obstacle5.velocityX*1/3;
    obstacle6.velocityY = obstacle6.velocityY + obstacle6.velocityY*1/3;
    obstacle7.velocityY = obstacle7.velocityY + obstacle7.velocityY*1/3;
    obstacle8.velocityY = obstacle8.velocityY + obstacle8.velocityY*1/3;
    obstacle9.velocityY = obstacle9.velocityY + obstacle9.velocityY*1/3;
    obstacle10.velocityY = obstacle10.velocityY + obstacle10.velocityY*1/3;
    obstacle11.velocityY = obstacle11.velocityY + obstacle11.velocityY*1/3;
    obstacle12.velocityY = obstacle12.velocityY + obstacle12.velocityY*1/3;
    obstacle13.velocityY = obstacle13.velocityY + obstacle13.velocityY*1/3;
    obstacle14.velocityY = obstacle14.velocityY + obstacle14.velocityY*1/3;
    obstacle15.velocityY = obstacle15.velocityY + obstacle15.velocityY*1/3;
    obstacle16.velocityY = obstacle16.velocityY + obstacle16.velocityY*1/3;
    obstacle17.velocityY = obstacle17.velocityY + obstacle17.velocityY*1/3;
   // console.log("door is working");
  }  
  if(stage ===4){
    gameState = "win";
  }  

 



  if(gameState === "win"){
      text("YOU WON! GAME OVER! Press space to restrat the game.",600,50)
      
     }
  if(gameState === "play"){
    text("Use the w a s d keys or arrow keys to move around. Avoid the obstacles and get to the white door to win!",400,50);
    text("Once you get to the door, you will be teleported to the next room. Get past the third room to win. You have five lives. Good luck!",400,75);
    text("room " + stage, 150, 240);
    if(keyDown("right")||(keyDown("d"))){
      // player.changeAnimation("running",playerRunning)
      player.x = player.x + 8;
    }
    if(keyDown("left")||(keyDown("a"))){
      //player.changeAnimation("running",playerRunning)
      player.x = player.x - 8;
      player.flip;
    }
    if(keyDown("up")||(keyDown("w"))){
      //player.changeAnimation("running",playerRunning)
      player.y = player.y - 8;
    }
    if(keyDown("down")||(keyDown("s"))){
      //player.changeAnimation("running",playerRunning)
      player.y = player.y + 8;
    }
      
   

  }
 


  

 if(gameState === "die"){
  text("YOU DIED! GAME OVER! Press space to restart the game.", 400,50);
  
}
else if(lives === 5){
  heart1.visible = true;
  heart2.visible = true;
  heart3.visible = true;
  heart4.visible = true;
  heart5.visible = true;
}else if(lives === 4){
  heart1.visible = true;
  heart2.visible = true;
  heart3.visible = true;
  heart4.visible = true;
  heart5.visible = false;
}else if(lives === 3){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = false;
    heart5.visible = false;
  }else if(lives === 2){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = false;
  }else if(lives === 1){
    heart1.visible = true;
    heart2.visible = false;
    heart3.visible = false;
  }else if(lives === 0){
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    gameState = "die";
  }
  if(player.isTouching(obstacle1)||player.isTouching(obstacle2)||player.isTouching(obstacle3)||player.isTouching(obstacle4)||
  player.isTouching(obstacle5)||player.isTouching(obstacle6)||player.isTouching(obstacle7)||player.isTouching(obstacle8)||player.isTouching(obstacle9)||
  player.isTouching(obstacle10)||player.isTouching(obstacle11)||player.isTouching(obstacle12)||player.isTouching(obstacle13)||
  player.isTouching(obstacle14)||player.isTouching(obstacle15)||player.isTouching(obstacle16)||player.isTouching(obstacle17)){
    player.x = 140;
    player.y = 600;
    lives = lives - 1;
  }

  if(keyWentDown("space")&&
    
  ((gameState === "win")||(gameState === "die"))){
   reset();
    
  }

  //console.log(gameState);
  drawSprites();
}


function reset(){
  
  stage = 1;
  gameState = "play";
  lives = 5;

  obstacle1.velocityY = 6;
  obstacle10.velocityY = -6;
  obstacle2.velocityY = 6;
  obstacle11.velocityY = -6;
  obstacle3.velocityY = 6;
  obstacle12.velocityY = -6;
  obstacle4.velocityY = 6;
  obstacle13.velocityY = -6;
  obstacle5.velocityX = 6;
  obstacle14.velocityY = 6;
  obstacle6.velocityY = 6;
  obstacle15.velocityY = -6;
  obstacle7.velocityY = 6;
  obstacle16.velocityY = -6;
  obstacle8.velocityY = 6;
  obstacle17.velocityY = -6;
  obstacle9.velocityY = 6;
}