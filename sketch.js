const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var p1,p2;
var plink = [];
var particle;
var par = [];
var division;
var div = [];

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,600);
  ground = new Ground();
  for(var i = 80;i < 750;i += 80){
   p1 = new Plinko(i,150);
   plink.push(p1);
  }
  for(var i = 50;i < 780;i += 80){
   p2 = new Plinko(i,220);
   plink.push(p2);
  }
  for(var i = 0;i < 810;i += 160){
   division = new Division(i,430);
   div.push(division);
  }
}

function draw() {
  Engine.update(engine);
  background(0); 
  for(var i = 0;i < plink.length;i += 1){
    plink[i].display();
  }
  if(frameCount % 90 == 0){
    particle = new Particle(random(50,750),-10);
    par.push(particle);
  }
  for(var i = 0;i < par.length;i += 1){
    par[i].display();
  }
  for(var i = 0;i < div.length;i += 1){
    div[i].display();
  }
  ground.display();
  division.display();
  drawSprites();
}