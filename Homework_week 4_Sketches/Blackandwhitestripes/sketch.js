function setup() {
  createCanvas(700,700);
  background(0); 
  noFill();
}

function draw() {
  stroke(255);
  for (var i=0; i<700; i+=50){
    beginShape(LINES);
    vertex(700, i);
    vertex(0, i);
    vertex(0, i);
    vertex(700, i);
    endShape();
  }
  stroke(255);
  for (var i=15; i<700; i+=50){
    beginShape(LINES);
    vertex(700, i);
    vertex(0, i);
    vertex(0, i+700);
    vertex(700, i+700);
    endShape();
  }
}