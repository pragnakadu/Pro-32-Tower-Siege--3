const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world

var ground
var box1 , box2 , box3 , box4 , box5 , box6, box7 , box8
var box9 , box10 , box11 , box12 , box13 , box14 , box15
var box16 

var box17 , box18 , box19 , box20 , box21 , box22 , box23 , box24 , box25 , box26
var box27 , box28 , box29 , box30
var polygon, slingshot
var polygonImg
var stand , stand2

var score = 0

function preload(){
     polygonImg = loadImage("polygon.png")
     
}

function setup(){
 var canvas = createCanvas(1200,800);

     engine = Engine.create();
     world = engine.world;
     Engine.run(engine)

     stand = new Stand(400,360,280,15)
     ground = new Ground(500,790,1500,15)
     
     box1 = new Box(350,350,30,50)
     box2 = new Box(370,350,30,50)
     box3  = new Box(390,350,30,50)
     box4= new Box(410,350,30,50)
     box5 = new Box(430,350,30,50)
     box6 = new Box(450,350,30,50)
     box7 = new Box(470,350,30,50)

     box8 = new Box (365,320,30,50)
     box9 =  new Box(385,320,30,50)
     box10 = new Box (405,320,30,50)
     box11 = new Box (425,320,30,50)
     box12 = new Box (445,320,30,50)
    

     box13 = new Box(380,290,30,50)
     box14 = new Box(400,290,30,50)
     box15 = new Box(420,290,30,50)

     box16 = new Box(400,260,30,50)



     stand2 = new Stand(900,700,280,15)
     box17 = new Box(880,690,30,50)
     box18 = new Box(860,690,30,50)
     box19 = new Box(900,690,30,50)
     box20 = new Box(920,690,30,50)
     box21  = new Box(940,690,30,50)
     box22= new Box(960,690,30,50)
     box23 = new Box(860,690,30,50)

     box24 = new Box(900,650,30,50)
     box25= new Box(920,650,30,50)
    box26 = new Box(940,650,30,50)
    box27 = new Box(880,650,30,50)
    box28 = new Box(860,650,30,50)

    box29 = new Box(900,610,30,50)
    box30 = new Box(920,610,30,50)
    box31 = new Box(880 , 610 , 30 ,50)

    box32 = new Box(900,570,30,50)





     
     //Polygon holder with slings
     polygon = Bodies.circle(50,100,20) 
     World.add(world,polygon)
     slingshot = new Slingshot(this.polygon , {x:800 , y:150});

}

function draw(){
     
     background("grey")
     fill("Yellow")
     textSize(30)
     text("Score:"+ score , 100,40)
     
     fill("pink")
     textSize(40)
     text ("Press 'Space key' to get a second chance!!",400,30)
     ground.display()
     stand.display()
     box1.display()
     box2.display()
     box3.display()
     box4.display()
     box5.display()
     box6.display()
     box7.display()
     box8.display()

     box9.display()
     box10.display()
     box11.display()
     box12.display()

     box13 .display()
     box14.display()
     box15.display()

     box16.display() 



     stand2.display()

     box17.display()
     box18.display()
     box19.display()
     box20.display()
     box21.display()
     box22.display()
     box23.display()
     box24.display()
     box25.display()
     box26.display()
     box27.display()
     box28.display()
     box29.display()
     box30.display()
     box31.display()
     box32.display()

     imageMode(CENTER)
     image(polygonImg, polygon.position.x , polygon.position.y , 55 , 55)
     
     slingshot.display()

     
     
     //calling the score function for the box
     box1.score();
     console.log(score)
     box2.score();
     box3.score();
     box4.score();
     box5.score();
     box6.score();
     box7.score();
     box8.score();
     box9.score();
     box10.score();
     box11.score();
     box12.score();
     box13.score();
     box14.score();
     box15.score();
     box16.score();
     box17.score();
     box18.score();
     box19.score();
     box20.score();
     box21.score();
     box22.score();
     box23.score();
     box24.score();
     box25.score();
     box26.score();
     box27.score();
     box28.score();
     box29.score();
     box30.score();
     box31.score();
     box32.score();

}


function mouseDragged(){
     Matter.Body.setPosition(this.polygon,{ x :mouseX , y : mouseY})
}

function mouseReleased(){
     slingshot.fly()
}

function keyPressed(){
     if(keyCode === 32)
     {
         slingshot.attach(this.polygon)
     }
 }
