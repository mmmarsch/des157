// p5 file

console.log("hello");

function setup(){
  var myCanvas= createCanvas (800,250);
  myCanvas.parent('mySketch');
  background(255);
}
function draw() {
background(100);
noStroke ();
      colorMode(HSB,360,100,1);
  var r= map (mouseX,0,width-250,0,100);
  var g= map (mouseX,0,width-250,0,100);
  var b= map (mouseX,0,width-250,0,100);


//Large Square
    fill(r,g-50,b);
    rect(0,0,200,250);
//Medium Square
    fill(r-50,g,b);
    rect(50,75,100,100);
 //Small Square
    fill(r-100,g,b);
    rect(75,100,50,50);

 //Large Square 2
    fill(r,g-50,b);
    rect(200,0,200,250);
//Medium Square 2
    fill(r-50,g,b);
    rect(250,75,100,100);
 //Small Square 2
    fill(r-100,g,b);
    rect(275,100,50,50);

  //Large Square 3
    fill(r,g-50,b);
    rect(400,0,200,250);
//Medium Square 3
    fill(r-50,g,b);
    rect(450,75,100,100);
 //Small Square 3
    fill(r-100,g,b);
    rect(475,100,50,50);

  //Large Square 4
    fill(r,g-50,b);
    rect(600,0,200,250);
//Medium Square 4
    fill(r-50,g,b);
    rect(650,75,100,100);
 //Small Square 4
    fill(r-100,g,b);
    rect(675,100,50,50)
  }
