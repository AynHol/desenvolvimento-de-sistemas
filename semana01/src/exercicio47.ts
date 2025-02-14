import read from "readline-sync";

export default function exercicio47() {
    let gabarito: string[] = [];
    let aluno: string[] = [];
    let index = 0;
    let index2 = 0;
    let certo = 0;

    console.log("--- Professor ---");
    do {
        var gabaritoProf = read.question("Digite a letra correta: ", {
            hideEchoBack: true,
        });
        if (
            gabaritoProf === "a" ||
            gabaritoProf === "b" ||
            gabaritoProf === "c" ||
            gabaritoProf === "d" ||
            gabaritoProf === "e"
        ) {
            index++;
            gabarito.push(gabaritoProf);
        } else {
            console.log(`Somente (a - b - c - d- e)`);
        }
    } while (index !== 10);

    console.log("\n--- Aluno ---");
    do {
        var gabaritoAluno = read.question("Digite a resposta do gabarito: ");
        if (
            gabaritoAluno === "a" ||
            gabaritoAluno === "b" ||
            gabaritoAluno === "c" ||
            gabaritoAluno === "d" ||
            gabaritoAluno === "e"
        ) {
            index2++;
            aluno.push(gabaritoAluno);
        } else {
            console.log(`Somente (a - b - c - d- e)`);
        }
    } while (index2 !== 10);

    for (var i = 0; i < 10; i++) {
        if (gabarito[i] === aluno[i]) {
            certo++;
        }
    }

    var nota = certo * 10;
    console.log(`\nA nota do aluno é ${nota}/100\n`);
    console.log(`Resposta do Gabarito:\n${gabarito}\n\nResposta do Aluno:\n${aluno}`);
}
