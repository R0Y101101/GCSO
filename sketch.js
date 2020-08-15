//Create sprite objects
var car,wall;

var speed,  weight;

//our setup code
function setup() {
  //canvas size
  createCanvas(1600,400);

  //speed of car
  speed = random(55,90);

  //weight of car
  weight = random(400, 1500);
  
  //create car
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";

  //create wall
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80, 80, 80);
}

//draw function
function draw() {

  //background color
  background("black");  

  //car speed
  car.velocityX = speed;

//collide
  isColliding(car);

  drawSprites();

}

//iscolliding function
function isColliding(car) {
        
    //what happens whe collide wall and car
    if(car.collide(wall)){
  
    //calculate deformation
    var deformation = (0.5 * weight * speed * speed)/22500;
    speed=0
    
    //pick color for is good to bad
    if (deformation > 180) {
      car.shapeColor = "red";
    } else if (deformation  < 180 && deformation >100) {
      car.shapeColor = "yellow";
    } else if (deformation < 100){
      car.shapeColor = "green";
    }  
    
  
    return true;
  }

  else {

    //don't do anything
    return false;

  }

}

