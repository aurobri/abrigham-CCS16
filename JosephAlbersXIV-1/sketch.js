function setup() {
  createCanvas (400,400);
}

function draw() {
  background(255);
  //Upper left square
  //BIG:
  noStroke();
  fill(157,47,69);
  rect (20,20,180,180);
  //Small
  noStroke();
  fill(24,44,79);
  rect (110,110,90,90);
  //Upper Right square
  //BIG
  noStroke();
  fill(188,137,120);
  rect (200,20,180,180);
  //Small
  noStroke();
  fill(77,136,139);
  rect (200,110,90,90);
  //Lower Right square
  //Big
  noStroke();
  fill(180,104,95);
  rect (200,200,180,180);
  //Small
  noStroke();
  fill(63,108,120);
  rect (200,200,90,90);
  //Lower Left square
  //BIG
  noStroke();
  fill(178,72,88);
  rect (20,200,180,180);
  //Small
  noStroke();
  fill(29,65,108);
  rect (110,200,90,90);
}