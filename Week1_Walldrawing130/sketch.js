function setup() {
  createCanvas(440,440);
  
}

function draw() {
  var why=440;
  var who=400;
  var when=200;
  var nada=0;
  background(255);
  //Circles
  strokeWeight (10);
  noFill();
  ellipse(PI,220,320,440,50,0);
  ellipse(440,220,320,440,PI);
  ellipse(0,0,440,440,PI);
  ellipse(220,440,440,220,PI);
  
  //Grid
  strokeWeight(2);
  line(40,0,40,440);
  line(80,0,80,440);
  line(120,0,120,440);
  line(160,0,160,440);
  line(200,0,200,440);
  line(240,0,240,440);
  line(280,0,280,440);
  line(320,0,320,440);
  line(360,0,360,440);
  line(400,0,400,440);
  line(0,40,440,40);
  line(0,80,440,80);
  line(0,120,440,120);
  line(0,160,440,160);
  line(0,200,440,200);
  line(0,240,440,240);
  line(0,280,440,280);
  line(0,320,440,320);
  line(0,360,440,360);
  line(0,400,440,400);
  line(0,440,440,440);
}