var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,30,30);
box.shapeColor = "black"
}

function draw() 
{
  background(30);
if(keyDown(RIGHT_ARROW))
{
background('pink');
}
if(keyDown("left"))
{
  background('lightgreen');
}
if(keyDown("up"))
{
  background('violet');
}
if(keyDown("down")){
 background('lightblue');
}

  drawSprites();
}



