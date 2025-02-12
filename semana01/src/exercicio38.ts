import read from "readline-sync";

export default function exercicio38() {
    var array: number[] = [];
    for (var i = 0; i < 10; i++) {
        array[i] = read.questionInt("Digite um numero: ");
    }
    var dez = array.filter((Number) => Number >= 10);
    console.log(`Os números maiores ou iguais a 10 são:\n${dez}`);
}
