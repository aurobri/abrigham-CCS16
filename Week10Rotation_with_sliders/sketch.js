var angle = 0.0;
var rotationSpeed = 20;
var shapeSize = 10;

function setup(){
  createCanvas(700, 700);

  // Slider for changing speed
  spiralSlider = createSlider(1, 50, rotationSpeed);
  spiralSlider.position(100, 630);
  spiralSlider.style('width', '400px');

  // Slider for changing shapes
  sizeSlider = createSlider(1, 15, shapeSize);
  sizeSlider.position(100, 680);
  sizeSlider.style('width', '400px');

  // Slider headings 
  speedP = createElement('p', 'Change the speed!');
  sizeP = createElement('p', 'Change the size!');
}
function draw() {
  noStroke();
  var speed = spiralSlider.value();
  var newSize = sizeSlider.value();

  speedP.position(100, 600);
  sizeP.position(100, 650);
  
  frameRate(speed);
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
    rect(frameCount % (width/2),0,newSize,newSize);
    fill(to);
    rect (frameCount % (width/3),0,newSize,newSize);
    fill (interA);
    ellipse(frameCount % (width/4),0,newSize,newSize);
    fill (interB);
    ellipse(frameCount % (width/5),0,newSize,newSize);
    pop();
  }
}