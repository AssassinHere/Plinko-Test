const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var bar1, bar2, bar3, bar4, bar5, bar6;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 800, 800, 50);
  bar1 = new Ground(40, 790, 70, 10);
  bar2 = new Ground(120, 790, 70, 10);
  bar3 = new Ground(200, 790, 70, 10);
  bar4 = new Ground(280, 790, 70, 10);
  bar5 = new Ground(360, 790, 70, 10);
  bar6 = new Ground(440, 790, 70, 10);

  for(var k = 0; k <= width; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 20; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,150));
  }

  for (var j = 5; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,250));
  }

  for (var j = 20; j <=width; j=j+50) {
  plinkos.push(new Plinko(j,350));
  }

   for (var j = 5; j <=width-10; j=j+50) {
  plinkos.push(new Plinko(j,450));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
   
  ground.display();

  bar1.display();
  bar2.display();
  bar3.display();
  bar4.display();
  bar5.display();
  bar6.display();

  //falling of particles
  if(frameCount%40===0){

   particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
 }

 //particles
 for(var t = 0; t < particles.length; t++){
   particles[t].display();
 } 


 //plinkos
 for (var j = 0; j < plinkos.length; j++) {
    
   plinkos[j].display();
   
 }


  //divisions
 for(var k = 0; k < divisions.length; k++){
   divisions[k].display();
 } 

  drawSprites();
}