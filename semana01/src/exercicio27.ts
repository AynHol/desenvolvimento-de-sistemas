import read from "readline-sync";

export default function exercicio27() {
    let condition = 1;
    do {
        var num = read.questionInt("Digite um numero: ");
        condition = num;
        if (num > 100 && num < 200) {
            console.log(num);
        }
    } while (condition !== 0);
}
