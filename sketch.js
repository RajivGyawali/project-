
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,200,40)
	leftdustbin = new Side(895,720,20,100)
	rightdustbin = new Side(1100,720,20,100)
	ground = new Ground(600,780,1200,20)
	dustbin = new Dustbin(1000,645,250,250)
  
}


function draw() {
  background(255);
  Engine.update(engine)

  paper.display();
  ground.display();
  leftdustbin.display();
  rightdustbin.display();
  dustbin.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:140,y:-145});
	}
}



