var hueSpread = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  
  frameRate (10);
}

function draw() {
  var myHue = random(360);
  for (var i =0; i <7; i++){
    fill (myHue + (i*hueSpread) ,100, 100)
    rect(i* 100 + 50, height / 2, 50, 50);
  }
  
}