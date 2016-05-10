//Final project scetch, "If I wore Andy Warhol" Aurora Brigham Creative Coding 2016. 
//If I were Andy Warhol Rihanna would be my muse. Rihanna is first of all (in my opinion) one of the most
//interestingly beautifull woman today. She also has a vounerable quality, talent and attraction to scandal,
//which is something Warhol often was enchanted by in his subjects. Rihanna has been through many ordeals, 
//and most of them have been played out in front of the public eye, as many of Warhols subjects were 
//surounded by scandal, and experienced their lowest moments in front of the world. 

var face;
var hair; 
var lips;
var numRihanna = 3; //three layers to create the screen printing effect that Warhol used on his images


//Loading the image of Andy Warhol "muse" Rihanna
function preload(){
  face = loadImage('assets/Rihanna_full.png');
  hair = loadImage('assets/Rihanna_hair.png'); //I used photoshop to separate the three parts of the image
  lips = loadImage('assets/Rihanna_lips.png'); //and created three separate .png files. 
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(random(255),random(255),random(255)); 
  
  tint(random(255),random(255),random(255),150); //Is there a way to ensure they fall into a triadic color scheme like we learned is class?? 
  for(var i=0; i < numRihanna; i++){
    //tint(i*20,0,0,150); This chages the color of each image in each loop. I found it unnecceccary. 
    imageMode(CENTER);
    image(face,i*5,0,image.width/2,image.height/2,windowWidth/2,windowHeight/2,938,898); //placing the image in the middle and resizing 
 //it proportionate to the image size. 
  }
   tint(random(255),random(255),random(255),150);
   for(var j=0; j < numRihanna; j++){
    //tint(0,j*20,0,150);
    imageMode(CENTER);
    image(hair,j*5,0,image.width,image.height,windowWidth/2,windowHeight/2,938,898); //The separate images were created of one file
  //to make the placement easy for the "bodyparts"
   }
    tint(random(255),random(255),random(255),150);
   for(var k=0; k < numRihanna; k++){
    //tint(0,0,k*20,150);
    imageMode (CENTER);
    image(lips,k*5,0,image.width,image.height,windowWidth/2,windowHeight/2, 938,898);
  }
}
  