import read from "readline-sync";

export default function exercicio32() {
    let fatorial = 1;
    var num = read.questionInt("Digite um numero: ");

    for (var i = num; i > 0; i--) {
        fatorial *= i;
    }

    console.log(`O fatorial é ${fatorial}`);
}
