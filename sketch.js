
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var rect1;



function preload()
{
	
}

function setup() {
var canvas = createCanvas(1200, 800);
engine = Engine.create();
    world = engine.world;

  rect1 = new Rect(800,700,15,180);
  rect2 = new Rect(900,780,180,15);
	rect3 = new Rect(1000,700,15,180);
  ground = new Ground(600,790,1200,15);
  paper = new Paper(100,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
rect1.display();
rect2.display();
rect3.display();
ground.display();
paper.display();


  drawSprites();
 
}



