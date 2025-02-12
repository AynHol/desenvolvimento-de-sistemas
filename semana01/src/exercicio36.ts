import read from "readline-sync";

export default function exercicio36() {
    var array: number[] = [];
    let soma = 0;

    for (var i = 0; i < 5; i++) {
        array[i] = read.questionInt("Digite um numero: ");
        soma += array[i];
    }

    console.log(`\nA soma dos números é ${soma}\nOs números digitados foram:`);
    for (var i = 0; i < 5; i++) {
        console.log(array[i]);
    }
}
