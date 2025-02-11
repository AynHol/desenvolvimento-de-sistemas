import read from "readline-sync";

export default function exercicio12() {
    let qtdApples = read.questionInt("Informe a quantidade de macas: ");
    let appleValues = qtdApples < 12 ? 0.3 : 0.25;
    let valorCompra = qtdApples * appleValues;
    console.log(`Você vai pagar R$${valorCompra.toFixed(2)}`);
}
