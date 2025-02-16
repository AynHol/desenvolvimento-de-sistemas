import read from "readline-sync";

export default function exercicio33() {
    let bi = "";
    var de = read.questionInt("Digite um numero: ");

    while (de >= 1) {
        var result = Math.trunc(de / 2);
        var resto = de % 2;
        de = result;
        bi = resto + bi;
    }

    console.log(bi);
}
