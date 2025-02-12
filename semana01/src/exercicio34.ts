import read from "readline-sync";

export default function exercicio34() {
    let maiorMedia = 0;
    let maiorNome;

    for (var i = 0; i < 10; i++) {
        var nome = read.question("Digite o seu nome: ");
        var nota1 = read.questionFloat("Digite a sua primeira nota: ");
        var nota2 = read.questionFloat("Digite a sua segunda nota: ");
        var nota3 = read.questionFloat("Digite a sua terceira nota: ");

        var media = (nota1 + nota2 + nota3) / 3;
        if (i === 0) {
            maiorMedia = media;
            maiorNome = nome;
        }
        if (media > maiorMedia) {
            maiorMedia = media;
            maiorNome = nome;
        }
    }

    console.log(`A maior média ${maiorMedia} é do aluno ${maiorNome}`);
}
