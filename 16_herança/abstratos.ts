/* // tudo existe nela
class Concreta{

}

// tem uma parte faltando
class Abstrata {

}

//tudo esta faltando
class Interface {

} */

abstract class FormaGeo {
    nome: string = "";
    constructor(nome: string){
        this.nome = nome;
    }
    
    // parte q não sei
    abstract getArea(): number;
}

class Quadrado extends FormaGeo {
    private lado: number;
    constructor(lado: number) {
        super("Quadrado");
        this.lado = lado;
    }
    getArea(): number {
        return this.lado * this.lado;
    }
}
class Circulo extends FormaGeo {
    private raio: number;
    constructor(raio: number) {
        super("Circulo");
        this.raio = raio;
    }
    getArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Retangulo extends FormaGeo {
    private largura: number;
    private altura: number;
    constructor(largura: number, altura: number) {
        super("Retangulo");
        this.largura = largura;
        this.altura = altura;
    }
    getArea(): number {
        return this.largura * this.altura;
    }
}

let formas: FormaGeo[] = [];

formas.push(new Quadrado(10));
formas.push(new Circulo(5));
formas.push(new Retangulo(10, 5));

for (let forma of formas) {
    console.log(forma.nome + ": " + forma.getArea());
}