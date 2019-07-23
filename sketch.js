let player; // Declare object
let enemies = [];
let img;

function preload() {
  img = loadImage('Dino.png');
}

function setup() {
  createCanvas(1000,500);
  // Create object
  player = new Player();
  for(let x = 0; x < 3; x++){
    enemies[x] = (new Enemy);
  }


}

function draw() {
  // player.move();
  background(200);
  line(0,425,1000,425)
  player.display();
  for(let x = enemies.length-1; x > 0; x--){
    enemies[x].display();
    enemies[x].move();
    enemies[x].accelerate();
    if(enemies[x].x + enemies[x].w < 0){
      enemies[x].reset();
    }
  }
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    player.jump();
    player.display();
  } else if (keyCode === DOWN_ARROW) {
    player.duck();
    player.display();
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW) {
    player.reset();
    player.display();
  }else if(keyCode === UP_ARROW){
    player.reset();
    player.display();
  }
}