import read from "readline-sync";

export default function exercicio18() {
    let nome = read.question("Nome do funcionario: ");
    let fixo = read.questionFloat("Salario fixo: ");
    let dependentes = read.questionInt("Quantidade de dependentes: ");

    if (dependentes === 0) {
        var dep = 1.02;
    } else if (dependentes === 1) {
        var dep = 1.05;
    } else if (dependentes === 2) {
        var dep = 1.07;
    } else if (dependentes === 3) {
        var dep = 1.1;
    } else {
        var dep = 1.15;
    }
    var salario = fixo * dep;

    console.log(`O salário final de ${nome} é de R$${salario.toFixed(2)}`);
}
