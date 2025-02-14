import read from "readline-sync";

export default function exercicio44() {
    let array: number[] = [];
    let status = 0;

    do {
        var num = read.questionInt("Digite um valor par: ");
        if (num % 2 === 0) {
            status++;
            array.push(num);
        } else {
            console.log("\nDigite um número par!");
        }
    } while (status !== 4);

    console.log(array);
}
