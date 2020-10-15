class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'restitution':0.5,
            'friction':0,
            'density':0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed <3){
      var pos =this.body.position;
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
      rect(0,0, this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push()
      this.visibility = this.visibility -5;
      pop()
        }
    }

    score(){
      if (this.Visiblity < 0 && this.Visibility > -1005){
        score++;
      }
    }
  };