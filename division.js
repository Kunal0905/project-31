class Division{
    constructor(x,y){
      var op = {
       isStatic: true,
       restitution: 0.5
      }
      this.body = Bodies.rectangle(x,y,10,300,op);
      World.add(world,this.body);
    }
     display(){
       rectMode(CENTER)
       var pos = this.body.position;
       rect(pos.x,pos.y,10,300);
     }
   }