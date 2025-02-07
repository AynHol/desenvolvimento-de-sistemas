import read from 'readline-sync';

export default function exercicio02(){
    let anos = read.questionInt("INFORME OS ANOS: ")
    let meses = read.questionInt("INFORME OS MESES: ")
    let dias = read.questionInt("INFORME OS DIAS: ")

    let diasTotais = (anos * 365) + (meses * 30) + dias;

    console.log(diasTotais);
}