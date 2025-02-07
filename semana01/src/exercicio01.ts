import read from 'readline-sync';

export default function exercicio01() {
    let numero = read.questionInt("DIGITE UM NUMERO: ");
    console.log(`O NUMERO DIGITADO: ${numero}`);
    
    let antecessor = --numero;
    console.log(`O ANTECESSOR É: ${antecessor}`);
}