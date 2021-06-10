//Tuplas são arrays com tipos definidos para cada posição
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//uso simples
var pessoa1;
pessoa1 = ['Heloisa', 'Feminino', 23];
console.log(pessoa1); //mostra a tupla completa
console.log(pessoa1[1]); //mostra a posicao 1 da tupla
//Labels
var pessoa2 = ['Arthur', 'Masculino', 26];
console.log(pessoa2);
//Lista Heterogênea de Tupla
var listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
var listaFrutas2 = __spreadArray([5, true], listaFrutas);
console.log(listaFrutas2);
