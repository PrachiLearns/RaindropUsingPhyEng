class BaseClass{
    constructor(height){
    this.height=height;
    this.x = Math.round(random(0,width));
    this.y=Math.round(random(-10,-200));
    this.body = Bodies.rectangle(this.x,this.y,3,this.height);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y, 6,this.height);
    if(pos.y >height){
      //console.log("inside if");
      //console.log(pos.y);
      pos.y=Math.round(random(-10,-200));
      //console.log("posy after"+ pos.y);
    }
  }
  
}
    
