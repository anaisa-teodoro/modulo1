const produtos = {
    Hortifruti: 0,
    Laticínios: 0,
    Carnes: 0,
    Peixes: 0,
    Aves: 0,
  };
  
  let continuar = true;
  while (continuar) {
    const produto = prompt(
      "Qual produto você deseja comprar?\n(1)Hortifruti\n(2)Laticínios\n(3)Carnes\n(4)Peixes\n(5)Aves\n(6)Fechar pedido"
    );
  
    if (produto >= 1 && produto <= 5) {
      const produtoStr = Object.keys(produtos)[produto - 1];
  
      const quantidade = prompt(
        "Quantos itens de " + produtoStr + " você irá comprar?"
      );
  
      if (quantidade > 0) {
        produtos[produtoStr] += parseInt(quantidade);
      } else {
        alert("Quantidade inválida!");
      }
    } else if (produto == 6) {
      continuar = false;
    } else {
      alert("Produto inválido!");
    }
  }
  
  let maiorProduto = "";
  
  let maiorQuantidade = 0;
  
  for (let p in produtos) {
    if (produtos[p] > maiorQuantidade) {
      maiorProduto = p;
      maiorQuantidade = produtos[p];
    }
  }
  
  document.write(
    "O produto que o cliente pegou em maior quantidade foi " +
      maiorProduto +
      " com " +
      maiorQuantidade +
      " itens."
  );