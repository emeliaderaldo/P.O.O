class Cliente {
    id: string;
    fone: string;

    public constructor(id: string, fone: string){
        this.id = id;
        this.fone = fone;
    }

    public toString(){
        return `${this.id}: ${this.fone}`;
    }
}
class Cinema {
    cadeiras: Map<number, Cliente>;
    nomes: Map<string, number>;

    constructor(public lotacao: number){
        this.cadeiras = new Map<number, Cliente>();
        this.nomes = new Map<string, number>();
    }

    procurarChave(nome: string): number {
        for (let [chave, pessoa] of this.cadeiras) {
            if (pessoa.id == nome) {
                return chave;
            }
        }
        return -1;
    }

    public reservar(chave: number, pessoa: Cliente){
        if (this.cadeiras.has(chave)){
            console.log("Posicao ocupada");
            return;
        }
        if(this.nomes.has(pessoa.id)){
            console.log("a pessoa ja esta no cinema");
            return;
        }
        this.cadeiras.set(chave, pessoa);
        this.nomes.set(pessoa.id, chave);
    }

    public cancelar(nome: string){
        if(!this.nomes.has(nome)){
            console.log("Pessoa nao encontrada");
            return;
        }
        let chave = this.nomes.get(nome);
        this.cadeiras.delete(chave);
        this.nomes.delete(nome);
    }

    public toString() {
        let saida = "";
        for (let i = 0; i < this.lotacao; i++) {
            if (this.cadeiras.has(i)) {
                let pessoa = this.cadeiras.get(i);
                saida += pessoa.id + " ";
            } else {
                saida += " - ";
            }
        }
    }
}

let cinema = new Cinema(3);
console.log("" + cinema);
cinema.reservar(1,new Cliente ("Emeli", "3583"));
cinema.reservar(2,new Cliente ("Maria", "3384"));
cinema.reservar(2,new Cliente ("Jose", "3175"));
cinema.cancelar("Maria");
console.log("" + cinema);

