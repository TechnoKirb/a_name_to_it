var b1
var b2
var r,g,b
r=0
g=0
b=255
function setup() {
  createCanvas(400,400);
  b1 = createButton('Red')
  b1.position(50,150)
  b1.mousePressed(red_bg)
  b2 = createButton('Green')
  b2.position(150,150)
  b2.mousePressed(green_bg)
}
function red_bg(){
  r=255
  g=0
  b=0
}
function green_bg(){
  r=0
  g=255
  b=0
}
function draw() 
{
  background(r,g,b);
}




