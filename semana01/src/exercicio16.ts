import read from "readline-sync";

export default function exercicio16() {
    var idade = read.questionInt("Qual a sua idade? ");

    if (idade >= 18) {
        var nome = read.question("Seu nome completo: ");
        console.log(`${nome} foi cadastrado na viagem`);
    } else {
        console.log("Menor de idade, permissão dos pais necessario!");
        var permissao = read.keyInSelect(["Sim", "Nao"]) + 1;
        switch (permissao) {
            case 1:
                var nome = read.question("Seu nome completo: ");
                console.log(`${nome} foi cadastrado na viagem`);
                break;
            case 2:
                console.log(`Sem permissão para ir na viagem`);
        }
    }
}
