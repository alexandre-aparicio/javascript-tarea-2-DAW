


function xifres() {

    let nombre = prompt("Introdueix un nombre sencer");
    nombre = parseInt(nombre);
    let array = [];
    const node = document.getElementById("demo");

    if (!Number.isInteger(nombre)) {
        node.innerHTML =
            "El nombre no és sencer";
    } else {
        document.getElementById("nombre").innerHTML +=
            '<div class="col-md-3 numero_n text-center" >' + nombre + '</div>';
        nombre = nombre.toString()


        let quant = nombre.length;

        for (var i = 0; i < quant; i++) {

            var caracter = nombre.charAt(i);
            caracter = parseInt(caracter);
            node.innerHTML +=
                '<div class="col-md-1 p-4 numero text-center numero" >' + caracter + '</div>';

            array[i] = caracter;
            

        }

        return array;
    }
}

function ordenar (array, opcion) {

    const node = document.getElementById("demo");

    if (opcion == 0){
        node.innerHTML = "";
        array = array.sort(function (a, b) { return a - b });
        for (var i = 0; i< array.length; i++) {

            
            node.innerHTML +=
            '<div class="col-md-1 p-4 numero numero_men text-center" >' + array[i] + '</div>';


        }
    console.log(array);

    } else {
        node.innerHTML = "";
        array = array.sort(function (a, b) { return b - a });
        for (var i = 0; i< array.length; i++) {
            

            node.innerHTML +=
            '<div class="col-md-1 p-4 numero numero_maj text-center" >' + array[i] + '</div>';


        }
    console.log(array);

    }

    
}














