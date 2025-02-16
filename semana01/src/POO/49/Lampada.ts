export default class Lampada {
    constructor(ligada: boolean) {
        this.ligada = ligada;
    }
    private ligada: boolean;

    public ligar() {
        this.ligada = true;
    }
    public desligar() {
        this.ligada = false;
    }
    public status() {
        if (this.ligada === true) {
            console.log(`A Lampada está ligada`);
        } else {
            console.log(`A Lampada está desligada`);
        }
    }
}
