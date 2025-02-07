import leia from "readline-sync";
import exercicio01 from "./exercicio01";
import exercicio02 from "./exercicio03";
import exercicio03 from "./exercicio02";
import exercicio04 from "./exercicio04";
import exercicio05 from "./exercicio05";
import exercicio06 from "./exercicio06";
import exercicio07 from "./exercicio07";
import exercicio08 from "./exercicio08";
import exercicio09 from "./exercicio09";
import exercicio10 from "./exercicio10";
import exercicio11 from "./exercicio11";
import exercicio12 from "./exercicio12";
import exercicio13 from "./exercicio13";
import exercicio14 from "./exercicio14";

// var pagina = leia.keyInSelect(["Pagina 01", "Pagina 02"]) + 1;

// switch (pagina) {
//     case 1:
//         //
//         break;
//     case 2:
//         //
//         break;
// }

var opcao1 =
    leia.keyInSelect([
        "Exercicio 01",
        "Exercicio 02",
        "Exercicio 03",
        "Exercicio 04",
        "Exercicio 05",
        "Exercicio 06",
        "Exercicio 07",
        "Exercicio 08",
        "Exercicio 09",
        "Exercicio 10",
        "Exercicio 11",
        "Exercicio 12",
        "Exercicio 13",
        "Exercicio 14",
    ]) + 1;

switch (opcao1) {
    case 1:
        exercicio01();
        break;
    case 2:
        exercicio02();
        break;
    case 3:
        exercicio03();
        break;
    case 4:
        exercicio04();
        break;
    case 5:
        exercicio05();
        break;
    case 6:
        exercicio06();
        break;
    case 7:
        exercicio07();
        break;
    case 8:
        exercicio08();
        break;
    case 9:
        exercicio09();
        break;
    case 10:
        exercicio10();
        break;
    case 11:
        exercicio11();
        break;
    case 12:
        exercicio12();
        break;
    case 13:
        exercicio13();
        break;
    case 14:
        exercicio14();
        break;
}
