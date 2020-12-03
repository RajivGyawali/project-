class Paper {
constructor(x, y,radius){
   var options = {
      restitution:0.3,
      density:0.5,
      friction:1.2,
   }
   this.image = loadImage("paper.png")
   this.radius=radius
   this.body = Bodies.circle(x,y,radius,options)
   World.add(world,this.body)
  }
  display(){
  var pos = this.body.position;
   push();
   translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,0, 0, this.radius,this.radius);
   pop();
 
}
}