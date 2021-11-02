

class Bubble {
  x: number;
  y: number;
  letter: string;
  speed: number; 
  static radius: number = 20;
  alive: boolean = true;
 
  constructor(x: number, y: number, letter: string, speed: number) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.speed = speed;
  }

  update(): void {
      this.y += this.speed;
     // this.x += this.speed;
  }

  updateDiagonal(): void{
      this.y += this.speed;
      this.x += this.speed;
  }

  updateHard(): void{
    this.y += 2 * this.speed;
    this.x += 2 * this.speed;

}

  draw(): void {
      fill(255);
      stroke(0);
      circle(this.x, this.y, 2 * Bubble.radius);
      fill(0);
      stroke(0);
      textSize(15);
      text(this.letter, this.x - 5, this.y + 5);
  }
}

class Board {
  bubbles: Bubble[];
  timeout: number = 30;
  timer: number = 0;
  hits = 0;
  mistakes =0;
  
  constructor() {
    this.bubbles = [new Bubble(100, 100, "a", 2)];
    this.bubbles.push(new Bubble(200, 100, "b", 4));
    this.bubbles.push(new Bubble(300, 100, "c", 6));
  }

  update(): void{ // mandar as bolhas se mexerem 
    this.checkBubbleTime(); 
    this.markOutsideBubbles();
    for (let bubble of this.bubbles)
        bubble.update();
    this.romoveDeadBubbles();  
  }

  updateFase(): void{
    //background(50, 50, 50)
    for (let bubble of this.bubbles)
        bubble.updateDiagonal();
    this.romoveDeadBubbles();      
  }

  updateFaseHard(): void{
    for (let bubble of this.bubbles)
        bubble.updateHard();
    this.romoveDeadBubbles();       
  }

  romoveDeadBubbles(): void {
    this.bubbles = this.bubbles.filter(b => b.alive);        
  }

  removeByHit(code: number) : void{
    for(let bubble of this.bubbles){
      if (bubble.letter[0].toUpperCase().charCodeAt(0) == code){
          bubble.alive = false;
          this.hits++;
          break;
      }
    }
}  

  checkBubbleTime(): void { //verificar o tempo da bolha e diminuir o timer de um
    this.timer -= 1;
      if(this.timer <= 0) {
        this.addBubble();
        this.timer = this.timeout;
      }
  }

  markOutsideBubbles() : void{
    for (let bubble of this.bubbles)
      if(bubble.y + 2 *Bubble.radius >= height){
          bubble.alive = false;
          this.mistakes++;
      }
}
  addBubble(): void {
    let x = random(0, width - 2 * Bubble.radius);
        let y = -2 * Bubble.radius;
        let letter = random(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
        let speed = random(1, 5);
        let bubble = new Bubble(x, y, letter, speed); 
        this.bubbles.push(bubble);
  }

  draw(): void{
     stroke("white");
     fill("white");
     textSize(30);
     text("acertos: " + this.hits, 50, 30);
     textSize(30);
     text("erros: " + this.mistakes, 500, 30);
     
     if (this.hits > 5){
        fill(255, 0, 255)      
        textSize(50);
        text("FASE KID", 250, 50);
      
     }
     
     
     if (this.hits > 10){
      background(50, 50, 50);
      fill(255, 0, 0)      
      textSize(50);
      text("FASE HARD", 200, 50);
   }
    for (let bubble of this.bubbles){
      bubble.draw();
    }
  }
}

class Game {
    board: Board;
    activeState: () => void;
    
    constructor(){
        this.board = new Board();
        this.activeState = this.GamePlay;
    }

    GamePlay(): void{
      this.board.update();
      if (this.board.hits > 5)
          this.board.updateFase();
  
          
      //se acertos maior q 5 updateDiagonal();
      if (this.board.hits > 10)
          this.board.updateFaseHard();

      background(50, 50, 50);
      this.board.draw();
       if(this.board.mistakes > 10)
           this.activeState = this.GameOver; 
    }

    GameOver(): void {
      background(0, 0, 0);
      fill(255, 255, 255)
      textSize(100);
      text("GAME OVER", 50, 300);
      fill(255, 255, 255);
      textSize(50);
      text("acertos: " + this.board.hits, 50, 400);
    }
}

let game: Game;

function setup(){
  createCanvas(800, 600);
  frameRate(30);
  game = new Game();
}

function keyPressed(){
  game.board.removeByHit(keyCode);
}

function draw(){
  game.activeState();
}