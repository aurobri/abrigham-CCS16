var table;
var stepsData = [];

function preload() {
  table = loadTable("data/steps.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  h1 = createElement('h1','Daily Steps April 11-18');
}
function draw(){
  background (255);
  noStroke();
  translate(30,30);
  for(var c =0; c < table.getColumnCount(); c++){
    for(var r =0; r < table.getRowCount(); r++){
      push();  
      var cellData = table.getString(r, c);
      if(cellData != undefined){
        if(c < 1){ //list days
          translate(0, (r * 40)+110);
          fill(0);
          text(cellData, 0,0);
        }
        else { //create bar chart
          translate( (c * 25) + 200, (r * 40)+95);
          fill(0);
          rect(0, 0, cellData/100, 30)
        }
      }
      pop();
    }
  }
  h1.position(30,20);
}