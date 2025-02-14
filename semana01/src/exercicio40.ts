export default function exercicio40() {
    var menor: number[] = [];
    var maior: number[] = [];

    for (var i = 0; i < 30; i++) {
        var temperatura1 = Math.floor(Math.random() * 23) + 2;
        var temperatura2 = Math.floor(Math.random() * 23) + 2;

        if (temperatura1 < temperatura2) {
            maior[i] = temperatura2;
            menor[i] = temperatura1;
        } else {
            maior[i] = temperatura1;
            menor[i] = temperatura2;
        }
    }

    console.log(`Temperatura do mês:\nMaxima: ${maior}\nMinima: ${menor}`);
}
