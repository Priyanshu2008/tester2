class Pink {
    constructor(x,y,radius) {
      var options={
       isStatic: false,
       restitution:0,
       density:1.2,
      friction:0



      
      }
      
    
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius;
     
      World.add(world, this.body);
    }
    display(){
         var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
    ellipse(pos.x, pos.y,this.r,this.r);
    }
  };