export default function exercicio42() {
    let array1: number[] = [];
    let array2: number[] = [];
    let array3: number[] = [];
    let array4: number[] = [];

    for (var i = 0; i < 9; i++) {
        array1[i] = Math.floor(Math.random() * 100);
        array2[i] = Math.floor(Math.random() * 100);
        array3[i] = Math.floor(Math.random() * 100);
    }
    for (var i = 0; i < 9; i++) {
        if (i >= 0 && i <= 2) {
            array4[i] = array1[i];
        } else if (i >= 3 && i <= 5) {
            array4[i] = array2[i];
        } else {
            array4[i] = array3[i];
        }
    }

    console.log(
        `1 vetor: ${array1}\n2 vetor: ${array2}\n3 vetor: ${array3}\n4 vetor: ${array4}`
    );
}
