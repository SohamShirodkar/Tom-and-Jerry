
function preload() {
bg=loadImage("images/garden.png")
Tom=loadAnimation("images/cat1.png")
Tom1=loadAnimation("images/cat2.png", "images/cat3.png")
Tom2=loadAnimation("images/cat4.png")
Jerry1=loadAnimation("images/mouse1.png")
Jerry2=loadAnimation("images/mouse2.png", "images/mouse3.png")
Jerry3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
   cat=createSprite(900, 600)
   cat.addAnimation("1", Tom)
   cat.scale=0.2
   Mouse=createSprite(200, 600)
   Mouse.addAnimation("2", Jerry1)
   Mouse.scale=0.15
}

function draw() {

    background(bg);
   if(cat.x-Mouse.x<(cat.width-Mouse.width)/2){
       cat.velocityX=0
       cat.x=300
       cat.addAnimation("Wow", Tom2)
       cat.changeAnimation("Wow")
       cat.scale=0.1
       Mouse.addAnimation("ok", Jerry3)
       Mouse.changeAnimation("ok")
       Jerry.scale=0.1
   }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("soham", Tom1)
    cat.changeAnimation("soham")
    Mouse.addAnimation("K", Jerry2)
    Mouse.changeAnimation("K")
}


}
