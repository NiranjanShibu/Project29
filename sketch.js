const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var box6, box7, box8, box9;
var box10, box11, box12;
var box13, box14;
var box15;
var box16, box17, box18, box19;
var box20, box21, box22;
var box23, box24;
var box25;
var platform, platform2, ground;
var chain, stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    platform = new Ground(width/2, 460, 400, 8);
    platform2 = new Ground(930, 300, 260, 8);

    stone = new Stone(250, 300, 40);

    box1 = new Block(600,455,40,40);
    box2 = new Block(645,455,40,40);
    box3 = new Block(555,455,40,40);
    box4 = new Block(690,455,40,40);
    box5 = new Block(510,455,40,40);

    box6 = new Block(623,375,40,40);
    box7 = new Block(668,375,40,40);
    box8 = new Block(578,375,40,40);
    box9 = new Block(533,375,40,40);

    box10 = new Block(557,330,40,40);
    box11 = new Block(603,330,40,40);
    box12 = new Block(648,330,40,40);

    box13 = new Block(625,285,40,40);
    box14 = new Block(580,285,40,40);

    box15 = new Block(610,240,40,40);

    box16 = new Block(955,255,40,40);
    box17 = new Block(1000,255,40,40);
    box18 = new Block(910,255,40,40);
    box19 = new Block(865,255,40,40);

    box20 = new Block(888,210,40,40);
    box21 = new Block(933,210,40,40);
    box22 = new Block(978,210,40,40);

    box23 = new Block(910,165,40,40);
    box24 = new Block(955,165,40,40);

    box25 = new Block(930,120,40,40);

    chain = new Chain(stone.body,{x:250, y:300});
}

function draw(){
    background("gray");
    Engine.update(engine);

    fill("black");
    strokeWeight(1);
    text("DRAG AND RELEASE THE HEXAGON TO LAUNCH IT TOWARDS THE BLOCKS!", 370, 45);

    strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();

    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();
    box22.display();

    box23.display();

    box24.display();
    box25.display();

    ground.display();
    platform.display();
    platform2.display();
    chain.display();    
    stone.display();
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});

}


function mouseReleased(){
    chain.fly();
}