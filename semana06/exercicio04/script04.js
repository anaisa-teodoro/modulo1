function salvarUsuario() {
    let nome = window.prompt('Digite seu nome: ');
    let idade = window.prompt('Digite sua idade: ');
    let email = window.prompt('Digite seu email: ');

    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };


    let usuarioJSON = JSON.stringify(usuario);


    localStorage.setItem('user', usuarioJSON);

    console.log('Usuário salvo com sucesso!');
}


salvarUsuario();
