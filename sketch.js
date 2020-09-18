var car,wall;
var speed,weight;
var deformation;

function setup() 
{
  createCanvas(1600,400);
  
  speed = random(10,50);
  weight = random(100,5000);
  
  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  wall = createSprite(1300,200,10,400);
  wall.shapeColor = "grey";

  car.velocityX = speed;
}

function draw() 
{
  background(0,0,0); 
  
  if(isTouching(car,wall))
  {
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;

    if(deformation < 100)
    {
      car.shapeColor = "green";
    }

    if(deformation>=100 && deformation<180)
    {
      car.shapeColor = "yellow";
    }

    if(deformation>=180)
    {
      car.shapeColor = "red";
    }
  }
  drawSprites();
}