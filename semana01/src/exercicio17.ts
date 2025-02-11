import read from "readline-sync";

export default function exercicio17() {
    var gol1 = read.questionInt("Quantidad de gols do Time1 na partida: ");
    var gol2 = read.questionInt("Quantidad de gols do Time2 na partida: ");
    var gols = Math.abs(gol1 - gol2);
    var win;

    if (gol1 > gol2) {
        win = "Time1";
    } else {
        win = "Time2";
    }

    if (gols === 0) {
        console.log("EMPATE!!!");
    } else if (gols >= 1 && gols <= 3) {
        console.log(`Partida Normal!\nVitoria do ${win}`);
    } else {
        console.log(`!!!Goleada!!!\nVitoria do ${win}`);
    }
}
