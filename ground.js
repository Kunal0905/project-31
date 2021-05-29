class Ground{
    constructor(){
      var op = {
       isStatic: true,
       restitution: 0.5
      }
      this.body = Bodies.rectangle(400,580,800,15,op);
      World.add(world,this.body);
    }
     display(){
       rectMode(CENTER)
       var pos = this.body.position;
       rect(pos.x,pos.y,800,15);
     }
   }