var helicopterIMG, helicopterSprite, packageSprite,packageIMG,floodrelief;
var packageBody,ground,floodimg,human,score;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	floodimg=loadImage("flood.PNG")
	backgroundimg=loadImage("flood background.gif")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("human.png")
	humanimg=loadImage("package.png")
	streetlampimg=loadImage("street.png");
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	backgroundSprite=createSprite(400,350,1000,4000);
	backgroundSprite.addImage(backgroundimg);
	backgroundSprite.scale=1.9;


	packageSprite=createSprite(550, 120, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.4


	

	helicopterSprite=createSprite(550, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	people()

	groundSprite=createSprite(width/2, 400, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible=false;

	floodrelief=createSprite(100,60,30,30);
	floodrelief.addImage(floodimg);
	floodrelief.scale=0.8;	


	box1=createSprite(600,300,10,80);
	box1.shapeColor=color("brown")
	box1.addImage(streetlampimg);
	box1.scale=0.5;
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopterSprite.x , 140 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 415, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);
	
		
	human=createSprite(0,380,20,20)
	human.addImage(humanimg)
	human.scale=0.6;

}


function draw() {
rectMode(CENTER);
background(0);
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y




if( packageSprite.y<141){
	packageSprite.x = helicopterSprite.x 

}

if (keyDown("left")) {
	helicopterSprite.x = helicopterSprite.x - 10;
	packageSprite.x = packageSprite.x - 10;
}


if (keyDown("right")) {
	helicopterSprite.x = helicopterSprite.x + 10;
	packageSprite.x = packageSprite.x + 10;
	packageBody.x=packageBody.x - 10;
	
}
if(human.collide(packageSprite)) {
	human.velocityX=0;
	console.log("ram ram");
}else{
	human.velocityX=4;
}
people()

keyPressed()
drawSprites();

}

function keyPressed() {	
if (keyCode === DOWN_ARROW) {
	packageBody.x = helicopterSprite.x;	
	packageBody = Bodies.circle(helicopterSprite.x , 140 , 5, {restitution:0.6, isStatic:false});	
	World.add(world,packageBody);
	Matter.Body.setStatic(packageBody,false);
	

}
}
function people(){
	
	if (frameCount % 60 === 0) {
		var human2 = createSprite(0,280, 20, 50);
			human2.addImage(humanimg);
			human2.scale = 0.6;
			//human2.x = Math.round(random(0, 540))
			human2.y = Math.round(random(400, 500))
			//console.log("Package X:" + packageSprite.x);
			//console.log("Human2 X:" + human2.x);
			//console.log("Human2 Y:" +human2.y);
		//	if(human.x >= packageSprite.x && human.y <= packageSprite.y){
		//		human.velocityX=0;
		//		console.log("ram ram");
				
		//	}

		    //if(human2.collide(packageSprite)) {
				human2.velocityX=7;
				//console.log("ram ram");
			//}else{
				//human2.velocityX=7;
			//}
		
			//console.log(human.velocityX);
			
			
			
		}
	    
		
}
	
		
