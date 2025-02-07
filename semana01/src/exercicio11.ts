import read from "readline-sync";

export default function exercicio11() {
    var placa = read.question("Digite a placa: ");
    var ultimo = placa.charAt(placa.length - 1);

    if (ultimo === "0" || ultimo === "1") {
        console.log("O carro não pode rodar na segunda-feira");
    } else if (ultimo === "2" || ultimo === "3") {
        console.log("O carro não pode rodar na terça-feira");
    } else if (ultimo === "4" || ultimo === "5") {
        console.log("O carro não pode rodar na quarta-feira");
    } else if (ultimo === "6" || ultimo === "7") {
        console.log("O carro não pode rodar na quinta-feira");
    } else {
        console.log("O carro não pode rodar na sexta-feira");
    }
}
