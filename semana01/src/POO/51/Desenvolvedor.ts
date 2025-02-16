import Funcionario from "./Funcionario";

export default class Desenvolvedor extends Funcionario {
    constructor(nome: string, salarioBase: number) {
        super(nome, salarioBase);
        this.bonus = salarioBase * 1.1;
    }
    private bonus: number;

    public getBonus() {
        return this.bonus;
    }
}
