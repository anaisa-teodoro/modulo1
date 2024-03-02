// URL do arquivo JSON
const url = 'data.json';

// Usando Fetch API para obter o arquivo JSON
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Acessando o elemento HTML onde o conteúdo será exibido
        const conteudoDiv = document.getElementById('conteudo');

        // Exibindo o conteúdo JSON na página
        conteudoDiv.innerHTML = `
                    <p>Nome: ${data.nome}</p>
                    <p>Idade: ${data.idade}</p>
                    <p>Email: ${data.email}</p>
                `;
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));