var canvas;
var music;
var red
var blue
var yellow
var purple
var colorswitch
var edges 
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites()
    
    //create 4 different surfaces
    red = createSprite(100,550,150,10)
    red.shapeColor = ("red")
    blue = createSprite(280,550,150,10)
    blue.shapeColor = ("blue")
    yellow = createSprite(470,550,150,10)
    yellow.shapeColor = ("yellow")
    purple = createSprite(670,550,150,10)
    purple.shapeColor = ("purple")
    colorswitch = createSprite(200,200,100,100)
    colorswitch.velocityX = 5
    colorswitch.velocityY = -5
   

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites()
    colorswitch.bounceOff(edges)
    if(colorswitch.isTouching(red)){
        colorswitch.shapeColor = ("red")
    }
      if(colorswitch.isTouching(blue)){
       colorswitch.shapeColor = ("blue")
    }
    if(colorswitch.isTouching(yellow)){
        colorswitch.shapeColor = ("yellow")
     }
     if(colorswitch.isTouching(purple)){
        colorswitch.shapeColor = ("purple")
     }
 
 



    //add condition to check if box touching surface and make it box
    drawSprites()
}

