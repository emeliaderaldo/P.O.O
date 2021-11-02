 
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

class Trem{
    pessoas: Pessoa[];
    pot: number;
    timer: number;
    lotacao: number;
 
    constructor(pot: number, lotacao: number){
        this.pot = pot;
        this.pessoas = [];
        this.timer = 0;
        this.lotacao = lotacao
    }

    comprarTempo(qtd: number): void {
        this.timer += qtd;

    }

    dirigir(timer: number): boolean {
        if(this.pessoas.length == 0){
            console.log("Trem Vazio")
            return false;
        }
        if(this.pessoas[0].idade < 5){
            console.log("criança muito pequena para dirigir o trem");
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
    subir(pessoa: Pessoa): boolean{
        if (this.pessoas.length == this.lotacao){
            console.log("lotação cheia");
            return false; 
        }
        this.pessoas.push(pessoa);
        return true;
    }

    descer(): Pessoa | null{
        if (this.pessoas.length == 0){
            console.log("trem vazio");
            return null;
        }
        let kid = this.pessoas.shift();
        if(kid === undefined)
            return null;
        return kid;    
        
    }

    toString(): string {
        if (this.pessoas.length == 0){
            return "trem vazio"
        }
        let saida = `(${this.pessoas[0].nome}) [ `;
        for (let i = 1; i < this.pessoas.length; i++){
            saida += `${this.pessoas[i].nome} `;
        }
        return saida + "]";
    }   

}

let trem = new Trem(5, 4);
trem.subir(new Pessoa("João", 5));
trem.subir(new Pessoa("Maria", 4));
trem.subir(new Pessoa("Pedro", 3));
trem.subir(new Pessoa("José", 2));
trem.subir(new Pessoa("Paulo", 1));
console.log(trem.toString());
trem.comprarTempo(5);
console.log(trem.buzinar());
console.log(trem.dirigir(5));
console.log(trem.toString());
console.log(trem.descer());
console.log(trem.toString());
console.log(trem.descer());
console.log(trem.toString());


