//Create variables here

function preload()
{
  //load images here
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function setup() {
	createCanvas(500, 500);
  
}
display(){
  var x=80,y=100;
  imageMode(CENTER);
  image(this.image,720,220,70,70);
  if(this.foodStock!=0){
    if(i%10==0){
      x=80;
      y=y+50
    }
    image(this.image,x,y,50,50)
    x=x+30;
  }
}

function draw() { 
  background(46,139,87) 
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data)){
    lastFed=data.val
  }
}
  drawSprites();
  //add styles here
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  Food:x
}
}



