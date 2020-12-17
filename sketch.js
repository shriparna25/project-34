//Create variables here
var dog, happydog;
var database;
var foodS, foodStock;
var dog_img, Hdog_img;


function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  Hdog_img = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  
dog = createSprite(200,200,5,25);
dog.addImage(dog_img);
dog.scale = 0.2;


}


function draw() {  
background(46,139,87);

if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(Hdog_img);
}

  drawSprites();
  //add styles here

}



