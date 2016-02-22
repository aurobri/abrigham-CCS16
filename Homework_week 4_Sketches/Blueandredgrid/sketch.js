function setup() {
  createCanvas(500,500);
  background(255);
  strokeWeight (2.1)
}

function draw() {
  stroke(0,0,255);
  for (var i=0; i<500; i+=10){
    beginShape();
    vertex(450, i);
    vertex(300, i);
    vertex(50, i);
    vertex(200, i);
    vertex(60, i);
    endShape();
  }
  stroke(255,0,0);
  for (var i=0; i<500; i+=10){
    beginShape();
    vertex(i, 450);
    vertex(i, 300);
    vertex(i, 50);
    vertex(i, 200);
    vertex(i, 60);
    endShape();
  }
}