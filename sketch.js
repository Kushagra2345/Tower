const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint  

function preload(){

    PolygonImg=loadImage("polygon.png")
}

function setup(){

    createCanvas(1200,700)
    engine=Engine.create()
    world=engine.world
    Engine.run(engine)

    Polygon=Bodies.circle(150,400,23,{isStatic:false,restitution:0.7})
    World.add(world,Polygon)

    ground=new Ground(600,685,1200,30);
    ground1=new Ground(950,460,240,20)
    ground2=new Ground(750,190,220,20)

    box1=new Box(700,100,30,30)

    Slingshot1=new Slingshot(this.Polygon,{x:100,y:420})
}

function draw(){

    background("black")
    textSize(30)
    fill("white")
    text("("+mouseX+","+mouseY+")",40,30)

    var pos=Polygon.position
    imageMode(CENTER)
    image(PolygonImg,pos.x,pos.y,60,60)

    ground.display()
    ground1.display()
    ground2.display()

    box1.display()
    Slingshot1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.Polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot1.fly()
}