// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("hello");
/*
void setup() {
  background (255);
  size (800, 250);
}
*/

function setup() {
  var myCanvas=createCanvas(800,250);
  myCanvas.parent('mySketch')
  createCanvas(800, 250);
  background(255);
}

function draw() {
  // statements here
  ellipse(mouseX, mouseY, 50, 50);
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
}
