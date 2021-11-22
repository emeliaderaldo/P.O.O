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
    fileira: [];

    constructor(capacidade: number){
        this.capacidade = capacidade;
        this.fileira = [];
    }

    iniciar(){
        let saida = " ";
        for (let i = 0; i < this.capacidade; i++)
            saida += " - ";
        return saida; 
    }

    buscar(id: String): number {
        return this.fileira.findIndex(c => c != null && c.id == id)
      /*   for(let i = 0; i < this.fileira.length; i++){
            let cadeira = this.fileira[i];
            if (cadeira != null && cadeira.id == id){
                return i;

            }
        }
        return -1; */
    }

    reservar(pessoa: Cliente, local: number): boolean{
        if(local < 0 || local > this.fileira.length){
            console.log("cadeira inexistente")
            return false;
        }
        if(this.fileira[local] != null){
            console.log("cadeira já está reservada")
            return false;
        }
        if(this.buscar(pessoa.id) != -1){
            console.log("reservando cadeira")
            return false;
        }
        this.fileira.[local] = pessoa;
        return true;
    }

    cancelar(id: string) {
        for(let i =0; i< this.cadeiras.length; i++ ) {
            let pessoa = this.cadeiras[i];
            if (pessoa != null && pessoa.id == id) {
                this.cadeiras[i] = null;
            }
        }
    }
}

