import read from "readline-sync";

export default function exercicio26() {
    var par = 1;
    var impar = 0;
    for (var i = 0; i < 6; i++) {
        let num = read.questionInt("Digite um numero inteiro +: ");
        if (num % 2 === 0) {
            par *= num;
        } else {
            impar += num;
        }
    }
    console.log(
        `Soma de Ímpares = ${impar}, e a multiplicação dos pares = ${par}`
    );
}
