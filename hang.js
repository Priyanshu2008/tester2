class SlingShot{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        
        this.bodyB = bodyB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }  

    display(){
    stroke("black") 
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointA.x,this.sling.pointA.y)
    }

}