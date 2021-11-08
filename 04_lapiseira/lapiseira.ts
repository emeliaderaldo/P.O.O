class Grafite {
    calibre: number;
    dureza: string;
    tamanho: number;
    constructor(calibre: number, dureza: string, tamanho: number) {
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    }

    gastoPorFolha(): number {
        if (this.dureza === 'HB')
            return 1;
        if (this.dureza === '2B')
            return 2;
        if (this.dureza === '4B')
            return 4;
        if (this.dureza === '6B')
            return 6;
        return 0;
    }

    toString(): string {
        //return "Grafite: " + this.calibre + ":" + this.dureza + ":" + this.tamanho;
        return `Grafite ${this.calibre}:${this.dureza}:${this.tamanho}`;
    }
}

//agregação
class Lapiseira {
    grafites: Grafite[]; 
    calibre: number;
    bico: Grafite[];
    tambor: Grafite[];
    grafite: Grafite | null;

    constructor(calibre: number, grafite: Grafite) { //é a lapiseira que cria o grafite?
        this.calibre = calibre;
        this.grafite = grafite;
        this.grafites = [];
        this.bico = [];
        this.tambor = [];
        
    }

// grafite eh colocado como ultimo no tambor

    setGrafite(grafite: Grafite): boolean {
        if (this.grafites != null) {
            this.tambor.push(this.grafites[1]) 
            console.log("O grafitte foi colocado no tambor");
            return false;
        }
        if (grafite.calibre != this.calibre) {
            console.log("O grafite não é compatível com a lapiseira");
            return false;
        }
        this.grafites.push(grafite);
        //colocar o grafite no vetor tambor
        return true;
    }

    
    removerGrafite(): Grafite | null {
        if (this.grafites.length == 0) {
            console.log("A lapiseira não possui um grafite");
            return null;
        }
        let grafite = this.grafites.shift();
        this.grafites = null;
        return grafite;
    }

    puxarGrafite(): Grafite | boolean{
        if (this.grafites.length != null) {
            this.removerGrafite();
            this.bico.push(this.tambor[0]);
        
           // return this.bico;
        return true;
        }
        //Puxa o grafite do tambor para o bico.
        // Se já tiver um grafite no bico, esse precisa ser removido primeiro.
    }

    escrever(folhas: number): boolean {
        //verificar se existe grafite
        if (this.grafites == null) {
            console.log("A lapiseira não possui um grafite");
            return false;
        }
        let gasto = this.grafite.gastoPorFolha() * folhas;
        if (gasto <= this.grafites[0].tamanho) {
            console.log("Escrita concluida");
            this.grafites[0].tamanho -= gasto;
        } else {
            let realizado = this.grafites[0].tamanho / this.grafite.gastoPorFolha()
            console.log("Escrita parcial: " + realizado + " folhas");
            this.grafites[0].tamanho = 0;
        }
        if (this.grafites[0].tamanho <= 10) {
            this.grafites = null;
        }        
    }
    
    toString(): string {
        if (this.grafites.length == 0){
            return "grafite vazia"
        }
        let saida = `(bico: ${this.grafites[0].calibre}:${this.grafites[0].dureza}:${this.grafites[0].tamanho}) [ `;
        for (let i = 1; i < this.grafites.length; i++){
            saida += `tambor: ${this.grafites[i].calibre}:${this.grafites[i].dureza}:${this.grafites[i].tamanho} `;
        }
        return saida + "]";
    }

}

let pentel = new Lapiseira(0.5,(new Grafite(0.4, "HB", 60)) );
pentel.setGrafite(new Grafite(0.5, "HB", 40));
pentel.setGrafite(new Grafite(0.9, "2HB", 50));
pentel.setGrafite(new Grafite(0.7, "6HB", 30));
pentel.puxarGrafite();
pentel.escrever(10);
pentel.escrever(40);
console.log(pentel);
