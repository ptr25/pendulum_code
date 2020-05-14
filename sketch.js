const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var pendulum,bgimg;
function preload(){
bgimg = loadImage("pendulum.png");
}

function setup() {
  createCanvas(300,600);
  engine = Engine.create();
  world = engine.world;
  pendulum = new Weight(155,375,50,50);
  chain = new Pendulum({x:155,y:195},pendulum.body);
}

function draw() {
  background(bgimg); 
  Engine.update(engine);
  pendulum.display();
  chain.display();
  textFont("phosphate");
  textSize(20);
  fill(0);
  text("DRAG THE MOUSE",35,35);
  text("TO MOVE THE PENDULUM",45,55);
}
function mouseDragged(){
  pendulum.move();
}