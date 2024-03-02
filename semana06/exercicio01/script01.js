function verificaImparOuPar() {
    let numero = parseFloat(window.prompt('Digite um numero: '));
    const par = new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Número validado é par");
        } else {
            reject("Error: número informado é impar");
        }
    });

    par.then((mensagem) => {
        console.log(mensagem);
    }).catch((err) => {
        console.error(err);
    });
}

verificaImparOuPar();
