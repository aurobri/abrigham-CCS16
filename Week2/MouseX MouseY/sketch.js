function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  if (mouseX > windowHeight / 2) {
      rect (mouseX, mouseY, 100, 100)
    } else if (mouseY > 10) {
      background (0,0,255)
    }
    else {
      background (255,0,0)
    }
}