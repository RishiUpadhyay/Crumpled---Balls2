
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//line1 = new Dustbin(1115,650,20,170,"lime");
	//line2 = new Dustbin(880,650,20,170,"lime");
	line3 = new Dustbin(998,680,215,500,"lime");
	ground = new Ground(600,height,1200,20);
	paperball = new Paper(120,680,50);
	
	var render = Render.create({
	 element: document.body,
	 engine: engine,
	 options: {
		 width: 1600,
		height: 700,
		wireframes: false
	 } 
	 })

	

	Engine.run(engine);

    Render.run(render)
}


function draw() {
  rectMode(CENTER);
  background(230);
    Engine.update(engine);
  
    //line1.display();
	//line2.display();
	line3.display();
	ground.display();
	paperball.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:105,y:-100})
	}
}