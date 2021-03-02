var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edgeSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
    box1=createSprite(50,380,70,20);
    box1.shapeColor="red";

    box2=createSprite(150,380,70,20);
    box2.shapeColor="blue";

    box3=createSprite(250,380,70,20);
    box3.shapeColor="green";

    box4=createSprite(350,380,70,20);
    box4.shapeColor="yellow";

    //create box sprite and give velocity
    ball=createSprite(200,200,30,30);
    
     
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
   ball.x=World.mouseX;
   ball.y=World.mouseY;

   if(keyDown("right_arrow")){
    ball.x = ball.x + 3;
  }
  

if(keyDown("left_arrow")) {
ball.x = ball.x -3;
}

if(keyDown("up_arrow")){
  ball.y = ball.y - 3;
}

if(keyDown("down_arrow")){
 ball.y = ball.y + 3
}
      
    if(ball.isTouching(box1)){
        ball.shapeColor="red";
        music.play();
     }

    if(ball.isTouching(box2)){
        ball.shapeColor="blue";
        music.play();
    }
    if(ball.isTouching(box3)){
        ball.shapeColor="green";
        music.play();
    }

    if(ball.isTouching(box4)){
        ball.shapeColor="yellow";
        music.play();
    }
    drawSprites();
}
