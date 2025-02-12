import read from "readline-sync";

export default function exercicio39() {
    var array: string[] = [];
    for (var i = 0; i < 10; i++) {
        array[i] = read.question("Digite algo: ");
    }
    array.reverse();
    console.log(array);
}
