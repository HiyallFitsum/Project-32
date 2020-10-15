const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function setup() {
  var canvas = createCanvas(800,600);
  canvas;
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  stand1 = new Ground(390, 305, 270, 10);
  stand2 = new Ground(790, 255, 10, 280);
  stand3 = new Ground(460, 555, 240, 10);
 
  object = new SlingObject(50,200);

  block1 = new Block(280, 285, 30, 40);
  block2 = new Block(310, 285, 30, 40);
  block3 = new Block(340, 285, 30, 40);
  block4 = new Block(370, 285, 30, 40);
  block5 = new Block(400, 285, 30, 40);
  block6 = new Block(430, 285, 30, 40);
  block7 = new Block(460, 285, 30, 40);
  block8 = new Block(490, 285, 30, 40);
  //block9 = new Block(395, 285, 30, 40);
  
  fill("red");
  block10 = new Block(310, 245, 30, 40);
  block11 = new Block(340, 245, 30, 40);
  block12 = new Block(370, 245, 30, 40);
  block13 = new Block(400, 245, 30, 40);
  block14 = new Block(430, 245, 30, 40);
  block15 = new Block(460, 245, 30, 40);
 // block16 = new Block(385, 255, 30, 40);

  fill("green");
  block17 = new Block(340, 205, 30, 40);
  block18 = new Block(370, 205, 30, 40);
  block19 = new Block(400, 205, 30, 40);
  block20 = new Block(430, 205, 30, 40);
 // block21 = new Block(355, 235, 30, 40);

  fill("blue");
  block22 = new Block(390, 165, 30, 40);

  fill("red");
  block23 = new Block(380, 530, 30, 40);
  block24 = new Block(410, 530, 30, 40);
  block25 = new Block(440, 530, 30, 40);
  block26 = new Block(470, 530, 30, 40);
  block27 = new Block(500, 530, 30, 40);
  block28 = new Block(530, 530, 30, 40);

  fill("blue");
  block29 = new Block(410, 490, 30, 40);
  block30 = new Block(440, 490, 30, 40);
  block31 = new Block(470, 490, 30, 40);
  block32 = new Block(500, 490, 30, 40);

  fill("green");
  block33 = new Block(460, 450, 30, 40);

  ground = new Ground(width/2,height-20,width,10);

  fill("gray");
  slingShot = new SlingShot(object.body, {x:100,y:200})

}

function draw() {
  background(50);  
  Engine.update(engine);

  text("SCORE: "+score,650,40);

  stand1.display();
  stand2.display();
  stand3.display();

  object.display();

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block7.display();
  block8.display();
 // block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  //block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  //block21.display();
  block22.display();

  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  //block16.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  //block21.display();
  block33.display();

  
  
  
  block6.score();
  block7.score();
  block8.score();
 // block9.display();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  //block16.display();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  //block21.display();
  block22.score();

  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  //block16.display();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  //block21.display();
  block33.score();


  ground.display();

  slingShot.display();

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(object.body, {x: mouseX, y: mouseY});
	}
	
	function mouseReleased(){
	slingShot.fly();
  }
  
 function keyPressed() {
    if (keyCode === 32) {
      slingShot = new SlingShot(object.body,{x:100, y:200});
      Matter.Body.setPosition(object.body, {x: 100, y:200})
      launcherObject.attach(object.body);
      slingShot = new SlingShot(object.body,{x:100, y:200});
    }
  }
  