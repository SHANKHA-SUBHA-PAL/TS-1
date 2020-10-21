
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const circle = Matter.Bodies.circle;

var engine,world;
var plat1,plat2,plat3;
var striker,strikerImg;
function preload(){

strikerImg = loadImage("image.jpg");

}

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

plat1 = new Ground(300,450,200,5);
plat2 = new Ground(550,300,200,5);
plat3 = new Ground(800,150,200,5);

var options = {

restituition:0.3,
density:1.0

}
fill("Red")
striker = Bodies.circle(90,250,20,options);
World.add(world,striker);
imageMode(CENTER);
image(strikerImg,striker.position.x,striker.position.y,40,40);

slingShot = new SlingShot(this.striker,{x:100,y:200});
}

function draw() {
  background("White"); 
  Engine.update(engine); 
  plat1.display();
  plat2.display();
  plat3.display();
  slingShot.display();
  
  
}