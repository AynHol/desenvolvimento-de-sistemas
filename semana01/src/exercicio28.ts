import read from "readline-sync";

export default function exercicio28() {
    var Valentina = 1.5;
    var Joaozinho = 1.4;
    var anos = 0;
    do {
        Valentina += 0.02;
        Joaozinho += 0.03;
        anos += 1;
    } while (Joaozinho <= Valentina);
    console.log(`Joãozinho será maior que Valentina em ${anos} anos!`);
}
