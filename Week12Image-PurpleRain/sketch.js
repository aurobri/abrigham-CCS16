//Purple Rain
var prince;
var rain;
var numPrince=10;

function preload(){
  prince = loadImage('assets/prince.jpg');
  rain = loadImage('assets/rain.jpg');
}

function setup() {
  createCanvas(836,600);
}

function draw() {
  tint(127,0,255,200); //Color image Purble
  for(var i=0; i < numPrince; i++){
    tint(127,i*10,255,200);
    image(prince,i*34,0,528,600);
  }
  //Calculated the dimentions of the photos to make the width and height proportional.
  tint(127,0,255,170);
  image(rain,0,0,836,600); //Overlay rain
}