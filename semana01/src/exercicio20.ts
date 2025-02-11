import read from "readline-sync";

export default function exercicio20() {
    var num = read.questionInt("Digite um numero: ");
    for (var i = num; i >= 0; i--) {
        console.log(i);
    }
}
