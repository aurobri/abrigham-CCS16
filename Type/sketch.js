var lines = [];
var partsOfSpeech = [];

function preload() {
  lines = loadStrings ('The-Dead-Mens-Song.txt');
  
  shrtxt = loadStrings ('The-Dead-Mens-Song.txt');
  
  amount = RiTa.concordance(lines.join (" "));
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  text(lines, 0,0,width,height);
  textSize(32);
  
  partsOfSpeech = RiTa.getPosTags(words); 
}

function draw(){
    background(255);
    
}