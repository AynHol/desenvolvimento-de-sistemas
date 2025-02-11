import read from "readline-sync";

export default function exercicio19() {
    var num = read.questionInt("Digite um numero: ");
    for (var i = 1; i <= num; i++) {
        console.log(i);
    }
}
