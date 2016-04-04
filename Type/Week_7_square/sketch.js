var waveLengthOne = 175;
var waveLengthTwo = 75;
var pointCount = 0;
var angle = 1.0;
var amplitude = 200;
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  if(pointCount > 1000){
    noLoop();
  }
  frameRate (50)
  background(0);
  noFill();
  strokeWeight(1);
  translate(width/2, height/2); //placement
  beginShape();
    for(var i=0; i < pointCount; i++){
    angle = i / waveLengthOne * TWO_PI;
    var y = sin(angle)* amplitude; 
    
    angle = i / waveLengthTwo * TWO_PI;
    var x = cos(angle)* amplitude;
    stroke(x*255, y*255, 255);
    rect(x, y, 100, 100);
    }
  endShape();
  pointCount++;
}