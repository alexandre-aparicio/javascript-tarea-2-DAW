


function notas() {


    let nota = prompt("Introdueix una nota");
        nota = parseInt(nota);
        

    if (nota > -1 && nota < 3) {

        document.getElementById("demo").innerHTML =
            "Has sacado un " + nota + " Tu nota es: MUY DEFICIENTE";

    } else if (nota > 2 && nota < 5) {
        document.getElementById("demo").innerHTML =
            "Has sacado un " + nota + " Tu nota es: INSUFICIENTE";
    }

    else if (nota == 5) {
        document.getElementById("demo").innerHTML =
            "Has sacado un " + nota + " Tu nota es: APROVAT";
    }

    else if (nota == 6) {
        document.getElementById("demo").innerHTML =
            "Has sacado un " + nota + " Tu nota es: BE";
    }

    else if (nota > 6 && nota < 9) {
        document.getElementById("demo").innerHTML =
            "Has sacado un " + nota + " Tu nota es: NOTABLE";
    }

    else if (nota > 8 && nota < 11) {
        document.getElementById("demo").innerHTML =
            "Has sacado un " + nota + " Tu nota es: EXCEL·LENT";
    } else {
        document.getElementById("demo").innerHTML =
            "NO PASA NADA";
    }











}



