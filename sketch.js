const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var ground,base1,base2,poly,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var boxx1,boxx2,boxx3,boxx4,boxx5,boxx6;
var count = 0;

var gameState = "onSling";

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  poly = new Poly(100,200)

  box1 = new box(250,200,40,40);
  box1.Count();
  box2 = new box(290,200,40,40);
  box2.Count();
  box3 = new box(330,200,40,40);
  box3.Count();
  box4 = new box(370,200,40,40);
  box4.Count();
  box5 = new box(410,200,40,40);
  box5.Count();
  box6 = new box(270,170,40,40);
  box6.Count();
  box7 = new box(310,170,40,40);
  box7.Count();
  box8 = new box(350,170,40,40);
  box8.Count();
  box9 = new box(390,170,40,40);
  box9.Count();
  //here
  box10 = new box(290,145,40,40);
  box10.Count();
  box11 = new box(330,145,40,40);
  box11.Count();
  box12 = new box(370,145,40,40);
  box12.Count();
  box13 = new box(310,125,40,40);
  box13.Count();
  box14 = new box(350,125,40,40);
  box14.Count();
  box15 = new box(330,100,40,40);
  box15.Count();

  boxx1 = new boxx(530,180,40,40);
  boxx1.Count();
  boxx2 = new boxx(570,180,40,40);
  boxx2.Count();
  boxx3 = new boxx(610,180,40,40);
  boxx3.Count();
  boxx4 = new boxx(650,180,40,40);
  boxx4.Count();
  boxx5 = new boxx(550,150,40,40);
  boxx5.Count();
  boxx6 = new boxx(590,150,40,40);
  boxx6.Count();
  boxx7 = new boxx(630,150,40,40);
  boxx7.Count();
  boxx8 = new boxx(570,120,40,40);
  boxx8.Count();
  boxx9 = new boxx(610,120,40,40);
  boxx9.Count();
  boxx10 = new boxx(590,90,40,40);
  boxx10.Count();

  base2 = new Ground(600,200,220,20)
  base1 = new Ground(340,270,250,20);
  ground = new Ground(400,390,800,20);

  slingshot = new Slingshot(poly.body,{x:150,y:200});
  //console.log(box1);
  
}

function draw() {
  background(180,180,180);

  textSize(15);
  text("Score: " + count, 650,30);
  text("Press SPACE to play again", 300,320);
  Engine.update(engine); 

  poly.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  boxx1.display();
  boxx2.display();
  boxx3.display();
  boxx4.display();
  boxx5.display();
  boxx6.display();
  boxx7.display();
  boxx8.display();
  boxx9.display();
  boxx10.display();

  ground.display();
  base1.display();
  base2.display();

  slingshot.display();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(poly.body, {x: 150 , y: 200});
    slingshot.attach(poly.body);
    gameState = "onSling";
  }
}