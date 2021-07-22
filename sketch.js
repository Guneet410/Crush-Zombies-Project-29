const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var balls = [];


function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  for(var i = 0; i <= 8; i++){
    var x = random(250,450);
    var y = random(-10,100);
    b1 = new Ball(x,y);
    balls.push(b1);
   
  }
  
 jointpoint = new Base(800,150,40,20)
  


  right = new Base(700,250,250,150);
 left = new Base(100,250,250,150)
  ground = new Base(400,480,800,80)
  bridge = new Bridge(12, {x: 200, y: 150})
  Composite.add(bridge,jointpoint)

  jointLink = new Link (bridge, jointpoint.body)

}

function draw() {
  background("green");
fill("black")
 Engine.update(engine);

  bridge.show()

  fill ("brown");
  right.display();
  left.display();
 
  for(var i = 0; i < balls.length; i++){
    balls[i].display();
  }


  fill("lightblue")
  ground.display();


  
}
