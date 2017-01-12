//Megan Marschall, May 2nd
// Albers Square
//Pastel vs Saturated (click for pastel colors)
void setup(){
  background(255);
  size(200,200);
  stroke(0,0,0);
}
void draw() {
background(100);
noStroke ();
      colorMode(HSB,360,100,1);
  float r= map (mouseX,0,width,0,200);
  float g= map (mouseX,0,width,0,200);
  float b= map (mouseX,0,width,0,200);
  

//Large Square
    fill(r,g-50,b);
    rect(0,0,200,200);
//Medium Square    
    fill(r-50,g,b);
    rect(50,50,100,100);
 //Small Square
    fill(r-100,g,b);
    rect(75,75,50,50);
    
   
  
    
  }
  