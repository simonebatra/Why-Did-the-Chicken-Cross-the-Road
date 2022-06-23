var grass, grassImg, bird, birdImg, coin, coinImg, trainImg, trackImg, track1, track2, track3
var gameState =  0 , coin1, coin2, coin3, finishLineImg, finishLine, trackTwoImg, finishLineTwo, finishLineTwoImg, upTrainImg, downTrainImg, train1, train2, train3, train4, train5, train6, coin1, coin2, coin3, coin4, coin5, coin6, coinImg, coinNum = 0, playButton, entryImg
var resetButtonImg, resetButton, backGMusic, muteButtonImg, muteButton, footStepSound, trainSound, victoryMusic, gameOverMusic, finishLineThree

function preload(){
  grassImg = loadImage("grass.jpg");
  grassImg.height = windowHeight*3;

  trainImg = loadImage("train.jpg");

  trackImg = loadImage("track.png");

  birdImg = loadImage("bird.jpg");

  finishLineImg = loadImage("finishline.png")

  trackTwoImg = loadImage("lev2track.png")

  finishLineTwoImg = loadImage("level2fin.png")

  upTrainImg = loadImage("uptrain.png")

  downTrainImg = loadImage("downtrain.png")

  coinImg = loadImage("ImageNameHere.png")

  entryImg = loadImage("question.png")

  resetButtonImg = loadImage("SeekPng.com_reset-button-png_3038975.png")

  backGMusic = loadSound("videoplayback.mp3")
  
  muteButtonImg = loadImage("img_517654.png")

  footStepSound = loadSound("New Recording 30.m4a")

  trainSound = loadSound("Train Passing By Sound Effect.mp3")

  victoryMusic = loadSound("Victory_Computer_Sound_-_Free_Sound_(getmp3.pro).mp3")

  gameOverMusic = loadSound("Game_Over_-_Sound_Effect_HD_(getmp3.pro).mp3")
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  backGMusic.play();

  entry = createSprite(windowWidth/2, height/2-50);
  entry.addImage(entryImg);
  entry.scale = 0.7;

  playButton = createButton("Play");

  playButton.position(width / 2-100, height / 2+200);

  playButton.class("customButton");

  resetButton = createButton("");
  resetButton.class("resetButton");
  resetButton.position(width - 150, 50);

  muteButton = createButton("");
  muteButton.class("muteButton");
  muteButton.position(width - 250, 50);

  track1 = createSprite(windowWidth/2, 200, windowWidth-50, 50);
  track1.addImage(trackImg);

  track2 = createSprite(windowWidth/2, 400, windowWidth-50, 50);
  track2.addImage(trackImg);

  track3 = createSprite(windowWidth/2, 600, windowWidth-50, 50);
  track3.addImage(trackImg);

  train1 = createSprite(0, 200, 500, 50);
  train1.addImage("train", trainImg);
  train1.scale = 0.04;

  train2 = createSprite(windowWidth, 400, 500, 50);
  train2.addImage("train", trainImg);
  train2.scale = 0.04;

  train3 = createSprite(0, 600, 500, 50);
  train3.addImage("train", trainImg);
  train3.scale = 0.04;

  finishLine = createSprite(windowWidth/2, 850, windowWidth-50, 50);
  finishLine.addImage("finishline", finishLineImg);
  finishLine.scale = 1.5;

  bird = createSprite(windowWidth/2, 50, 50, 50);
  bird.addImage("bird", birdImg);
  bird.scale = 0.04;

  coin1 = createSprite(windowWidth/2-300, 300);
  coin1.addImage(coinImg);
  coin1.scale = 0.1;

  coin2 = createSprite(windowWidth/2+300, 700);
  coin2.addImage(coinImg);
  coin2.scale = 0.1;

  coin3 = createSprite(windowWidth/2+500, 700);
  coin3.addImage(coinImg);
  coin3.scale = 0.1;
  coin3.visible = false;
  
  coin4 = createSprite(windowWidth/2-500, 300);
  coin4.addImage(coinImg);
  coin4.scale = 0.1;
  coin4.visible = false;

  coin5 = createSprite(windowWidth/2+300, 800);
  coin5.addImage(coinImg);
  coin5.scale = 0.1;
  coin5.visible = false;

  coin6 = createSprite(windowWidth/2-300, 800);
  coin6.addImage(coinImg);
  coin6.scale = 0.1;
  coin6.visible = false;

  track4 = createSprite(windowWidth/2-600, windowHeight/2, windowWidth-50, 50);
  track4.addImage(trackTwoImg);
  track4.visible=false;

  track5 = createSprite(windowWidth/2-100, windowHeight/2, windowWidth-50, 50);
  track5.addImage(trackTwoImg);
  track5.visible=false;

  track6 = createSprite(windowWidth/2+400, windowHeight/2, windowWidth-50, 50);
  track6.addImage(trackTwoImg);
  track6.visible=false;

  finishLineTwo = createSprite(windowWidth, windowHeight/2, windowWidth-50, 50);
  finishLineTwo.addImage("finishline2", finishLineTwoImg);
  finishLineTwo.scale = 1.5;
  finishLineTwo.visible=false;

  train4 = createSprite(windowWidth/2-600, windowHeight+1000, 500, 50);
  train4.addImage("train", upTrainImg);
  train4.scale = 0.04;
  train4.visible=false;

  train5 = createSprite(windowWidth/2-100, -1000, 500, 50);
  train5.addImage("train", downTrainImg);
  train5.scale = 0.04;
  train5.visible=false;

  train6 = createSprite(windowWidth/2+400, windowHeight+1000, 500, 50);
  train6.addImage("train", upTrainImg);
  train6.scale = 0.04;
  train6.visible=false;

    bird.visible=false;
    track1.visible=false;
    track2.visible=false;
    track3.visible=false;
    coin1.visible=false;
    coin2.visible=false;
    finishLine.visible=false;
    train1.visible=false;
    train2.visible=false;
    train3.visible=false;
    coin1.visible=false;
    coin2.visible=false;

    coinNum = 0

    
  if(gameState=1){
    train1.velocityX = 40;
  
    train2.velocityX = -50;
  
    train3.velocityX = 60;
    }

}


function draw() { 
  background(grassImg);

  if (bird.collide(train1)||bird.collide(train2)|| bird.collide(train3)||bird.collide(train4)||bird.collide(train5)||bird.collide(train6)){
    gameState=4;
    bird.destroy();
    train1.velocityX=0;
    train2.velocityX=0;
    train3.velocityX=0;
    train4.velocityY=0;
    train5.velocityY=0;
    train6.velocityY=0;
    gameOver();
  }

  if (bird.collide(coin3)){
    coin3.destroy()
    coinNum+=1;
  }

  if (bird.collide(coin4)){
    coin4.destroy()
    coinNum+=1;
  }

  playButton.mousePressed(() => {
    playButton.hide();
    entry.visible=false;
    gameState=1;
    playLevelOne();
  });

  resetButton.mousePressed(() => {
    location.reload();
  });

  if (bird.collide(coin1)){
    coin1.destroy()
    coinNum+=1;
  }

  if (bird.collide(coin2)){
    coin2.destroy()
    coinNum+=1;
  }

  if (train1.x > windowWidth+250){
    train1.x = 0;
  }

  if (train2.x < -250){
    train2.x = windowWidth;
  }

  if (train3.x > windowWidth+250){
    train3.x = 0;
}

if (bird.x < 0){
  bird.x = windowWidth;
}

if (bird.x > windowWidth){
  bird.x = 0;
}


if (bird.y < 0){
  bird.y = windowHeight;
}

/*if (bird.y > windowHeight-250){
  bird.y = 0;
}*/

if (train4.y < 0){
  train4.y = windowHeight;
}

if (train5.y > windowHeight+250){
  train5.y = 0;
}

if (train6.y < 0){
  train6.y = windowHeight;
}

muteButton.mousePressed(() => {
footStepSound.stop();
trainSound.stop();
victoryMusic.stop();
gameOverMusic.stop();

  if (backGMusic.isPlaying()) {
    // .isPlaying() returns a boolean
    backGMusic.stop();

  }
  else {
    backGMusic.play();
  }
});

  drawSprites();
   textSize(30);
  fill("white");
  text("Coins: "+ coinNum, 60,50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    bird.y = bird.y - 50;
    footStepSound.play();
  } else if (keyCode === DOWN_ARROW) {
   bird.y = bird.y + 50;
   footStepSound.play();
  }
  if (keyCode === LEFT_ARROW) {
    bird.x = bird.x - 50;
    footStepSound.play();
  } else if (keyCode === RIGHT_ARROW) {
    bird.x = bird.x + 50;
    footStepSound.play();
  }

  if (bird.collide(finishLine)){
    gameState=2;
    bird.destroy();

    if (gameState = 2){
      train1.destroy();
      train2.destroy();
      train3.destroy();
      track1.destroy();
      track2.destroy();
      track3.destroy();
      finishLine.destroy();
      playLevelTwo();
    }
    
    victoryMusic.play();

    Swal.fire({
      title: `CONGRATS!`,
      text: "You made it! Time for the next level.",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  if (bird.collide(finishLineTwo)){
    gameState=3;

    if (gameState = 3){
      bird.destroy();
      playLevelThree();
    }
    
    Swal.fire({
      title: `CONGRATS!`,
      text: "You made it! Time for the next level.",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }


  if (bird.collide(finishLineThree)){
      bird.destroy();

      train1.velocityX=0;
      train2.velocityX=0;
      train3.velocityX=0;
      train4.velocityY=0;
      train5.velocityY=0;
      train6.velocityY=0;
    
    Swal.fire({
      title: `CONGRATS!`,
      text: "You won!",
      imageSize: "100x100",
      confirmButtonText: "Ok, reset game"
    }).then(function(){ 
      location.reload();
      }
   );
  }
}

function gameOver(){

  gameOverMusic.play();
  backGMusic.stop();

  Swal.fire({
    title: `Game Over`,
    text: "Oops, you lost the game!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Ok, restart"
  }).then(function(){ 
    location.reload();
    }
 );
}

function playLevelOne(){
  bird.visible=true;
  track1.visible=true;
  track2.visible=true;
  track3.visible=true;
  coin1.visible=true;
  coin2.visible=true;
  finishLine.visible=true;
  train1.visible=true;
  train2.visible=true;
  train3.visible=true;

  if (bird.collide(coin1)){
    coin1.destroy()
    coinNum+=1;
  }

  if (bird.collide(coin2)){
    coin2.destroy()
    coinNum+=1;
  }

  

  if (bird.collide(coin5)){
    coin5.destroy()
    coinNum+=1;
  }

  if (bird.collide(coin6)){
    coin6.destroy()
    coinNum+=1;
  }



  if (bird.collide(train1)||bird.collide(train2)|| bird.collide(train3)){
    gameState=4;
    bird.destroy();
    train1.velocityX=0;
    train2.velocityX=0;
    train3.velocityX=0;
    gameOver();
  }

}

function playLevelTwo(){

  track4.visible = true;
  track5.visible = true;
  track6.visible = true;
  finishLineTwo.visible=true;
  train4.visible=true;
  train5.visible=true;
  train6.visible=true;
  coin3.visible=true;  
  coin4.visible=true;

  train4.y=windowHeight;
  train5.y=windowHeight*0;
  train6.y=windowHeight;
  

  
  bird = createSprite(windowWidth/2-700, windowHeight/2, 50, 50);
  bird.addImage("bird", birdImg);
  bird.scale = 0.04;


  train4.velocityY = -40;

  train5.velocityY = 45;

  train6.velocityY = -35;

  /*if (bird.collide(finishLineTwo)&&gameState==2){
    gameState=3;
    bird.x=250, 250;

    if (gameState = 3){
      bird.destroy();
      playLevelThree();
    }
    
    Swal.fire({
      title: `CONGRATS!`,
      text: "You made it! Time for the next level.",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }*/

}

function playLevelThree(){
  finishLine.destroy();
  finishLineTwo.destroy();

  coin5.visible=true;  
  coin6.visible=true;

  finishLineThree = createSprite(windowWidth, windowHeight/2, windowWidth-50, 50)
  finishLineThree.addImage("finishline2", finishLineTwoImg);

  track1 = createSprite(windowWidth/2, 200, windowWidth-50, 50);
  track1.addImage(trackImg);

  track2 = createSprite(windowWidth/2, 400, windowWidth-50, 50);
  track2.addImage(trackImg);

  track3 = createSprite(windowWidth/2, 600, windowWidth-50, 50);
  track3.addImage(trackImg);

  train1 = createSprite(0, 200, 500, 50);
  train1.addImage("train", trainImg);
  train1.scale = 0.04;

  train2 = createSprite(windowWidth, 400, 500, 50);
  train2.addImage("train", trainImg);
  train2.scale = 0.04;

  train3 = createSprite(0, 600, 500, 50);
  train3.addImage("train", trainImg);
  train3.scale = 0.04;

  train4 = createSprite(windowWidth/2-600, windowHeight, 500, 50);
  train4.addImage("train", upTrainImg);
  train4.scale = 0.04;
  train4.velocityY = -40;

  train5 = createSprite(windowWidth/2-100, windowHeight*0, 500, 50);
  train5.addImage("train", downTrainImg);
  train5.scale = 0.04;
  train5.velocityY = 45;

  train6 = createSprite(windowWidth/2+400, windowHeight, 500, 50);
  train6.addImage("train", upTrainImg);
  train6.scale = 0.04;
  train6.velocityY = -35;

  train1.velocityX = 40;
  
  train2.velocityX = -50;

  train3.velocityX = 60;

  bird = createSprite(0, 100, 50, 50);
  bird.addImage("bird", birdImg);
  bird.scale = 0.04;

  /*if (bird.collide(finishLineTwo)&&gameState==3){
    bird.destroy();

    train1.velocityX=0;
    train2.velocityX=0;
    train3.velocityX=0;
    train4.velocityY=0;
    train5.velocityY=0;
    train6.velocityY=0;
  
    Swal.fire({
    title: `CONGRATS!`,
    text: "You won!",
    imageSize: "100x100",
    confirmButtonText: "Ok, reset game"
    }).then(function(){ 
    location.reload();
    });
  }*/
}


