// JavaS
let l = [1, 2, 3];
console.log(l);

//TypeScript
let l1:number[] = [2, 3, 4];
console.log(l1);

let l2:string[] = ["eu", "emeli", "João"];
console.log(l2);

//Iteracao com JavaScript
console.log(l1.length); // = len (ler o tamanho da lista)
for(let i:number=0; i<l1.length; i++){ //com e sem tipagem:let i=0; let i:number=0
    console.log(l1[i]);
}

// for in (para indices e valores) nao tem como tipar
for(let i in l1){
    console.log(i, l1[i]);
}

//for .. of (apenas para os valores da lista) nao tem como tipar
for(let e of l1){
    console.log(e);
}

// operacoes com listas
let listas:number[] = [10, 20, 30, 40];

//inserir 
listas.push(50);
console.log(listas);

//remover elementos
listas.splice(2, 3);
console.log(listas);


