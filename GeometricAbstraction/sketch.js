function setup() {
  createCanvas (520, 520);
  background (238,232,170);
  noStroke();
}

function draw() {
  var boxWidth = 500;
  var boxHeight = 500;
  var location1 = 10
  var location2 = 10
  
  // Biggest to smalles
  fill(0, 128, 128); //Dark GReen
  rect(location1, location2, boxWidth, boxHeight);
  
  fill(255,255,0); //Light Yellow
  rect(location1+50, location2+80, boxWidth-100, boxHeight-100);
  
  fill(218,165,32); //Gold Yellow
  rect(location1+100, location2+170, boxWidth-200, boxHeight-210);
  
  fill(139,69,19); //Brown
  rect(location1+150, location2+240, boxWidth-300, boxHeight-300);
}