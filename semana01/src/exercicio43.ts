export default function exercicio43() {
    let array: number[] = [];
    let status = false;
    for (var i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (j !== i && array[i] === array[j]) {
                status = true;
            }
        }
    }
    if (status === true) {
        console.log(`Tem duplicidade ${array}`);
    } else {
        console.log(`Não tem duplicidade ${array}`);
    }
}
