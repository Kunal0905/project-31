class Particle{
    constructor(x,y){
      var op = {
       restitution: 0.5
      }
      this.body = Bodies.circle(x,y,7,op);
      World.add(world,this.body);
    }
     display(){
       push()
       ellipseMode(RADIUS)
       var pos = this.body.position;
       fill(random(0,255),random(0,255),random(0,255))
       ellipse(pos.x,pos.y,7);
       pop()
     }
   }