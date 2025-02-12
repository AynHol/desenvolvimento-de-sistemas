import read from "readline-sync";

export default function exercicio35() {
    var array1: number[] = [];
    var array2: number[] = [];

    for (var i = 0; i < 10; i++) {
        var question = read.questionInt("Digite um numero: ");
        array1[i] = question;
        var mult = question * 5;
        array2[i] = mult;
    }

    console.log(`\n${array1}\n---\n${array2}`);
}
