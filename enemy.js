// Enemy class
class Enemy {

constructor() {
  var yVals = [225,245,290,330,345];
  this.y = yVals[Math.floor(Math.random() * yVals.length+1)];
  this.x = 1000;
  this.w = 50;
  this.h = 80;
  this.speed = 5;
}

move() {
  this.x -= this.speed;
}

display() {
  rect(this.x,this.y,this.w,this.h);
}

accelerate() {
  this.speed += 0.001;
}

reset(){
    this.x = random(1000,1200);
    var yVals = [225,245,290,330,345];
    this.y = yVals[Math.floor(Math.random() * yVals.length)];

}

}
