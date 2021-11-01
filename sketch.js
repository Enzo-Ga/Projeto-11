 var leftboundary;
 var path, pathImagem;
 var runner, runnerImagem;
 
 
function preload(){
  //imagens pré-carregadas
  pathImagem = loadImage("path.png");
  runnerImagem = loadImage("runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
    leftboundary = createSprite(20,200,40,400)
    leftboundary.shapeColor = "gray";
    leftboundary.visible = false;

    path = createSprite(200,200,400,400);
    path.addImage(pathImagem);

    runner = createSprite(200,360,10,10);
    runner.addAnimation("running",runnerImagem);
    runner.scale = 0.1;

}

function draw() {
  background(0);

    path.velocityY = 2;

    runner.x = World.mouseX;

    if(path.y > 400){
      path.y = height/2;
    }
   
  drawSprites();
}
