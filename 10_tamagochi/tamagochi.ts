class Tamagochi {
    
    energia: number;
    saciedade: number;
    limpeza: number;
    energiaMax: number;
    saciedadeMax: number;
    limpezaMax: number;
    diamantes: number;
    idade: number;
    alive: boolean; 

    constructor(energia: number, saciedade: number, limpeza: number){
    
    this.energia = energia;
    this.saciedade = saciedade;
    this.limpeza = limpeza;
    this.energiaMax = energia;
    this.saciedadeMax = saciedade;
    this.limpezaMax = limpeza;
    this.diamantes = 0;
    this.idade = 0;

    }

    setEnergy(valor: number): void{
        if(valor <= 0){
            this.energia = 0;
            console.log("fail: pet morreu de fraqueza");
            this.alive = false;
        }
        else if(valor > this.energiaMax)
            this.energia = this.energiaMax;
        else
            this.energia = valor;
    }
}

class Jogo {
    /* diamantes, que ele vai ganhar jogando.
    e idade que aumenta a cada ação realizada,
    ambos iniciando em 0. */
    
    tama: Tamagochi;

    constructor(tama: Tamagochi){
        this.tama = tama;

    }

    /* Cada operação causa aumento e reduções nos atributos.
    Nenhum atributo pode passar do máximo ou ir abaixo de 0. */
    
    setLimpeza(): number{
        return this.tama.limpeza;
    }

    setEnergia(): number{
        return this.tama.energia;
    }

    setSociedade(): number{
        return this.tama.saciedade;
    }

    getLimpeza(): number{
        return this.tama.limpeza;
    }

    getLimpezaMax(): number{
        return this.tama.limpezaMax;
    }

    getEnergia(): number{
        return this.tama.energia;
    }

    getEnergiaMax(): number{
        return this.tama.energiaMax;
    }

    getSaci(): number{
        return this.tama.saciedade;
    }

    getSaciMax(): number{
        return this.tama.saciedadeMax;
    }


    comendo(){
        /* altera em -1 a energia, +4 a saciedade, -2 a limpeza, +0 diamantes,  +1 a idade */
        this.tama.idade =+ 1;

        if (this.tama.energia > 0) {
           this.tama.energia =- 1;
        } 

        if (this.tama.saciedade == this.tama.saciedadeMax) {
            this.tama.saciedade =+4;
        } 
        
        if (this.tama.limpeza > 0) {
            this.tama.limpeza =- 2;
        } 

        this.morrendo();
    }

    dormindo(){
        /* aumenta energia até o máximo e idade aumenta do número de turnos que o pet dormiu.
# Os outros atributos permanecem inalterados. */
/* Para dormir, precisa ter perdido pelo menos 5 unidades de energia (error: sem sono) */
    this.tama.idade =+ 1;

    if (this.tama.energia = (this.tama.energiaMax - 5)){
        this.tama.energia = this.tama.energiaMax
    }

    console.log("Pet sem sono")

    }

    jogando(){
        /* altera em -2 energia, -1 saciedade, -3 limpeza, +1 diamante, +1 idade. */
        this.tama.idade =+ 1;
        this.tama.diamantes =+ 1;

        if (this.tama.energia > 1) {
           this.tama.energia =- 2 ;
        } 

        if (this.tama.saciedade > 1) {
            this.tama.saciedade =- 1;
        } 
        
        if (this.tama.limpeza > 3) {
            this.tama.limpeza =- 3;
        } 
        
        this.morrendo();
    }

    banho(){
        /* alteram em -3 energia, -1 na saciedade, MAX na limpeza, +0 diamantes, +2 na idade. */
        this.tama.idade =+ 2;

        if (this.tama.energia > 3) {
           this.tama.energia =- 3;
        } 

        if (this.tama.saciedade > 1) {
            this.tama.saciedade =- 1;
        } 
        
        if (this.tama.limpeza > 0){
            this.tama.limpeza = this.tama.limpezaMax
        }

        this.morrendo();

    }

    morrendo(){
        /* Se algum atributo chegar a 0, o pet morre e nenhuma ação pode ser feita a não ser mostrar os dados. */
        if (this.tama.energia <= 0 || this.tama.saciedade <= 0 || this.tama.limpeza <= 0){
            console.log("pet está morto");
        }

        if (this.tama.energia < 0){
            this.tama.energia = 0;
        }

        if (this.tama.saciedade < 0){
            this.tama.saciedade = 0;
        }

        if (this.tama.limpeza < 0){
            this.tama.limpeza = 0;
        }
        
    }

    toString(): string {
        return `E:${this.tama.energia}/${this.tama.energiaMax}, S:${this.tama.saciedade}/${this.tama.saciedadeMax}, L:${this.tama.limpeza}/${this.tama.limpezaMax}, D:${this.tama.diamantes}, I:${this.tama.idade}`;
    }
}

let gochi = new Jogo(new Tamagochi(20, 10, 15))
gochi.jogando();
gochi.comendo();
gochi.dormindo();
gochi.jogando();
gochi.banho();
gochi.jogando();
gochi.comendo();
console.log("" + gochi);
