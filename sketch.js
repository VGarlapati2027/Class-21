//Created a ball that moves when arrows are pressed

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  //used createImg to add image
  //created a button that makes the ball turn right
  button1 = createImg("right.png");
  button1.position(320,50);
  button1.size(50,50);
  button1.mouseClicked(hForce);
  //created a button that makes the ball go up
  
  button2 = createImg("up.png");
  button2.position(80,50);
  button2.size(50,50);
  button2.mouseClicked(vForce);
  //created walls, ceiling, and a ground
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  // created the ball
  var ball_options = {
    restitution : 1,
  }
 ball = Bodies.circle(200,200,5,ball_options);
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,5);
}
// the function that makes the ball go to the right
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0}) 
}
// the function that makes the ball go up
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}) 
}
