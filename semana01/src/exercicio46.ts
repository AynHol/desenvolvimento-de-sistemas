export default function exercicio46() {
    let jogar = 1000;
    let index = 0;
    let um = 0,
        dois = 0,
        tres = 0,
        quatro = 0,
        cinco = 0,
        seis = 0;

    while (index < jogar) {
        var rolado = Math.floor(Math.random() * 6);
        rolado === 0
            ? um++
            : rolado === 1
            ? dois++
            : rolado === 2
            ? tres++
            : rolado === 3
            ? quatro++
            : rolado === 4
            ? cinco++
            : seis++;
        index++;
    }

    function calculoPorcentagem(qtdRolado: number) {
        return (qtdRolado / jogar) * 100;
    }

    var umPorc = calculoPorcentagem(um);
    var doisPorc = calculoPorcentagem(dois);
    var tresPorc = calculoPorcentagem(tres);
    var quatroPorc = calculoPorcentagem(quatro);
    var cincoPorc = calculoPorcentagem(cinco);
    var seisPorc = calculoPorcentagem(seis);

    console.log(`Um - Quantidade: ${um} - Porcentagem: ${umPorc.toFixed(2)} %`);
    console.log(`Dois - Quantidade: ${dois} - Porcentagem: ${doisPorc.toFixed(2)} %`);
    console.log(`Três - Quantidade: ${tres} - Porcentagem: ${tresPorc.toFixed(2)} %`);
    console.log(`Quatro - Quantidade: ${quatro} - Porcentagem: ${quatroPorc.toFixed(2)} %`);
    console.log(`Cinco - Quantidade: ${cinco} - Porcentagem: ${cincoPorc.toFixed(2)} %`);
    console.log(`Seis - Quantidade: ${seis} - Porcentagem: ${seisPorc.toFixed(2)} %`);

    umPorc > 22 ||
    doisPorc > 22 ||
    tresPorc > 22 ||
    quatroPorc > 22 ||
    cincoPorc > 22 ||
    seisPorc > 22
        ? console.log(`O dado é viciado!`)
        : console.log("O dado não é viciado!");
}
