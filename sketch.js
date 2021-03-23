
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var holder;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
cr1 = new Pink (300,450,15)
cr2 = new Pink (315,450,15)
cr3 = new Pink (330,450,15)
cr4 = new Pink (345,450,15)
cr5 = new Pink (360,450,15)

string1 = new SlingShot({x:350,y:350},cr1.body)

	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background('green');

  holder = createSprite(400,350,200,10); 
  
  cr1.display();
cr2.display();
cr3.display();
cr4.display();
cr5.display();
//fill('white')
//text(mouseX,mouseY,200,200)
  drawSprites();
  string1.display()
 
}



