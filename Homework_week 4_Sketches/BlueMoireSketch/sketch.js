function setup() {
  createCanvas(1000,500); //rectangle
  background(255);//white
  stroke(100,149,237);//light blue
  noFill();
  strokeWeight(0.1)
}

function draw() {
  for(var i=10; i<=1000; i+=75){
    for(var j=10; j<=1000; j+=75){ //Nestled loop
      beginShape(QUADS);
      vertex(i, 500);
      vertex(i, 0);
      vertex(j, 500);
      vertex(j, 0)
      endShape();
    }
  }
}