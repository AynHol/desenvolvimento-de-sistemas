import read from "readline-sync";

export default function exercicio04() {
    let totalVotos = read.questionInt("Informe o numero de eleitores: ");
    let brancos = read.questionInt("Informe o numero de votos brancos: ");
    let nulos = read.questionInt("Informe o numero de votos nulos: ");

    let validos = totalVotos - (brancos + nulos);

    console.log(`Total de votos: ${totalVotos.toFixed(1)}`);
    console.log(`Total de votos validos: ${validos.toFixed(1)}`);
    console.log(`Total de votos brancos: ${brancos.toFixed(1)}`);
    console.log(`Total de votos nulos: ${nulos.toFixed(1)}`);
}
