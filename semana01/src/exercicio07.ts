import read from "readline-sync";

export default function exercicio07() {
    var valorProduto = read.questionFloat("Digite o valor do produto: ");

    if (valorProduto < 20) {
        var valorVenda = valorProduto * 1.45;
    } else {
        var valorVenda = valorProduto * 1.3;
    }

    console.log(`O valor de venda do produto é de R$${valorVenda}`);
}
