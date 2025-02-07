import read from "readline-sync";

export default function exercicio03() {
    var altura = read.questionInt("Informe a altura do retangulo: ");
    var largura = read.questionInt("Informe a largura do retangulo: ");

    var area = altura * largura;
    console.log(`A area do retangulo é ${area}`);
}
