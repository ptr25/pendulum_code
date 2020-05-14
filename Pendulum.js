class Pendulum{
   constructor (pointA,bodyB){
       var options ={
     pointA : pointA,
     bodyB : bodyB,
     stiffness : 0.2
     }
     this.pointA = pointA;
     this.pendulum = Matter.Constraint.create(options);
     World.add(world,this.pendulum);
}
display(){
    var pointA = this.pointA;
    var pointB = this.pendulum.bodyB.position;
    strokeWeight(6);
    stroke("grey");
    line (pointA.x,pointA.y,pointB.x,pointB.y);
 }
}