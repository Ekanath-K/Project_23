var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Image("package.png")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);

	var boxPosition = width/2 - 100;
	var boxY = 610;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
 

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 20 , {isStatic:true} );
	

	 World.add(world, ground);
	 
	box1 = new Block(boxPosition + 100, boxY + 45, 200, 20);
	box2 = new Block(boxPosition + 200, boxY, 20, 200);
	box3 = new Block(boxPosition + 30 - 20, boxY, 20, 200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  helicopterSprite.depth = packageSprite.depth;
  helicopterSprite.depth += 1;
  
  helicopterSprite.display();
  packageSprite.display();
  

  fill("Red");
  box1.display();
  box2.display();
  box3.display();

  fill("Brown");
  rect(ground.position.x, ground.position.y, width, 40)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === 32) {
	 Matter.Body.setStatic(packageBody, false);
	
  }
}

//add Matter.Body.setTranslate



