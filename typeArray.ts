//Para Array uso dos colchetes

//Declaraçã comum de array
let frutas: string[] = ['Pera','Uva','Maçã','Salada Mista'];
console.log(frutas); //mostra o array todo
console.log(frutas[2]); //mostra a posicao 2 do array

//Exemplo 1 - Declaracao com o tipo Objeto Array
let frutaas: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];  //Pode usar ['abacaxi','Laranja','Maçã','Melancia','Morango']; --Neste cado não aparecem as frutinhas apenas o texto
console.log(frutaas[3]);

//Exemplo 2 - Declaracao com o tipo Objeto Array
let idiomas: Array<string> = ['Portugues','Inglês','Espanhol'];
console.log(idiomas); //mostra ['Portugues','Inglês','Espanhol']
idiomas.push('Alemão'); //Usando o método push do Objeto Array para inserir mais um idioma no array idiomas
console.log(idiomas); //mostra ['Portugues','Inglês','Espanhol','Alemão']
console.log(idiomas.length); //Usando o método length do Objeto Array para exibir o tamanho do array

//Métodos do Objeto Array
// push :inserir
// pop: deleta o último elemento
// lenght: mostra o tamanho do array
// top:

//Spread Operator: adiciona mais itens no array a partir de um ponto, usa o mesmo espaco de memória
let listaNumeros = [0,1,2,3,4,5];
listaNumeros = [...listaNumeros, 6,7,8,9,10]; // ... é o spread operator
console.log(listaNumeros); //agora o array listaNumeros se tornou [0,1,2,3,4,5,6,7,8,9,10]

//Percorrer o array com for
let linguagensArray:string[] = new Array('C#','Java','JavaScript','Dart'); //criei o array

function percorrerArray(array:string[]){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

console.log(percorrerArray(linguagensArray)); 

