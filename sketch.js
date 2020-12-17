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

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
dog = createSprite(200,200,5,25);
dog.addImage(dog_img);
dog.scale = 0.2;


}


function draw() {  
background(46,139,87);



if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(Hdog_img);
}

  drawSprites();
  //add styles here

  textSize(30);
  fill("black");
  text("milk bottles :",25 ,25);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  } else{
   x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}