// namespacing/ adding alternate name
const Engine = Matter.Engine;//universal laws
const World = Matter.World;//universe
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let ball
let ground
let ball1
let wall

function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

  let ball_options = {
    frictionAir: 0.01,
    restitution: 1.5
  }

  ball = Bodies.circle(10,10,20, ball_options)
  World.add(world, ball)


  let ball1_options = {
    frictionAir: 0.5,
    restitution: 0.85
  }

  ball1 = Bodies.circle(300,30,40, ball1_options)
  World.add(world, ball1)


  let ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,10,ground_options)
  World.add(world, ground)

  wall = Bodies.rectangle(300,200,200,10,ground_options)
  World.add(world, wall)
}

function draw() 
{
  background(51);
  Engine.update(engine)

  ellipse(ball.position.x, ball.position.y, 30, 30)

  ellipse(ball1.position.x, ball1.position.y, 40, 40)

  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400,10)
  rect(wall.position.x, wall.position.y, 200,10)
  
}

