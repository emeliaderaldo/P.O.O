class Animal{
    private alive: boolean = true;
    private especie: string = ""
    constructor(especie: string){
        this.especie = especie;
    }
    public isAlive(): boolean{
        return this.alive;
    }
    public kill(): void{
        this.alive = false;
    }
    public getEspecie(): string{
        return this.especie;
    }
    public toString(){
       return this.especie + ":" + (this.alive ? "alive" : "dead"); 
    }
}

class Pet extends Animal {
    protected nome: string; 

    public constructor(nome: string, especie: string){
        super(especie);
        this.nome = nome;
    }
    public brincar(){
        if (this.isAlive()){
            console.log("brincando com o " + this.nome)
    }else{
        console.log("com pet morto não se brinca!")
    }
}
    public toString(){
        return this.nome + ":" + super.toString(); 
     }
}

class Gato extends Pet {
    private vidas: number;
    constructor(nome: string, vidas: number){
        super(nome, "gato");
        this.vidas = vidas;
    }
    miar(){
        console.log("miaaaauuuuuu");
    }
    public brincar() {
        if (this.isAlive()) {
            console.log("brincando com " + this.nome);
        } else {
            console.log("Espero estar empalhado");
        }
    }
    public kill() {
        if (!this.isAlive()) {
            console.log("Este gato está morto!");
        } else if (this.vidas > 1) {
            console.log("menos uma vida");
            this.vidas--;
        } else { 
            this.vidas--;
            super.kill();
        }
    }
    public toString() {
        return super.toString() + ":" + this.vidas;
    }
}

function main(){
    let lilo = new Gato("lilo", 3);
    console.log(lilo.toString());
    lilo.brincar();
    lilo.kill();
    lilo.brincar();
    console.log(lilo.toString());
    lilo.kill();
    lilo.kill();
    lilo.kill();
    lilo.brincar();
    console.log(lilo.toString());
}

main()