//[M1S05] Ex 1 - Acesso simples
const prompt = require("prompt-sync")({ sigint: true });
const frutas = [];
for (let i = 0; i < 3; i++) {
  frutas.push(prompt("Digite o nome da fruta: "))
}

console.log(frutas[1]);

// [M1S05] Ex 2 - Adicionar e Remover Elementos
for (let i = 0; i < 3; i++) {
  let fruta = prompt(`Digite a fruta ${i + 1}: `);
  frutas.push(fruta);
}

console.log(`A segunda fruta é: ${frutas[1]}`);

let novaFruta = prompt("Digite uma nova fruta: ");
frutas.push(novaFruta);
frutas.shift();

console.log(`O array atualizado é: ${frutas}`);

// [M1S05] Ex 3 - Iteração Básica
for (let i=0; i<5; i++){
const addNum= prompt("Digite um numero: ")
numeros.push(addNum)
}
for(const numeros of numeros){
console.og(numeros);
}

// [M1S05] Ex 4 - Soma de Elementos
for (let i=0; i<5; i++){
const numero = parseInt(prompt(`Digite o ${i + 1} número:`))
}
for(let i=0; i<5; i++){
console.log(`O ${i + 1} número é ${numeros}[i]`)
}

const soma = numeros.reduce((acumulador, numeroAtual) =>{
return acumulador + numeroAtual
},0)

console.log("A soma dos numeros é: ", soma)

// [M1S05] Ex 5 - Ordenação Crescente
const numerosOrdenados = numeros.slice().sort((numero1, numero2) => numero1 - numero2);

console.log(numerosOrdenados);

// [M1S05] Ex 6 - Filtragem de Elementos
const pares = numeros.filter(numeroAtual => numeroAtual % 2 === 0);

console.log(pares);
//[M1S05] Ex 7 - Mapeamento de Elementos
const quadrados = numeros.map(numeroAtual => numeroAtual ** 2);
console.log("O array dos quadrados é ", quadrados)

//[M1S05] Ex 8 - Github
/*
Adicione todos os exercícios ao Github. Após isso adicione o link da resolução dos exercícios em cada card.
URL repo da semana 5
*/