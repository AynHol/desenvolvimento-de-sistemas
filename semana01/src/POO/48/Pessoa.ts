export default class Pessoa {
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    private nome: string;
    private idade: number;

    public apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
