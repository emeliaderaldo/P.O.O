class Entity{
  x: number;   //atributo
  y: number;
  step: number;
  image: p5.Image;
  vx: number;
  vy: number;
                      //parametros
  constructor(x: number, y: number, step: number, image: p5.Image, vx:number, vy: number){
      this.x = x
      this.y = y
      this.step = step
      this.image = image
      this.vx = vx
      this.vy = vy
  }
//metodos
draw(): void{
  image(this.image, this.x * this.step, this.y * this.step, this.step, this.step, this.vx, this.vy);
}
}

class Board{
  nl: number;
  nc: number;
  step: number;
  background: p5.Image;

  constructor(nc: number, nl: number, step: number, background: p5.Image){
      
      this.nc = nc
      this.nl = nl
      this.step = step
      this.background = background;
  }

  draw(): void {
    image(this.background, 0, 0, this.nc *  this.step, this.nl * this.step);
    for (let x =0; x < this.nc; x++){
      for(let y = 0; y < this.nl; y++){
        noFill();
        stroke(255, 255, 255);
        strokeWeight(2);
        rect(x * this.step, y* this.step, this.step, this.step);
      }
    }
  }
}

let gato_img: p5.Image;
let morcego_img: p5.Image;
let board_img: p5.Image;
let teia_img: p5.Image;


let gato: Entity;
let morcego: Entity;
let board: Board;
let teia: Entity;
let teiaPega: Board;
let timer: number = 0;
let count: number = 0;

function loadImg(path: string): p5.Image {
  return loadImage(
      path,
      () => console.log("Loading " + path + " ok"),
      () => console.log("Loading " + path + " error")

  );

}

function preload(){
  gato_img = loadImg('../sketch/gato.png');
  morcego_img = loadImg('../sketch/morcego.png');
  board_img = loadImg('../sketch/cenario.jpg');
  teia_img = loadImg('../sketch/teia.png');
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      gato.x--;
  } else if (keyCode === RIGHT_ARROW) {
      gato.x++;
  } else if (keyCode === UP_ARROW) {
      gato.y--;
  } else if (keyCode === DOWN_ARROW) {
      gato.y++; 
  }

  if (keyCode === "A".charCodeAt(0)) {
    morcego.x--;
} else if (keyCode === "D".charCodeAt(0)) {
    morcego.x++;
} else if (keyCode === "W".charCodeAt(0)) {
    morcego.y--;
} else if (keyCode === "S".charCodeAt(0)) {
    morcego.y++; 
}

}

function setup(){
  let size = 100;
  gato = new Entity(2, 2, size, gato_img, 0, 0);
  morcego = new Entity(1, 1, size, morcego_img, 0, 0);
  board = new Board(10, 8, size, board_img);
  teia = new Entity(4, 3, size, teia_img, 0, 0);
  teiaPega = new Board(4, 3, size, teia_img );
  createCanvas(board.nc * size, board.nl * size);
  


}

function morcego_loop(){
if( morcego.x == board.nc)
  morcego.x =0;
if(morcego.y == board.nl)
  morcego.y =0;
if(morcego.x == -1)
  morcego.x = board.nc - 1;
if(morcego.y == -1)
  morcego.y = board.nl -1;
}

function gato_stop(){
if( gato.x == board.nc)
  gato.x = board.nc - 1;
if(gato.y == board.nl)
  gato.y = board.nl - 1;
if(gato.x == -1)
  gato.x = 0;
if(gato.y == -1)
  gato.y = 0;
}

function morcego_generate(){
  morcego.x = parseInt(random(0, board.nc));
  morcego.y = parseInt(random(0, board.nl));

}

function gato_preso(){
if( gato.x == teiaPega.nc)
  gato.x = teiaPega.nc - 1;
if(gato.y == teiaPega.nl)
  gato.y = teiaPega.nl - 1;
//if(gato.x == 1)
 // gato.x = 0;
//if(gato.y == 1)
  //gato.y = 0;
}

function morcego_walk(){
  if(frameCount - timer > 10){
      timer = frameCount;
      morcego.x += morcego.vx; 
      morcego.y += morcego.vy;
    
  }
}
//function wolf_stuck(){
//if(wolf.x == hole.x && wolf.y == hole.y)
    //wolf_img = dead_img;
//}

function draw(){
  morcego_walk();
  morcego_loop(); 

  if(gato.x == morcego.x && gato.y == morcego.y){
    morcego_generate();  
    count += 1;  
  } 

  if(gato.x == teia.x && gato.y == teia.y){
     gato_preso(); 
  }

  gato_stop();
  board.draw();
  teia.draw();
  gato.draw();
  morcego.draw();

  fill(255, 165, 0)
  textSize(80);
  text(count, 10, 70);
  
  
}