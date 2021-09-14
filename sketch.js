var box;
function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,20,20)
}

function draw() 
{
  background("orange");
  drawSprites();

  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-4
    }
  if(keyIsDown(DOWN_ARROW)){
      box.position.y=box.position.y+4
      }
      if(keyIsDown(RIGHT_ARROW)){
        box.position.x=box.position.x+4
        }
      if(keyIsDown(LEFT_ARROW)){
          box.position.x=box.position.x-4
          }

}




