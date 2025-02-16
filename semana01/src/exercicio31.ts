import read from "readline-sync";

export default function exercicio31() {
    let fdigito = 0;
    let sdigito = 1;
    let tdigito;
    let resultado = "0 - 1";
    var num = read.questionInt("Digite um numero: ");

    for (var i = 2; i < num; i++) {
        tdigito = fdigito + sdigito;
        fdigito = sdigito;
        sdigito = tdigito;
        resultado = resultado + " - " + tdigito;
    }

    console.log(resultado);
}
