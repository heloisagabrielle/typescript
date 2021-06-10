//Tuplas são arrays com tipos definidos para cada posição

//uso simples
let pessoa1: [string,string,number];
pessoa1 = ['Heloisa','Feminino',23];
console.log(pessoa1); //mostra a tupla completa
console.log(pessoa1[1]); //mostra a posicao 1 da tupla

//Labels
let pessoa2: [nome:string, sexo:string, idade:number] = ['Arthur','Masculino', 26];
console.log(pessoa2);

//Lista Heterogênea de Tupla
let listaFrutas: [string, ...string[]]= ['🍍', '🍊', '🍎', '🍉', '🥭'];
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);
