class Fone {
private id: string;
private telefone: string;

public constructor( id: string, telefone: string){
    this.id = id;
    this.telefone = telefone;
}

public toString() {
    return `${this.id}:${this.telefone}`;
}

public static validate(telefone: string): boolean{
    let valido = "0123456789()-.";
        for (let i = 0; i < telefone.length; i++) {
            if (valido.indexOf(telefone[i]) == -1) {
              // console.log("erro: telefone inválido.")
                return false;
            }
        }
        return true;
    }

public getId(){
    return this.id;
}

public setId(id: string): string{
    return id;
}

public getTelefone(){
    return this.telefone;
}

public setTelefone(telefone: string): string{
    return telefone;
} 


public isValid(): boolean{
   if (Fone.validate(this.telefone)){
        console.log("Telefone Invalido"); 
        return true;
   }
    return false;
}

}

class Contato {
private fone: Fone;    
private nome: string;
private fones: Array<Fone>; 

public constructor(nome: string, fones: Array<Fone>){
    this.nome = nome;
    this.fones = new Array<Fone>();
    for (let fone of fones) {
        this.addFone(fone);
    }
}

public toString() {
    return `${this.nome}:${this.fones.join(",")}`;
}

public addFone(fone: Fone): void{
//Se fone for válido, insira no atributo fones
    //Se não, informe o erro
    if (fone.isValid()){
        this.fones.push(fone);
        //console.log(this.fones);
    } else {
    console.log("Não foi possivel adicionar telefone")
}
}
public romoveFone(index: number): void{
//Se o índice existir no ArrayList, remova o telefone com esse índice
    this.fones.splice(index, 1);  
}

}

let fones = [new Fone("play", "40028922"), new Fone("claro", "9466bc"), new Fone("fixo", "35832500")]
let emeli = new Contato("Emeli",fones);
console.log("" + emeli);
emeli.romoveFone(2);
console.log("" + emeli);
