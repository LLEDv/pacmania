//jogo
var verdinho 
var verdinhoImagem
var ghost
var ghostimage
var torre
var tower
var pacman
var pac 
var pactur
//reniciar
var reniciar
//pacman
var pacghost = 0
var pacvisi = 0

var points = 0
//imagens do jogo
function preload(){
  ghostimagem = loadAnimation ("ghost1.png","Ghost2.png","Ghost3.png","Ghost4.png","Ghost5.png") 
  verdinhoImagem = loadAnimation ("Verdinho1.png ","Verdinho2.png","Verdinho3.png","Verdinho5.png")  
  tower = loadImage ("tower.png") 
  pac = loadAnimation ("Pacman.png","Pac1.png","Pac.png")
  reniciar12 = loadImage ("restart.png")
}

function setup() {
  createCanvas(600, 600);
 torre = createSprite (300,300) 
 torre.addImage ("torre",tower)
 torre.velocityY = -5
 ghost = createSprite (300,300)
 ghost.scale = 0.5
 ghost.y = 496
 ghost.x = 400
 verdinho = createSprite (200,200)
 verdinho.scale = 0.5
 verdinho.y = 496
 verdinho.addAnimation ("verdinho",verdinhoImagem)
 ghost.addAnimation("ghost",ghostimagem); 
 pactur = new Group ()
 sprite = createSprite (300,590,600,30)
 sprite.visible = 0
 reniciar = createSprite (300,350,95,90)
 reniciar.addImage ("restart",reniciar12)
 reniciar.visible = 0
}

function pacmania() {
  pacman = createSprite (132,132)
  pacman.addAnimation ("pacman",pac)
  pacman.velocityY = 10
  pacman.x = random (132,520)
  pacman.lifetime = 50
  pacman.rotation = 90
  pactur.add (pacman)
  if (pacghost==0 || pacvisi ==0 ){
    points = points +1
  }
}


function draw() {
  background(200);
  ghost.collide (verdinho)
  if (torre.y <20){
   torre.y = torre.height /2
  }
   if (keyDown("W")){ 
    ghost.y -=3
    }
  if (keyDown("A")){ 
      ghost.x -=3
  }
   if (keyDown("D")){ 
    ghost.x +=3
}
    if (keyDown("S")){ 
   ghost.y +=3
}
  if (keyDown("LEFT")) {
  verdinho.x -= 3
  }
  if (keyDown("UP")) {
  verdinho.y -= 3
  }
  if (keyDown("RIGHT")) {
    verdinho.x += 3
  }
  if (keyDown("DOWN")) {
    verdinho.y += 3
    }
  drawSprites();
  if (frameCount%60==0)
  pacmania()
  ghost.collide (pactur)
  verdinho.collide (pactur)
  if (ghost.isTouching(sprite)) {
    pacghost = 1
  }
  if (verdinho.isTouching(sprite)) {
    pacvisi = 1
  }
  if (pacghost ==1){
    fill (rgb(230, 34, 47))
    textSize (25)
    text ("Red Died",200,300)
  }
  if (pacvisi ==1){ 
    fill (rgb(67, 161, 111))
    textSize (25)
    text ("Green Died",300,300) 
  }
 if (pacghost == 1 && pacvisi == 1){
   reniciar.visible = 1
 if (mousePressedOver(reniciar)||keyDown("R")){
   points = 0
   pacghost = 0
   pacvisi = 0 
   verdinho.x = 200
   verdinho.y = 496
   ghost.x = 400
   ghost.y = 496
   ghost.velocityX = 0 
   ghost.velocityY = 0 
   verdinho.velocityX = 0
   verdinho.velocityY = 0
   reniciar.visible = 0 
 }
}
 textSize (20)
 fill ("purple")
 text ("Pontos :"+points,269,50)
 

 
 }
 