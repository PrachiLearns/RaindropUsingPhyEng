const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var raindrops = [];
function setup(){
    frameRate(15);
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    for(var raindrop=0;raindrop<=200;raindrop++){
    raindrops.push(new biggerraindrops(10));  
    raindrops.push(new smallerraindrops(10));}
}
 
function draw(){
  Engine.update(engine);
  background(255);
    for (var i = 0; i < raindrops.length; i++) {
        raindrops[i].display();
    }
    
}