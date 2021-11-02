 
class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    toString(): string {
        return `pessoa:  ${this.nome}: ${this.idade}`;
    }

}

class Moto{
    pessoa: Pessoa | null;
    pot: number;
    timer: number;
 
    constructor(pot: number, timer: number){
        this.pot = pot;
        this.pessoa = null;
        this.timer = 0;
    }

    comprarTempo(qtd: number): void {
        this.timer += qtd;

    }

    dirigir(timer: number): boolean {
        if(this.pessoa == null){
            console.log("Moto Vazia")
            return false;
        }
        if(this.pessoa.idade > 10){
            console.log("criança grande demais");
            return false;
        }
        if(this.timer < timer){
            console.log("tempo insuficiente");
            return false;
        }
        this.timer -= timer; 
        return true;
    }
    buzinar(): string {
        let saida = "p";
        for (let i = 0; i < this.pot; i++)
            saida += "e";
        return saida + "m";    
        
    }
    montar(pessoa: Pessoa): boolean{
        if (this.pessoa === null){
            this.pessoa = pessoa;
            return true;
        }
        console.log("Moto Lotada");
        return false;
    }

    desmontar(): Pessoa | null{
        if (this.pessoa == null){
            return null;
        }
        const pessoa = this.pessoa;
        this.pessoa = null;
        return pessoa;
    }

    toString(): string {
        let nome = "vazio"
        if(this.pessoa != null)   
            nome = this.pessoa.nome;
        return `[${nome}]`;    
    }

}

let motoca = new Moto(5, 10);
console.log(motoca.buzinar());
motoca.montar(new Pessoa("Joao", 10));
motoca.desmontar();


