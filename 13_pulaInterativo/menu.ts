const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);
class Criança{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public toString() {
        return `${this.nome}: ${this.idade}`;
    }
}

class PulaPula{
    pula: Array<Criança | null>;
    fila: Array<Criança>;

    constructor(){
        this.pula = [];
        this.fila = [];

    }
        //coloca a criança  na fila 
        EntrarNaFila(criança: Criança): void {
            this.fila.push(criança);
        }

        //pega a primeira pessoa da fila de espera
        EntrarNoPula(): boolean {
            this.pula[0] = this.fila[0];
            this.fila.shift();
            return true;
        }

        removerDoPula(): boolean {
            this.fila.push(this.pula[0]); //ultimo da fila de espera  
            this.pula.shift();
            return true;
        }

        
    toString() {
        return `${this.pula}: ${this.fila}`;
    }

}

class Menu {
    iniciar(): Criança {
        write("Digite o nome da criança: ");
        let nome = input();
        write("Digite a idade da criança: ");
        let idade = +input();
        let kid = new Criança(nome, idade);
        return kid
    }
    mostrar_help() {
        write("Comandos:\n");
        write("  init <nome> <idade>: uma nova criança chega\n");
        write("  show: mostra a criança\n");
        write("  in: faz a criança entrar na fila do pula\n");
        write("  play: faz a criança pular\n");
        write("  out: a criança sai do pula\n");
        write("  end: sai do programa\n");
    }

    shell() {
        let pula = new PulaPula();
        this.mostrar_help();
        while (true) {
            write("$ ");
            let line = input();
            let words = line.split(" ");
            if (words[0] == "end") {
                break;
            } else if (words[0] == "help") {
                this.mostrar_help();
            } else if (words[0] == "show") {
                write("" + pula + "\n");
            } else if (words[0] == "in") {
                pula.EntrarNaFila(this.iniciar());
            } else if (words[0] == "play") {
                pula.EntrarNoPula();
            } else if (words[0] == "init") {
                pula = new PulaPula();
            } else if (words[0] == "out") {
                pula.removerDoPula();
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let pular = new Menu();
pular.shell();