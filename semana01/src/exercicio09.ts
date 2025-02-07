import read from "readline-sync";

export default function exercicio09() {
    var senha = read.question("Digite a sua senha: ");
    if (senha === "1234") {
        console.log("Acesso Permitido!");
    } else {
        console.log("Acesso Negado!");
    }
}
