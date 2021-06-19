class Box{

    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        var options={
            isStatic:false,
            restitution:0.1
        }

        this.body=Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)

    }

    display(){
        push()
        fill("white")
        rect(this.x,this.y,this.width,this.height)
        pop()
    }
}