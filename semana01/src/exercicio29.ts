import read, { keyInSelect } from "readline-sync";

export default function exercicio29() {
    let maxalt = 0;
    let minalt = 0;
    let alturaAntes = 0;
    let alturaAntes2 = 0;
    let numF = 0;
    let numM = 0;
    var alturaF = 0;
    var alturaGeral = 0;
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
        if (gen === 1) {
            numF++;
            alturaF = altura;
            if (i !== 0) {
                alturaAntes = alturaF;
            }
            alturaF += alturaAntes;
        }
        alturaGeral = altura;
        if (i !== 0) {
            alturaAntes2 = alturaGeral;
        }
        alturaGeral += alturaAntes2;
        if (gen === 0) {
            numM++;
        }
    }
    var mediaF = alturaF / numF;
    var mediaGeral = alturaGeral / 10;
    var percentualM = (numM / 10) * 100;

    console.log(
        `A maior altura é ${maxalt}, e a menor é ${minalt}.\nA média de altura das mulheres é ${mediaF}.\nA média da altura da população é ${mediaGeral}.\nO percentual de homens na população é ${percentualM}.`
    );
}
