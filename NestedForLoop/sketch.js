function setup() {
  createCanvas (windowWidth, windowHeight)
  background (133)
}

function draw() {
//first loop across the x-axis
  for(var x=0; x < windowWidth; x++){
	//and also across the y-axis
	  for(var y=0; y < windowHeight; y++){
	  ellipse(x*50,y*50, 100,100);
    }
  }
}