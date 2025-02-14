import read from "readline-sync";
import Pessoa from "./Pessoa";

export default function exercicio48() {
    var nome = read.question("Digite o seu nome: ");
    var idade = read.questionInt("Digite a sua idade: ");
    var p = new Pessoa(nome, idade);

    p.apresentar();
}
