class Cliente {
    id: string;
    fone: number;

    constructor(id: string, fone: number){
        this.id = id;
        this.fone = fone;
    }
}

class Sala{
    clientes: Cliente[];
    capacidade: number;
    cadeiras: Array<Cliente>

    constructor(capacidade: number){
        this.capacidade = capacidade;
    }

    iniciar(){
        let saida = " ";
        for (let i = 0; i < this.capacidade; i++)
            saida += " - ";
        return saida; 
    }
}

class Controle {

}