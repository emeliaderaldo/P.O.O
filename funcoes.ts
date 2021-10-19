// funcoes em JavaScript
//function adicionar(a, b){
 //  return a+b;
//}

// funcoes em TyoeScrpt (tem que declarar os parametros, tipos, das variaveis)
function adicionar(a:number, b:number):number{
    return a+b;
}
console.log(adicionar(2, 3));

// outra forma, funcao anonima 

let adicionar1 = function (a:number, b:number):number {
    return a+b;
}
console.log(adicionar1(3, 4));

// Arrown function 
let adicionar2 = (a:number, b:number):number => {
    return a+b;
}
console.log(adicionar2(4, 5));

// funcoes mais curtas, ainda com Arrown 
let adicionar3 = (a:number, b:number):number => (a+b);
console.log(adicionar3(5, 6));
