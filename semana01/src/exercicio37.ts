import read from "readline-sync";

export default function exercicio37() {
    var array: number[] = [];
    for (var i = 0; i < 10; i++) {
        array[i] = read.questionInt("Digite um numero: ");
    }
    var pares = array.filter((Number) => Number % 2 == 0);
    console.log(`Os números pares são:\n${pares}`);
}
