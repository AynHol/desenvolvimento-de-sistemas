import read from "readline-sync";
import Lampada from "./Lampada";

export default function exercicio49() {
    var l = new Lampada(false);
    let status = 0;
    let index = 0;
    do {
        if (read.keyInYN("Voce gostaria de apertar o interruptor?")) {
            if (index % 2 === 0) {
                l.ligar();
            } else {
                l.desligar();
            }
            index++;
            l.status()
        } else {
            status = 1;
        }
    } while (status === 0);
}
