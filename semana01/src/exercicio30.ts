import read from "readline-sync";

export default function exercicio30() {
    let modo = 2;
    let status = 1;
    let chutes = 0;
    let modoPVE = 3;
    let statusPVE = 1;

    do {
        let dificuldade = read.keyInSelect(["PvP", "PvE"]) + 1;
        switch (dificuldade) {
            case 1:
                if (read.keyInYN("(PvP)\nVoce tem certeza?")) {
                    modo = 0;
                    status = 0;
                } else {
                    status = 1;
                }
                break;
            case 2:
                if (read.keyInYN("(PvE)\nVoce tem certeza?")) {
                    modo = 1;
                    status = 0;
                } else {
                    status = 1;
                }
                break;
        }
    } while (status !== 0);

    function game(Numero: number) {
        do {
            var chute = read.questionInt("Digite um numero: ");
            chutes++;
            if (chute < Numero) {
                console.log("O número chutado foi mais alto!");
            }
            if (chute > Numero) {
                console.log("O número chutado foi mais baixo!");
            }
        } while (chute !== Numero);
        return chutes;
    }

    if (modo === 0) {
        var numPVE = read.questionInt("Digite o numero: ", {
            hideEchoBack: true,
        });
        game(numPVE);
        console.log(`Você acertou em ${chutes} chutes!!!`);
    } else {
        do {
            let dificuldadePVE =
                read.keyInSelect(["Facil", "Medio", "Dificil"]) + 1;
            switch (dificuldadePVE) {
                case 1:
                    if (read.keyInYN("(Facil)\nVoce tem certeza?")) {
                        modoPVE = 0;
                        statusPVE = 0;
                    } else {
                        statusPVE = 1;
                    }
                    break;
                case 2:
                    if (read.keyInYN("(Medio)\nVoce tem certeza?")) {
                        modoPVE = 1;
                        statusPVE = 0;
                    } else {
                        statusPVE = 1;
                    }
                    break;
                case 3:
                    if (read.keyInYN("(Dificil)\nVoce tem certeza?")) {
                        modoPVE = 2;
                        statusPVE = 0;
                    } else {
                        statusPVE = 1;
                    }
                    break;
            }
        } while (statusPVE !== 0);
        if (modoPVE === 0) {
            var numRan = Math.floor(Math.random() * 1001);
            game(numRan);
            console.log(`Você acertou em ${chutes} chutes!!!`);
        } else if (modoPVE === 1) {
            var numRan = Math.floor(Math.random() * 10001);
            game(numRan);
            console.log(`Você acertou em ${chutes} chutes!!!`);
        } else {
            var numRan = Math.floor(Math.random() * 100001);
            game(numRan);
            console.log(`Você acertou em ${chutes} chutes!!!`);
        }
    }
}
