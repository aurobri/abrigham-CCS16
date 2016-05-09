function setup() {
  createCanvas(400,400); 
}

function draw(){
  background(100);
  owl();
}
function owl(){
    background(0,255,0);
    push();
    translate(110,110);
    stroke(0);
    line(0,-35,0,-65);
    noStroke();
    fill(0);
    ellipse(-30, -75,35,35);//left eye dome
    ellipse(30.5,-75,35,35);//right eye dome
    fill(255)
    ellipse(0,-50,75,75);//face
    ellipse(0,50,75,140);//body
    fill(0);
    ellipse(-14,-65,15,23);//Black part of left eye
    ellipse (14,-65,15,23);//Black part of right eye
    ellipse(25,30,20,40);//left arm
    ellipse(-25,30,20,40);//right arm
    ellipse(25,100,20,40); 
    ellipse(-25,100,20,40);
    fill(255);
    ellipse(-14,-65,8,8);//left eye
    ellipse(14,-65,8,8);//right eye
    fill(9);
    quad(0,-58,4,-51,0,-44,-4,-51);//beak
    pop();
    }