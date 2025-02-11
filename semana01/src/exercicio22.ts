import read from "readline-sync";

export default function exercicio22() {
    var menor = 0;
    var maior = 0;
    for (var i = 0; i < 15; i++) {
        var num = read.questionInt("Digite um numero inteiro: ");
        if (i === 0) {
            menor = num;
            maior = num;
        }
        if (num < menor) {
            menor = num;
        }
        if (num > maior) {
            maior = num;
        }
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`);
}
