let backgroundImg;
let catidle,cat1,catend,cat;
let mouseidle,mouse1,mouseend,mouse;
function preload() {
    backgroundImg=loadImage("images/garden.png");
    catidle=loadAnimation("images/cat1.png");
    cat1=loadAnimation("images/cat2.png","images/cat3.png");
    catend=loadAnimation("images/cat4.png");
    mouseidle=loadAnimation("images/mouse1.png");
    mouse1=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseend=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(800,800);
    cat = createSprite(700,730);
    cat.addAnimation("cidle",catidle);
    cat.addAnimation("cmoving", cat1);
    cat.addAnimation("cover",catend);
    cat.scale = 0.06;
    mouse = createSprite(200,730);
    mouse.addAnimation("midle",mouseidle);
    mouse.addAnimation("mmoving",mouse1);
    mouse.addAnimation("mover",mouseend);
    mouse.scale=0.06;
}

function draw() {

    background(backgroundImg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.changeAnimation("cover");
        mouse.changeAnimation("mover");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.changeAnimation("cmoving");
      mouse.changeAnimation("mmoving");
  }


}
