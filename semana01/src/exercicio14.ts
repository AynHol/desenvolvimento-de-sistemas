import read from "readline-sync";

export default function exercicio14() {
    console.log("Quanto você deseja doar?");
    var opcao =
        read.keyInSelect(["R$10", "R$25", "R$50", "Valor diferente"]) + 1;

    switch (opcao) {
        case 1:
            console.log("Você doou R$10 para o Criança Esperança!");
            break;
        case 2:
            console.log("Você doou R$25 para o Criança Esperança!");
            break;
        case 3:
            console.log("Você doou R$50 para o Criança Esperança!");
            break;
        case 4:
            var valor = read.questionFloat(
                "Qual a quantidade que voce deseja doar? "
            );
            console.log(`Você doou R$${valor} para o Criança Esperança!`);
            break;
    }
}
