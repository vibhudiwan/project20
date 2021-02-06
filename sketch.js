var car,wall,speed,weight,deformation ; 

function setup() {
  createCanvas(800,400);
  car=createSprite(100,100, 50, 50);
  wall=createSprite(700,100,30,150);
  

}

function draw() {
  background(255,255,255); 
  text("PRESS SPACE TO TEST",400,200);
  speed=Math.round(random(40,90));
  weight=Math.round(random(400,1500)); 
  
  if(keyDown("space")){
    car.velocityX=speed;
    deformation=0.5*weight*speed*speed/22500;
  }

    car.depth=car.depth+1;
    
  if (isTouching(car,wall))  {
    
    
    car.velocityX=0;
    console.log(deformation);
    
    if (deformation<101){
     car.shapeColor="green";
     car.velocityX=0;
    
    }
    if (deformation<181 && deformation>101){
      car.shapeColor="yellow";
      car.velocityX=0;
    

    }
    if (deformation>181){
      car.shapeColor="red";
      car.velocityX=0;
    
     
    }
  
    
    car.x=660;
   
   
  }
    
    
    
  
  drawSprites();
}  


function isTouching(car,wall){
  if (wall.x - car.x < wall.width/2 + car.width/2 && car.x - wall.x < car.width/2 + wall.width/2 && wall.y - car.y < car.height/2 + wall.height/2 && car.y - wall.y < car.height/2 + wall.height/2) {
 
    return true;
}
else {
    return false;
} 
}

