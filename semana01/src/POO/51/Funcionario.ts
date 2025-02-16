export default class Funcionario {
    constructor(nome: string, salarioBase: number) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    private nome: string;
    private salarioBase: number;

    public salarioFinal(salarioBase: number, bonus: number) {
        return salarioBase * bonus;
    }
}
