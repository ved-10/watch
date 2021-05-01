const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var time = 0;

function preload() {
     getBackgroundImg( ) 
}



function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
       }
       

    Engine.update(engine);

    // write code to display time in correct format here
if(hour>=12){ text("Time : "+ hour%12 + " PM", 50,100); 
    }else if(hour==0){ text("Time : 12 AM",100,100); 
    }else{ text("Time : "+ hour%12 + " AM", 50,100); }


}

async function getBackgroundImg(){

    var Bground = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var Aground = await Bground.json();
    var datetime = Aground.datetime;
    var Hour  = datetime.slice(11,13);

    if(Hour>=04 && Hour<=06){
        backgroundImg = loadImage("sunrize1.png")
    }
else if(Hour>=06 && Hour<=07){
    backgroundImg = loadImage("sunrize2.png")
}
else if(Hour>=07 && Hour<=08){
    backgroundImg = loadImage("sunrize3.png")
}
else if(Hour>=08 && Hour<=09){
    backgroundImg = loadImage("sunrize4.png")
}
else if(Hour>=09 && Hour<=10){
    backgroundImg = loadImage("sunrize5.png")
}
else if(Hour>=10 && Hour<=11){
    backgroundImg = loadImage("sunrize6.png")
}
else if(Hour>=11 && Hour<=12){
    backgroundImg = loadImage("sunset7.png")
}
else if(Hour>=12 && Hour<=13){
    backgroundImg = loadImage("sunset8.png")
}
else if(Hour>=13 && Hour<=14){
    backgroundImg = loadImage("sunset9.png")
}
else if(Hour>=14 && Hour<=15){
    backgroundImg = loadImage("sunset10.png")
}
else if(Hour>=15 && Hour<=16){
    backgroundImg = loadImage("sunset11.png")
}
else if(Hour>=16 && Hour<=17){
    backgroundImg = loadImage("sunset12.png")
}
else {
    backgroundImg = ("sunset12.png")
}
}
