  var ss;
  var bgm;
  var Nemo ,   background, turtle, fish, shark ,seahorse ;
  var nemoIMG,  turtleIMG, fishIMG, sharkIMG ,seahorseIMG, backgroundImage;
  var speed;

  var health;
  var health1,health2,health3;
  var health1Image;

  var GameOver,GameoverImage,gom,hrtm;
  var gmover,gmoverIMG;

  var finding_nemo,finding_nemoIMG;
  var start,startIMG;
  var Score_,score;


  speed = 3;



  function preload(){
    
    backgroundImage = loadImage("images/background (2).png");
    GameoverImage = loadImage("images/gamover.png");
    gmoverIMG = loadImage("images/gameover2.png");

    nemoIMG = loadImage("images/nemo.png");
  turtleIMG = loadImage("images/turtle1.png");
  fishIMG = loadImage("images/fish.png");
    sharkIMG = loadImage("images/shark.png");
  seahorseIMG = loadImage("images/seahorse.png");
  health1Image = loadImage("images/1bubble.png");


    finding_nemoIMG = loadImage("images/logo.png");
    startIMG = loadImage("images/start.png");
  

    bgm=loadSound("music/finding nemo.mp3");
    gom=loadSound("music/gameover.wav");
    hrtm=loadSound("music/bubbles.mp3");

  }





  function setup() {
    createCanvas(1000, 470);
    
  score = 1


    //creating background
    background = createSprite(0,0,600,600);
    background.addImage(backgroundImage);
    background.scale = 1.2
    //createing logo

    finding_nemo = createSprite(500,150,20,20);
  finding_nemo.addImage(finding_nemoIMG);
  finding_nemo.scale = 0.5;

  //character

    Nemo = createSprite(900,220,20,50);
    Nemo.addImage(nemoIMG); 
    Nemo.scale = 0.15;


    //health


    health1=createSprite(30,40,20,20)
  health1.addImage(health1Image);
  health1.scale = 0.03

  health2=createSprite(60,40,20,20)
  health2.addImage(health1Image);
  health2.scale = 0.03

  health3=createSprite(90,40,20,20)
  health3.addImage(health1Image);
  health3.scale = 0.03

  score = 1


  //start

  start = createSprite(480,350,20,20);
  start.addImage(startIMG);
  start.scale = 0.15



  //creating gameover sign
  GameOver= createSprite(500,200,20,20)
      GameOver.addImage(GameoverImage);
      GameOver.scale = 0.2;

      gmover = createSprite(500,340,20,20)
      gmover.addImage(gmoverIMG)
  gmover.scale=0.05;

    health=7;
  





    //making groups
    fish= new Group();
    turtle= new Group();
    shark= new Group();
    seahorse= new Group();





  }




  function draw() {



  //visible

  GameOver.visible = false;
  gmover.visible = false;




  if(health>6){
  health1.visible = false;
  health2.visible = false;
  health3.visible = false;



  //start
  if(mousePressedOver(start)){

    finding_nemo.visible = false;

    health = 6
    bgm.play()
  }
  Nemo.visible = false;
  }


    // moving ground
    background.velocityX = 3 

    if (background.x > 900){
      background.x = background.width/6;
    }


    //gamestate

    if (health> 0 && health < 7){




  console.log(score);


  //collide


  if(fish.collide(Nemo)){
    health = health-2
    fish.destroyEach()
    hrtm.play();
    
  }


  if(shark.collide(Nemo)){
    health = health-2
    shark.destroyEach()
    hrtm.play();
  }


  if(seahorse.collide(Nemo)){

    health = health-2
    seahorse.destroyEach()
    hrtm.play();
  }


  if(turtle.collide(Nemo)){
    health = health-2
    turtle.destroyEach()
    hrtm.play();
  }



      Nemo.visible = true;
      health1.visible = true;
      health2.visible = true;
      health3.visible = true;

  //speed

  if (World.frameCount % 100 ==0){
  speed = speed+1;
  }


  GameOver.visible = false;
  gmover.visible=false;
  start.visible = false;





  //mobilty to nemo

  if(keyDown("up_arrow")&& Nemo.y>0){
    Nemo.y =Nemo.y -10
  }
  if(keyDown("down_arrow")&& Nemo.y<470){
    Nemo.y = Nemo.y +10
  }  


  //random obstacle

  var select_obstacle = Math.round(random(1,4));
    
    if (World.frameCount % 100 == 0) {
      if (select_obstacle == 1) {
      obstacle_1();
      } else if (select_obstacle == 2) {
        obstacle_2();
      } else if (select_obstacle == 3) {
        obstacle_3();
      } else {
      obstacle_4();
      }
    }



  var select_obstacle2 = Math.round(random(1,4));
    if (World.frameCount % 100 == 0) {
      if (select_obstacle2 == 1) {
      obstacle_1();
      } else if (select_obstacle2 == 2) {
        obstacle_2();
      } else if (select_obstacle2 == 3) {
        obstacle_3();
      } else {
      obstacle_4();
      }
    }

  //removed health if collide



  if(health<6 && health == 4){
  health3.visible = false;


  }






  if(health<4 && health ==2){
    health2.visible=false;

  health3.visible=false;


    }

    

  if(health<2 && health ==0){
        health1.visible=false;
        health2.visible=false;
        health3.visible=false;

        gom.play();

        

    }

        

  






    }
    else{
      //gameover state
      if(health <1){

  GameOver.visible = true;
  gmover.visible = true;
      background.velocityX = 0

  //restart function
      if(mousePressedOver(gmover)){
  score=0;
  health=6;
  speed=3




  health1.visible = true;
  health2.visible = true;
  health3.visible = true;

  health1.scale = 0.03;
  health2.scale = 0.03;
  health3.scale = 0.03;

      }
      }


    } 


    drawSprites();
  if(health<7 ){

    //text for score

  fill("white");

  textSize(18);

      score = score + Math.round(getFrameRate()/60);
    text("Score: ", 900,50);

    if(health<7 && health>0){
      
  fill("white");

  textSize(18);


    text(score, 955,50);
    }
    else{
      if(health==0){
        fill("white");

  textSize(18);


    text("0", 555,50);
      }
    }

  }




  }         



  //diffrent functions needed for the game

  function obstacle_1() {
    var turtle_ = createSprite(0,Math.round(random(20, 470)), 10, 10);
  turtle_.addImage(turtleIMG);
    turtle_.velocityX = speed;
    turtle_.lifetime = 300;
    turtle_.scale = 0.10;
    turtle.add(turtle_);

  }

  function obstacle_2() {
    var fish_ = createSprite(0,Math.round(random(20, 470)), 10, 10);
    fish_.addImage(fishIMG);
    fish_.velocityX = speed;
    fish_.lifetime = 300;
    fish_.scale = 0.15;
    fish.add(fish_);
    

  }

  function obstacle_3() {
    var shark_ = createSprite(0,Math.round(random(20, 470)), 10, 10);
    shark_.addImage(sharkIMG);
    shark_.lifetime = 300;
    shark_.scale = 0.2;
    shark_.velocityX = speed;
    shark.add(shark_);

  }

  function obstacle_4() {
    var seahorse_ = createSprite(0,Math.round(random(20, 470)), 1, 1);
    seahorse_.addImage(seahorseIMG);
    seahorse_.lifetime = 300;
    seahorse_.velocityX = speed;
    seahorse_.scale = 0.17;
    seahorse.add(seahorse_);

  }



