var angle = 0.0;

function setup(){
  createCanvas(600, 600);
  frameRate(30);
}
function draw() {
  noStroke();
  translate(width/2,height/2);
  angle += 0.1;
  rotate(angle);
  from = color(153,153,255);
  to = color(255,153,255)
  interA = lerpColor(from, to, 0.60);
  interB = lerpColor(from, to, 0.80);
  for(var i =0; i < 10; i++){
    push();
    rotate(TWO_PI * i / 10);
    fill(from);
    rect(frameCount % (width/2),0,5,5);
    fill(to);
    rect (frameCount % (width/3),0,10,10);
    fill (interA);
    ellipse(frameCount % (width/4),0,5,5);
    fill (interB);
    ellipse(frameCount % (width/5),0,10,10);
    pop();
  }
}