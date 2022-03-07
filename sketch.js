const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var cannonball;
var canvas, angle, tower, ground, cannon;
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle=15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, {isStatic:true});
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, {isStatic:true});
  World.add(world, tower);
  cannon= new Cannon(180,110,130,100,angle);
  cannonball= new cannonBoll(cannon.x,cannon.y)
 
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
  push();
  fill("brown")
rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();
  
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
  cannon.display();
  cannonball.display();
}
