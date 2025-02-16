import Funcionario from "./Funcionario";

export default class Gerente extends Funcionario {
    constructor(nome: string, salarioBase: number) {
        super(nome, salarioBase);
        this.bonus = salarioBase * 1.2;
    }
    private bonus: number;

    public getBonus() {
        return this.bonus;
    }
}
