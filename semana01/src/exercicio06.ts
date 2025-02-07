import read from "readline-sync";

export default function exercicio06() {
    var valor1 = read.questionFloat("Digite o valor da corrida 1: ");
    var valor2 = read.questionFloat("Digite o valor da corrida 2: ");
    var valor3 = read.questionFloat("Digite o valor da corrida 3: ");
    var valor4 = read.questionFloat("Digite o valor da corrida 4: ");
    var valor5 = read.questionFloat("Digite o valor da corrida 5: ");

    var total = valor1 + valor2 + valor3 + valor4 + valor5;
    var desconto = total * 0.75;

    console.log(`O valor arrecadado pelo motorista é de R$${desconto}`);
}
