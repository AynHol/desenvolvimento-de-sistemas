import read from "readline-sync";

export default function exercicio13() {
    var cliente1 = read.question("Nome do cliente: ");
    var pagamento1 = read.questionFloat("Valor pago: ");
    var cliente2 = read.question("Nome do cliente: ");
    var pagamento2 = read.questionFloat("Valor pago: ");

    var total = pagamento1 + pagamento2;
    var media = total / 2;

    console.log(`O valor total pago pelos clientes foi de R$${total}`);
    console.log(`O valor médio das compras efetuadas foi de R$${media}`);

    if (pagamento1 > 20 && pagamento2 <= 20) {
        console.log(
            `O cliente ${cliente1} efetuou uma compra maior que R$20!!`
        );
        return;
    }
    if (pagamento2 > 20 && pagamento1 <= 20) {
        console.log(
            `O cliente ${cliente2} efetuou uma compra maior que R$20!!`
        );
        return;
    }
    if (pagamento1 > 20 && pagamento2 > 20) {
        console.log(
            `Os clientes ${cliente1} e ${cliente2} efetuaram compras maiores que R$20!!!`
        );
        return;
    }
}
