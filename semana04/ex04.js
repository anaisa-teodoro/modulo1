const adicao = (num1, num2, callback) => {
    const resultado = num1 + num2;
    callback(resultado);
};

adicao(10,  5, operacao => console.log(`Resultado da soma é: ${operacao}`));