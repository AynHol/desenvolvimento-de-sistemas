import read from "readline-sync";
import Funcionario from "./Funcionario";
import Desenvolvedor from "./Desenvolvedor";
import Gerente from "./Gerente";

export default function exercicio51() {
    var nome = read.question("Digite o seu nome: ");
    var salario = read.questionFloat("Digite o seu salario: ");
    var f = new Funcionario(nome, salario);
    var status = 0;
    let dFinal = 0;
    let gFinal = 0;

    console.log("Escolha a sua função:");
    let func = read.keyInSelect(["Desenvolvedor", "Gerente"]) + 1;
    switch (func) {
        case 1:
            var d = new Desenvolvedor(nome, salario);
            dFinal = d.getBonus();
            status = 0;
            break;
        case 2:
            var g = new Gerente(nome, salario);
            gFinal = g.getBonus();
            status = 1;
            break;
    }

    if (status === 0) {
        console.log(`O seu salario final é ${dFinal}`);
    } else {
        console.log(`O seu salario final é ${gFinal}`);
    }
}
