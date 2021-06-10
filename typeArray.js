//Para Array uso dos colchetes
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Declaraçã comum
var frutas = ['Pera', 'Uva', 'Maçã', 'Salada Mista'];
console.log(frutas);
console.log(frutas[2]);
//Exemplo 1 - Declaracao com o tipo Objeto Array
var frutaas = ['🍍', '🍊', '🍎', '🍉', '🥭']; //Pode usar ['abacaxi','Laranja','Maçã','Melancia','Morango']; --Neste cado não aparecem as frutinhas apenas o texto
console.log(frutaas[3]);
//Exemplo 2 - Declaracao com o tipo Objeto Array
var idiomas = ['Portugues', 'Inglês', 'Espanhol'];
console.log(idiomas); //mostra ['Portugues','Inglês','Espanhol']
idiomas.push('Alemão'); //Usando o método push do Objeto Array para inserir mais um idioma no array idiomas
console.log(idiomas); //mostra ['Portugues','Inglês','Espanhol','Alemão']
console.log(idiomas.length); //Usando o método length do Objeto Array para exibir o tamanho do array
//Métodos do Objeto Array
// push :inserir
// pop: deleta o último elemento
// lenght: mostra o tamanho do array
//Spread Operator: Serve para adicionar mais itens no array a partir de um ponto, usa o mesmo espaco de memória
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros), [6, 7, 8, 9, 10]); //agora o array listaNumeros se tornou [0,1,2,3,4,5,6,7,8,9,10]
//Percorrer o array com for
var linguagensArray = new Array('C#', 'Java', 'JavaScript', 'Dart'); //criei o array
function percorrerArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
console.log(percorrerArray(linguagensArray));
