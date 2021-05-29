class Plinko{
 constructor(x,y){
   var op = {
    isStatic: true,
    restitution: 0.5
   }
   this.body = Bodies.circle(x,y,7,op);
   World.add(world,this.body);
 }
  display(){
    ellipseMode(RADIUS)
    var pos = this.body.position;
    ellipse(pos.x,pos.y,7);
  }
}