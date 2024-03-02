/*function getUserInfo() {
    // Retorna uma nova Promise
    return new Promise((resolve, reject) => {
        let user;
        // Define um atraso de 2000 milissegundos
        setTimeout(() => {
            // Cria um objeto user com propriedades nome, idade e email
            user = {
                nome: "Anaísa",
                idade: 38,
                email: "anaisateodoro@hotmail.com",
            };
            // Resolve a promessa com o objeto user
            resolve(user);
        }, 2000);
    });
}

function playGetUser() {
    return getUserInfo();
}
playGetUser().then(userInfo => {
    console.log(userInfo);
});
*/
function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                nome: "Anaísa",
                idade: 38,
                email: "anaisateodoro@hotmail.com",
            };
            resolve(user);
        }, 2000);
    });
}

async function playGetUser() {
    let retorno = await getUserInfo();
    console.log(retorno);
}

playGetUser();