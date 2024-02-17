const calcularMediaNumeros = numeros => {
    const soma = numeros.reduce((adiciona, valorAtual) => adiciona + valorAtual,  0);
    const media = numeros.length >  0 ? soma / numeros.length :  0;
    return media;
  };

  const numeros = [10,  8,  5.5,  4.5];
  const resultado = calcularMediaNumeros(numeros);
  console.log(`A média dos números é: ${resultado}`);