
function setup(){
  createCanvas(710,400);
 background(100);
}


function draw() {
  stroke (25);
  colorMode(HSB, height, height, height);
  
  if (mouseIsPressed === true){
    circle (mouseX,mouseY,pmouseX,pmouseY)
    fill(mouseY,height,height);
  }
  
  
}
function variableEllipse(x,y,px,py){
  let speed = abs(x - px) + (y - px);
  stroke(speed);
  ellipse(x,y,speed,speed);
}