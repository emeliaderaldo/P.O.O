
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
    time: number;
    minutosAndados: number;

    constructor(pot: number, time: number, minutosAndados: number) { 
        this.pot = pot;
        this.time = time;
        this.pessoa = null;
        this.minutosAndados = minutosAndados;
    }

    Comprar(time: number): boolean {
        if (this.pessoa == null) {
           // this.Moto.setSubir();
            return true;
        }
       
        // while e >= time {
           // vai continuar andando 
        //}
    } 

    Dirigir(time: number){

    }

    Buzina(){
        let pem: string =" ";
        for(let e: number = 0; e > this.pot; e++ ){
            pem +="e"; 
        }
        return this.pot;
        console.log(this.pot);

    } 
    
    Iniciar(): void{
        this.pot = 1;
        this.time = 0;
        this.pessoa = null;
    }

    toString(): string {
        return `potência: ${this.pot}, minutos: ${this.time}`;
    }
     
    setSubir(pessoa: Pessoa): boolean {
        if (this.pessoa != null) {
            console.log("Já tem alguém na motoca");
            return false;
        }
        if (this.pessoa == null) {
            console.log("Subiu com sucesso");
            console.log("" + pessoa);
            return false;
        }
        this.pessoa = pessoa;
        return true;
    }

    setDescer(pessoa: Pessoa): boolean{
        if (this.pessoa != null) {
            console.log("Desceu com sucesso");
            return false;  
        }
        else (this.pessoa == null);
            console.log("Moto vazia");
            return false;      

}

}

let pessoa = new Pessoa("Emeli", 9);
let motoca = new Moto (2, 10, 8);
motoca.setSubir(new Pessoa("emeli", 9));

console.log(" " + motoca + pessoa);
motoca.setDescer(new Pessoa("emeli", 9));
console.log(" " + motoca);

