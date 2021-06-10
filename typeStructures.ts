//Aplicação de TypeScript em algumas estruturas

//Variável
let nome: string = 'Pedro Braga';
console.log(nome);

//Array
let games: string[] = ['TLOU2', 'GOW4','Goat simulator', 'Bomba Patch', 'Apex', 'KOF', 'Warzone'] 
console.log(games)

//Objeto
let carro: {
    nome:string
    ano: number
    preco: number
};
carro = {nome:'Gol Quadrado', ano: 1994, preco: 15 }
console.log(carro);

//Function
function multiplicarNumero(num1: number, num2:number){
    return num1 * num2;
}

console.log(multiplicarNumero(2,5))


carro = {nome:'HB20', ano:2015, preco:15}
console.log(carro);


//Function
function multiplicar(n1:number, n2:number){
    return n1 * n2;
}
console.log(multiplicar(15,4));
