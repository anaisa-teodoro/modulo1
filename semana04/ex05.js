
let contadorRuim =  0;
let usuarioAtual =  1;

while (usuarioAtual <=  4) {
let avaliacao = prompt("Digite os 3 tipos de avaliação da série 'Stranger Things' que você considera: ruim, bom ou excelente?");

if (avaliacao.toLowerCase() === "ruim") {
contadorRuim++;
}

usuarioAtual++;
}

alert(O número de pessoas que classificaram a série como ruim é: ${contadorRuim});
