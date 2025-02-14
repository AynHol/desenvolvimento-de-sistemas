export default function exercicio41() {
    let pai: number[] = [];
    let mae: number[] = [];
    let filho: number[] = [];

    for (var i = 0; i < 50; i++) {
        pai[i] = Math.floor(Math.random() * 100);
        mae[i] = Math.floor(Math.random() * 100);
    }
    for (var i = 0; i < 50; i++) {
        if (i % 2 === 0) {
            filho[i] = pai[i];
        } else {
            filho[i] = mae[i];
        }
    }

    console.log(`Pai: ${pai}\nMãe: ${mae}\nFilho: ${filho}`);
}
