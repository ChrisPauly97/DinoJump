// Player class
class Player {

constructor() {
  this.x = 50;
  this.y = 750;
  this.w = 50;
  this.h = 100;
  this.speed = 1;
  this.ducked = false;
  this.jumping = true;
}

// move() {
//   this.x += random(-this.speed, this.speed);
//   this.y += random(-this.speed, this.speed);
// }
duck(){
    if(!this.ducked){
        this.y = this.y + 50;
        this.h = 50;
        this.ducked = true;
    }else{
        return;
    }
}

jump(){
    if(!this.jumping){
        for(let x = 0; x < 210; x++){
            this.y -= 1;
        }
        this.jumping = true;
    }else{
        return;
    }
}

reset(){
    this.y = 325;
    this.h = 100;
    this.ducked = false;
    this.jumping = false;   
}

display() {
  image(img,this.x,this.y,this.w,this.h);
}
}
