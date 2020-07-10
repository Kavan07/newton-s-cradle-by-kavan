const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    
}

function setup(){
	var canvas = createCanvas(1200,800);
    engine = Engine.create();
	world = engine.world;
	b1 = new ball(600, 180, 50);
	b2 = new ball(650, 180, 50);
	b3 = new ball(740, 150, 50);
	b4 = new ball(550, 180, 50);
	b5 = new ball(500, 180, 50);
	
	chain1 = new Chain(b1.body,{x : 600, y : 130});
	chain2 = new Chain(b2.body,{x : 700, y : 130});
	chain3 = new Chain(b3.body,{x : 800, y : 130});
	chain4 = new Chain(b4.body,{x : 500, y : 130});
	chain5 = new Chain(b5.body,{x : 400, y : 130});

	topsprite = createSprite(600, 120, 800, 50);
	topsprite.shapeColor = "red";

	bottomsprite = createSprite(600, 420, 800, 50);
	bottomsprite.shapeColor = "red";

	rightsprite = createSprite(320, 270, 40, 300);
	rightsprite.shapeColor = "green";

	leftsprite = createSprite(880, 270, 40, 300);
	leftsprite.shapeColor = "green";
}


function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(2);
    b1.display();
	chain1.display();
	strokeWeight(2);
	b2.display();
	chain2.display();
	strokeWeight(2);
	b3.display();
	chain3.display();
	strokeWeight(2);
	b4.display();
	chain4.display();
	strokeWeight(2);
	b5.display();
	chain5.display();
	drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(b3.body,{x : mouseX, y : mouseY});
}
