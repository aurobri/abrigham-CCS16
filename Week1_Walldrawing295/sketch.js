function setup() {
  createCanvas(800,500);
}

function draw() {
  // Wall Drawing #295 (1976)
  // Six white geometric figures (outlines) superimposed on a black wall.
  background(0);
  stroke(255);
  noFill();
  strokeWeight(2);
  quad(750, 55, 350, 10, 250, 70, 650, 170);
  triangle(650, 150, 400, 200, 300, 150);
  quad(20,220,230,240, 110, 480, 650, 100);
  rect(550,250,220,220);
  quad(600, 20, 20, 10, 30, 400, 250, 100);
  quad(390, 470, 300, 270, 600, 180, 780, 230);
}