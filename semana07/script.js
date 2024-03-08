class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    Vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log("Estoque insuficiente");
        } else {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda de ${quantidadeVendida} unidades de ${this.nome} realizada com sucesso.`);
        }
    }

    Repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`Reposição de ${quantidadeReposta} unidades de ${this.nome} realizada.`);
    }

    MostrarEstoque() {
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis.`);
    }

    AtualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço do produto ${this.nome} foi atualizado para ${novoPreco}.`);
    }
}

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

class Cliente extends Pessoa {
    constructor(nome, idade, profissao, telefone, email, clienteDesde) {
        super(nome, idade, profissao);
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde;
    }

    mostrarInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Profissão: ${this.profissao}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
        console.log(`Cliente desde: ${this.clienteDesde}`);
    }
}
// Exemplo de utilização
const cliente1 = new Cliente("Anaísa", 38, "Estudante", "9999-9999", "anaisa.teste@gmail.com", "2024-03-07");
cliente1.mostrarInformacoes();



const canetaAzul = new Produto("CANETA BIC AZUL", 4.59, 5);
canetaAzul.MostrarEstoque(); // Exibe o estoque inicial

canetaAzul.Vender(2); // Simula a venda de 2 unidades
canetaAzul.MostrarEstoque(); // Exibe o estoque após a venda

canetaAzul.Repor(3); // Simula a reposição de 3 unidades
canetaAzul.MostrarEstoque(); // Exibe o estoque após a reposição

canetaAzul.AtualizarPreco(5.99); // Atualiza o preço da caneta


