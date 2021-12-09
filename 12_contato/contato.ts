let show = (lista: any[]) => console.log("[" + lista.join(" , ") + "]");

let lista: Array<number> = [3, -1, 2.45, 10, 3, 0, 5, 9, 7];
lista.sort();
show(lista);

function compare_to(a: number, b: number): number {
    if (a < b) {
        return -1;
    }else if (a > b) {
        return 1;
    }else{
        return 0;
    }
}

lista.sort(compare_to)
show(lista);

lista.sort((a, b) => a - b);
show(lista);
lista.sort((a, b) => b - a);
show(lista);

lista.sort((a, b) => Math.abs(a) - Math.abs(b));
show(lista);

//strings

let nomes: Array<string> = ["João", "Emeli", "Pedro", "Ana"];
nomes.sort();
show(nomes);

nomes.sort((a, b) => -a.localeCompare(b));
show(nomes);

class Pessoa {
    constructor(public nome: string, public idade: number) { }
    public toString(): string {
        return this.nome + ":" + this.idade;   
    }
}

let pessoas: Array<Pessoa> = [new Pessoa("Emeli", 18), new Pessoa("João", 40), new Pessoa("Maria", 30), new Pessoa("Pedro", 21) ];
pessoas.sort()
show(pessoas);

pessoas.sort((a, b) => a.nome.localeCompare(b.nome));
show(pessoas);

pessoas.sort((a, b) => a.idade - b.idade );
show(pessoas);

pessoas.sort((a, b) => a.nome.localeCompare(b.nome) || a.idade - b.idade);
show(pessoas);