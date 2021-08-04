class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,

            pointB: pointB,
            stiffness: 0.02,
            length :7
        }

        this.pointB = pointB
        this.llaunch =  Constraint.create(options)
        World.add(world, this.llaunch)
    }
    attach(body){

        this.llaunch.bodyA = body
    }
    fly(){
        this.llaunch.bodyA=null
    }
  
   display(){
   
			
		
            if(this.llaunch.bodyA){
                var pointA = this.llaunch.bodyA.position
                var pointB = this.pointB
                strokeWeight(4)
                line(pointA.x , pointA.y , pointB.x , pointB.y)
                
            }
	}
   }
