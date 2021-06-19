class Slingshot{

    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:20,
            stiffness:0.05
        }
        this.pointB=pointB
        this.Slingshot=Constraint.create(options)
        World.add(world,this.Slingshot)
        
    }

    display(){
        if(this.Slingshot.bodyA){
            var posA=this.Slingshot.bodyA.position
    
            stroke("blue")
            line(posA.x,posA.y,this.pointB.x,this.pointB.y)
        }


    }

    fly(){
        this.Slingshot.bodyA=null;
    }
}