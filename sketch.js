var PLAY = 1;
var END = 0;
var gameState = PLAY;
var shooter, shooterImg;
var enemyShooter1,enemyShooter2,enemyShooter3,enemyShooter4, enemyshooterImg;
var backgroundImg, bg;
var laser,laserImg, laserGroup;
var score = 0;
var fireball;
var laserSound, explosionSound, explosionSound2, explosionSound3;

function preload(){
 
shooterImg = loadImage("shooter.png");
enemyshooterImg = loadImage("enemyShooter.png");
backgroundImg = loadImage("background.png");
laserImg = loadImage("laser.png");
fireballImg = loadImage("fireball.png");
laserSound = loadSound("laser.mp3");
explosionSound = loadSound("explosion.mp3");
explosionSound2 = loadSound("explosion2.mp3");
explosionSound3 = loadSound("explosion3.mp3");

}

function setup() {
  createCanvas(1000,windowHeight);
  
bg = createSprite(0,0,1000,windowHeight); 
bg.addImage(backgroundImg);
bg.scale = 2.5;

enemyShooter1 = createSprite(windowWidth/2,55,100,100);
enemyShooter1.addImage(enemyshooterImg);
enemyShooter1.scale = 0.5;
enemyShooter1.velocityX = 8;
  
enemyShooter2 = createSprite(windowWidth/2,110,100,100);
enemyShooter2.addImage(enemyshooterImg);
enemyShooter2.scale = 0.5;
enemyShooter2.velocityX = -8;
  
enemyShooter3 = createSprite(windowWidth/2,165,100,100);
enemyShooter3.addImage(enemyshooterImg);
enemyShooter3.scale = 0.5;
enemyShooter3.velocityX = 5;

enemyShooter4 = createSprite(windowWidth/2,165,100,100);
enemyShooter4.addImage(enemyshooterImg);
enemyShooter4.scale = 0.5;
enemyShooter4.velocityX = -3;
  
shooter = createSprite(windowWidth/2,windowHeight-450,100,100);
shooter.addImage(shooterImg);
shooter.scale = 0.4;
  
laserGroup = new Group();
fireballGroup = new Group();

}

function draw() {
  
if(gameState === PLAY) {
  
bg.velocityY = 5;
  
if(bg.y > 800) {
  bg.y = bg.height;
  
}
  
if(keyDown(LEFT_ARROW)) {
shooter.x = shooter.x - 5;
}
  
if(keyDown(RIGHT_ARROW)) {
shooter.x = shooter.x + 5;
}
  
if(keyDown(DOWN_ARROW)) {
shooter.y = shooter.y + 5;
}
  if(keyDown(UP_ARROW)) {
shooter.y = shooter.y - 5;
}
if(keyDown('space')) {
  
createLaser();
  
laserSound.play();

  
}
  
  
if(laserGroup.isTouching(enemyShooter1)) {
  
  enemyShooter1.destroy();
  laser.destroy();
  score = score + 10;
  explosionSound2.play();

}
  
if(laserGroup.isTouching(enemyShooter2)) {
  
  enemyShooter2.destroy();
  laser.destroy();
  score = score + 10;
  explosionSound2.play();

  
}
  
if(laserGroup.isTouching(enemyShooter3)) {
  
  enemyShooter3.destroy();
  laser.destroy();
  score = score + 10;
  explosionSound2.play();

}
  
if(laserGroup.isTouching(enemyShooter4)) {
  
  enemyShooter4.destroy();
  laser.destroy();
  score = score + 10;
  explosionSound2.play();

}
  
  if(laserGroup.isTouching(fireballGroup)) {
  
  fireball.destroy();
  laser.destroy();
  score = score + 5;
  explosionSound3.play();
}
  
if(fireballGroup.isTouching(shooter)) {
  
  gameState = END;
  explosionSound.play();
}
  
  
  

  
edges = createEdgeSprites();
enemyShooter1.bounceOff(edges);
enemyShooter2.bounceOff(edges);
enemyShooter3.bounceOff(edges);
enemyShooter4.bounceOff(edges);
  
spawnFireball();

  
}
if(gameState === END) {

fireball.destroy();
shooter.destroy();
enemyShooter1.destroy();
enemyShooter2.destroy();
enemyShooter3.destroy();
enemyShooter4.destroy();
  

 
  
}
drawSprites();

fill("white");  
textSize(25); 
text("Score : "+score,770,windowHeight-200);

  
}

function createLaser() {
  
laser = createSprite(windowWidth/2,windowHeight-400,100,100);
laser.addImage(laserImg);
laser.scale = 0.08;
  
laser.x = shooter.x;
laser.y = shooter.y - 50;

laser.velocityY = -8;

laserGroup.add(laser);

  
  
}
function spawnFireball(){
 if (frameCount % 60 === 0){
   fireball = createSprite(random(100,900),165,10,40);
   
fireball.velocityY = 10;
fireball.addImage(fireballImg)
fireball.scale=0.1;
fireballGroup.add(fireball);

 }
}


