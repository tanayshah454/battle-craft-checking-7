var heart1,heart2,player1,player1_img,player2,player1ducked_img,player1ducked,ground,weapon;
var bg,weapon_img;
var edges;
var fplayer1,fplayer2;
var trident1,trident_img,trident2,trident2_img;
var flag,flag1;
var axe;
var heart8,heart7,heart6,heart5,heart4,heart3,heart2,heart1;
var h1,h2;
var hearts,hearts2;
var base,img;
var upButton,downButton,lestButton,rightButton,upImg,downImg,leftImg,rightImg
var gameState
function preload(){
bg=loadImage("photos/background.png");
player1_img=loadImage("photos/1noweapons1.png");
weapon_img=loadImage("photos/weapon2.PNG");
player2_img=loadImage("photos/2noweapon.png");
weapon2_img=loadImage("photos/weapon1.png");
fplayer1=loadImage("photos/1noweapons.png");
fplayer2=loadImage("photos/2noweapon2.png");
trident_img=loadImage("photos/trident2.png");
trident2_img=loadImage("photos/trident.png");
weapon12_img=loadImage("photos/weapon22.png")
weapon22_img=loadImage("photos/weapon12.png")
heart8=loadImage("photos/heart8.png");
heart7=loadImage("photos/heart7.png")
heart6=loadImage("photos/heart6.png")
heart5=loadImage("photos/heart5.png")
heart4=loadImage("photos/heart4.png")
heart3=loadImage("photos/heart3.png")
heart2=loadImage("photos/heart2.png")
heart1=loadImage("photos/heart1.png")
base=loadImage("photos/base.png")
upImg=loadImage("photos/upButton.png")
downImg=loadImage("photos/DownButton.png")
leftImg=loadImage("photos/rightButton.png")
rightImg=loadImage("photos/leftButton.png")
}
function setup() {
  var canvas = createCanvas(1200,400);
    ground=createSprite(600,410,1200,20);
    ground.visible=false;
    player1=createSprite(100,325,20,20);
    player1.addImage(player1_img);
    player1.scale=0.5;
    player2=createSprite(1100,325,20,20);
    player2.addImage(player2_img);
    player2.scale=0.5;
    weapon=createSprite(player1.x+50,player1.y-35);
    weapon.addImage(weapon_img);
    weapon.scale=0.2
    weapon12=createSprite(player1.x+50,player1.y);
    weapon12.addImage(weapon12_img);
    weapon12.scale=0.2
    weapon12.visible=false;
    trident1=createSprite(player1.x+50,player1.y-35);
    trident1.addImage(trident_img);
   trident1.scale=0.5
   trident1.visible=false;
    weapon2=createSprite(player2.x-50,player2.y-35);
    weapon2.addImage(weapon2_img);
    weapon2.scale=0.2
    weapon22=createSprite(player1.x+50,player1.y);
    weapon22.addImage(weapon22_img);
    weapon22.scale=0.2
    weapon22.visible=false;
    trident2=createSprite(player2.x-50,player2.y-35);
    trident2.addImage(trident2_img);
   trident2.scale=0.5
   trident2.visible=false;
axe=true;
    flag=0;
    flag1=0;
      hearts=createSprite(150,90,10,10)
      hearts.addImage(heart8)
      hearts.scale=0.2
     h1=8;
   
      hearts2=createSprite(1050,90,10,10)
      hearts2.addImage(heart8)
      hearts2.scale=0.2
    h2=8;
    upButton=createButton(upImg);
    upButton.position(50,330)
    upButton.hide();
    downButton=createButton(upImg);
    downButton.position(50,380)
    downButton.hide();
    leftButton=createButton(leftImg);
    leftButton.position(20,355)
    leftButton.hide();
    rightButton=createButton(rightImg);
    rightButton.position(80,355)
    rightButton.hide();
    restart=createButton("Play Again")
    restart.position(550,200)
    restart.hide()
    gameState=1;
    restart.mousePressed(()=> {
      gameState=1
      }
      )
}
function draw() {
  background(bg);
//------------------------------------PLAYER 1---------------------------------------------------------------
//attach weapon positions to the player
if(gameState===1){
  if(flag1===0){
    weapon.x=player1.x+50;
    weapon.y=player1.y-45;
    trident1.x=player1.x+50;
    trident1.y=player1.y-35; 
  }
//-------------------------------------------Movement while crouching-----------------------------------------
player1.velocityY+=0.7;
player1.collide(ground);
player2.collide(ground);
if(keyDown(DOWN_ARROW)&&player1.y>=327){
  player1.y+=70;
  if(keyDown(LEFT_ARROW)){
    player1.x-=2;
  }
  if(keyDown(RIGHT_ARROW)){
    player1.x+=2;
  }
}
//------------------------------------------Movement while standing--------------------------------------------
if(keyDown(LEFT_ARROW)){
  player1.x-=5;
  player2.x+=4
}
if(keyDown(RIGHT_ARROW)){
  player1.x+=5;
  player2.x-=4
}
if(keyDown(UP_ARROW)&&player1.y>=327){
  player1.velocityY=-20;
}

upButton.mousePressed(()=>
player1.velocityY=-20
)
//-------------------------------------------Highlighting PLAYER 1--------------------------------------------
ellipseMode(RADIUS);
stroke("red");
strokeWeight(10);
fill("red");
ellipse(player1.x,player1.y,30,50)
//------------------------------------------Collide PLAYER 1 with edges----------------------------------------
edges=createEdgeSprites();
player1.collide(edges[0]);
player1.collide(edges[1]);
//--------------------------------Change images if players cross each other and Movement of Axe----------------
if(player1.x>player2.x){
  flag1=1;
  player1.addImage(fplayer1);
  player2.addImage(fplayer2);
  trident2.x=player1.x-50;
  trident2.y=player1.y-25;
  trident1.y=player2.y-25; 
  trident1.x=player2.x+50;
  weapon2.x=player1.x-50;
  weapon2.y=player1.y-35;
  weapon.x=player2.x+50;
  weapon.y=player2.y-35;
  if(keyDown("space")&&axe===true){
    weapon2.visible=false;
    weapon22.visible=true;
    weapon22.x=player1.x-50;
    weapon22.y=player1.y;  
  }
  if(keyWentUp("space")&&axe===true){
    weapon2.visible=true;
    weapon22.visible=false;
  }
  if(keyDown("m")){
    weapon2.visible=false;
    trident2.visible=true;
    flag=1;
    axe=false;
  }
  if(keyDown("n")){
    trident2.visible=false;
    weapon2.visible=true;
    flag=0;  
    axe=true;
  }
  trident1.x=player2.x-50;
  trident1.y=player2.y-25;
  player1.velocityY+=0.7;
  if(keyDown("space")&&axe===false&&player2.y>=324.75&&player1.x-player2.x>=600&&player1.y>=327){
    flag1=1;
     trident2.velocityX=-50;
     player2.velocityY=-15;
   }
  
   if(keyDown("space")&&axe===false&&player2.y>=324.75&&player1.x-player2.x>=600&&player1.y<327){
    flag1=1;
     trident2.velocityX=-50;
     player2.y=player2.y+70;
   }
   if(trident2.x<player2.x){
     trident2.x=player1.x-50;
     flag1=0;
   }
   /*if(weapon2.isTouching(player1)&&player1.x-player2.x>=37&&player1.x-player2.x<=50){
    weapon.visible=false;
    weapon12.visible=true;
    weapon12.x=player2.x+50
    weapon12.y=player2.y;
  }else{
    weapon.visible=true;
    weapon12.visible=false;
  }*/
  if(axe===false){
    weapon2.visible=false;
    trident1.visible=false
    trident2.visible=true
    trident2.x=player1.x-50
    trident2.y=player1.y-30
  }
  if(weapon22.isTouching(player2)){
    a--
  }
}else{
  player1.addImage(player1_img);
  player2.addImage(player2_img);
  weapon.x=player1.x+50;
  weapon2.x=player2.x-50;
  weapon2.y=player2.y-35
  if(keyDown("space")&&axe===true){
    weapon.visible=false;
    weapon12.visible=true;
    weapon12.x=player1.x+50;
    weapon12.y=player1.y;
 
  }
  if(keyWentUp("space")&&axe===true){
    weapon.visible=true;
    weapon12.visible=false;
  }
  /*if(weapon2.isTouching(player1)&&player2.x-player1.x>=37&&player2.x-player1.x<=50){
    weapon2.visible=false;
    weapon22.visible=true;
    weapon22.x=player2.x-50
    weapon22.y=player2.y;
  }else{
    weapon2.visible=true;
    weapon22.visible=false;
  }*/
  if(keyDown("m")){
    weapon.visible=false;
    trident1.visible=true;
    flag=1;
    axe=false;
  }
  if(keyDown("n")){
    trident1.visible=false;
    weapon.visible=true;
    flag=0;  
    axe=true;
  }
  trident2.x=player2.x-50;
  trident2.y=player2.y-25;
  player1.velocityY+=0.7;
  if(keyDown("space")&&axe===false&&player2.y>=324.75&&player2.x-player2.y>=600&&player1.y>=327){
    flag1=1;
     trident1.velocityX=50;
     player2.velocityY=-15;
   }
   if(keyDown("space")&&axe===false&&player2.y>=324.75&&player2.x-player2.y>=600&&player1.y<327){
    flag1=1;
     trident1.velocityX=50;
     player2.y=player2.y+70;
   }
   if(trident1.x>player2.x){
     trident1.x=player1.x+50;
     flag1=0;
   }
   if(axe===false){
    trident2.visible=false
    trident1.visible=true
    trident1.x=player1.x+50
    trident1.y=player1.y-30
  }
}
//------------------------------------------------reducing hearts of players-------------------------------------------
if(weapon12.isTouching(player2)&&keyDown("space")&&frameCount%3===0){
 h2--;
 console.log(h2);
 switch(h2){
  
   case 7:hearts2.addImage(heart7)
   hearts2.scale=0.2;
   break;
   case 6:hearts2.addImage(heart6)
   hearts2.scale=0.2;
   break;
   case 5:hearts2.addImage(heart5)
   hearts2.scale=0.2;
   break;
   case 4:hearts2.addImage(heart4)
   hearts2.scale=0.2;
   break;
   case 3:hearts2.addImage(heart3)
   hearts2.scale=0.2;
   break;
   case 2:hearts2.addImage(heart2)
   hearts2.scale=0.2;
   break;
   case 1:hearts2.addImage(heart1)
   hearts2.scale=0.2;
   break;
   default:break;
}
}
if(h2===0){
  gameState=2
}
if(gameState===2){
  text("GAME OVER",650,200);
  player1.velocityX=0;
  player2.velocityX=0;
  fplayer1.velocityX=0;
  fplayer2.velocityX=0;
  trident1.velocityX=0;
  trident2.velocityX=0;
  weapon.velocityX=0;
  weapon2.velocityX=0;
  weapon12.velocityX=0;
  weapon22.velocityX=0;
  player1.velocityY=0;
  player2.velocityY=0;
  fplayer1.velocityY=0;
  fplayer2.velocityY=0;
  trident1.velocityY=0;
  trident2.velocityY=0;
  weapon.velocityY=0;
  weapon2.velocityY=0;
  weapon12.velocityY=0;
  weapon22.velocityY=0;
  upButton.hide()
  downButton.hide()
  rightButton.hide()
  leftButton.hide()
  restart.show()
}
drawSprites();
console.log(gameState)
}
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var resJson =await response.json();
  var dt=resJson.datetime
  var hr=dt.slice(11,13);
  if(hr>=06&&hr<=18){
      bg="photos/background.png"
  }else{
      bg="photos/night.jpg"
  }
  backgroundImg=loadImage(bg)
  }