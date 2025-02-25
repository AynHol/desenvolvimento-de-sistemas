import read from "readline-sync";

export default function exercicio15() {
    var produto = read.questionFloat("O valor do produto: ");
    var real = read.questionInt("Quantidade de moedas de 1 Real: ");
    var cinquentaCentavos = read.questionInt(
        "Quantidade de moedas de 50 Centavos: "
    );
    var vinteECincoCentavos = read.questionInt(
        "Quantidade de moedas de 25 Centavos: "
    );
    var dezCentavos = read.questionInt("Quantidade de moedas de 10 Centavos: ");
    var cincoCentavos = read.questionInt(
        "Quantidade de moedas de 5 Centavos: "
    );

    var cofrinho =
        real * 1 +
        cinquentaCentavos * 0.5 +
        vinteECincoCentavos * 0.25 +
        dezCentavos * 0.1 +
        cincoCentavos * 0.05;

    console.log(`O valor do produto é: ${produto}`);
    console.log(`O total no cofrinho é: ${cofrinho}`);

    if (cofrinho > produto) {
        console.log("Será possivel comprar o produto!");
    } else {
        console.log("Não será possivel comprar o produto!");
    }
}
