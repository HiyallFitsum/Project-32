class SlingObject {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.5,
      }
      this.body = Bodies.circle(x,y,20, options);
      //this.body = Bodies.polygon(x,y,10,20, options);
      //this.sides = 10;
      this.diameter = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //imageMode(CENTER);
      push();
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(pos.x,pos.y,this.diameter);
      //polygon(pos.x,pos.y,this.sides,this.diameter);
      //image(this.image, pos.x, pos.y, 40, 40);
      pop();
    }
  };