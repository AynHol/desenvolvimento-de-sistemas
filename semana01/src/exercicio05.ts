import read from "readline-sync";

export default function exercicio05() {
    var celcius = read.questionFloat("Celcius: ");

    var fahrenheit = (celcius * 9) / 5 + 32;
    var kelvin = celcius + 273.15;

    console.log(
        `A conversão de Celcius para Fahrenheit é ${fahrenheit}°F, e para Kelvin é ${kelvin}K`
    );
}
