import read, { keyInSelect } from "readline-sync";

export default function exercicio29() {
    let maxalt = 0;
    let minalt = 0;
    for (var i = 0; i < 10; i++) {
        console.log("Digite o seu genero:\n1 - Feminino\n2 - Masculino");
        var gen = read.questionInt();
        var altura = read.questionFloat("Digite a sua altura: ");
        if (i === 0) {
            maxalt = altura;
            minalt = altura;
        }
        if (altura > maxalt) {
            maxalt = altura;
        }
        if (altura < minalt) {
            minalt = altura;
        }
        if (gen === 1) {}
    }
}
