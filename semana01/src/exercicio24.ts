import read from "readline-sync";

export default function exercicio24() {
    var num = read.questionInt("Digite um numero para a sua tabuada: ");
    for (var i = 1; i < 11; i++) {
        var tabuada = num * i;
        console.log(tabuada);
    }
}
