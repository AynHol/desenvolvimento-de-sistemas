import read from "readline-sync";

export default function exercicio10() {
    var num = read.questionInt("Digite um numero: ");
    if (num % 2 === 0) {
        console.log(`O número ${num} é Par!!!`);
    } else {
        console.log(`O número ${num} é Ímpar!!!`);
    }
}
