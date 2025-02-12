import read from 'readline-sync'

//!!!!!!!!!!!!!!!!!!!NÃO TERMINADO!!!!!!!!!!!!!!!!!!!

export default function exercicio15() {
    var produto = read.questionFloat("O valor do produto: ")
    var real = read.questionInt("Quantidade de moedas de 1 Real: ")
    var cinquentaCentavos = read.questionInt("Quantidade de moedas de 50 Centavos: ")
    var vinteECincoCentavos = read.questionInt("Quantidade de moedas de 25 Centavos: ")
    var dezCentavos = read.questionInt("Quantidade de moedas de 10 Centavos: ")
    var cincoCentavos = read.questionInt("Quantidade de moedas de 5 Centavos: ")

    var cinquenta = 0.50
    var vinteECinco= 0.25
    var dez = 0.10
    var cinco = 0.05

    var CQC = 0
    var VEC = 0
    var DC = 0
    var CC = 0

    for(var i = 0; i < cinquentaCentavos; i++){
        CQC =+ cinquenta
    }
    for(var i = 0; i < vinteECincoCentavos; i++){
        VEC =+ vinteECinco
    }
    for(var i = 0; i < dezCentavos; i++){
        DC =+ dez
    }
    for(var i = 0; i < cincoCentavos; i++){
        CC =+ cinco
    }

    var total = real + CQC + VEC + DC + CC
    

    console.log(total)
}