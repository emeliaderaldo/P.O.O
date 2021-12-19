class Aluno{
    private alive: boolean = true;
    private curso: string
    protected sanidade: number;

    constructor(curso: string, sanidade: number){
        this.curso = curso;
        this.sanidade = sanidade;
    }
    public isAlive(): boolean{
        return this.alive;
        
    }
    public morreu(){
        if(this.sanidade = 0){
            this.alive = false;
        }else{
            this.alive = true;
        }
    }
    public trabalho(): void{
        this.sanidade =- 1;
    }
    
    public getCurso(): string{
        return this.curso;
    }
    public toString(){
       return this.curso + ":" + this.sanidade + ":" + (this.alive ? "alive" : "dead"); 
    }
}

class DDrs extends Aluno{
    protected nome: string; 

    public constructor(nome: string, sanidade: number){
        super("DD", sanidade);
        this.nome = nome;
    }

    public trabalho(): void{
        if (this.isAlive()){
            console.log("Vai passar outro trabalho de identidade visual pro coitato de DD?");
        }else{
            super.morreu();
            console.log("o DDr faleceu de tanto procurar Mckups");
        }
    }
    public toString(){
        return this.nome + ":" + super.toString(); 
     }
}

class Desenhista extends DDrs{
    constructor(nome: string, sanidade: number){
        super(nome, sanidade)
    }

    public trabalho(){
        if (this.isAlive()){
            this.sanidade -= 2;
            console.log("foi passado um desenho de observação no sol para o aluno, coitado, a insolação vem")
        }else{
            super.morreu();
            console.log("mal chegou em desenho e o aluno ja se encontra derrubado, F")
        }
    }
    public toString(){
        return super.toString(); 
     }
}

let guerreiro = new DDrs("emeli", 5)
guerreiro.trabalho();
guerreiro.trabalho();
guerreiro.trabalho();
console.log(guerreiro.toString());
guerreiro.trabalho();
guerreiro.trabalho();
guerreiro.trabalho();
console.log(guerreiro.toString());
