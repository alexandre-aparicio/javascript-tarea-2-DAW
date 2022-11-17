function xifres() {

    let nombre = prompt("Introdueix un nombre sencer");
    nombre = parseInt(nombre);
    let array = [];
    const node = document.getElementById("demo");
    // Si no és sencer
    if (!Number.isInteger(nombre)) {
        node.innerHTML = "El nombre no és sencer";
    } else {
        document.getElementById("nombre").innerHTML += '<div class="col-md-3 numero_n text-center" >' + nombre + '</div>';
        //Converteix a String
        nombre = nombre.toString()

        let quant = nombre.length;

        for (var i = 0; i < quant; i++) {

            var caracter = nombre.charAt(i);
            caracter = parseInt(caracter);
            node.innerHTML +='<div class="col-md-1 p-4 numero text-center numero" >' + caracter + '</div>';
            //Fica el caracter dins l'array
            array[i] = caracter;
        }

        return array;
    }
}

function ordenar(array, opcion) {

    const node = document.getElementById("demo");

    if (opcion == 0) {
        node.innerHTML = "";
        // Funció per ordenar l'array de menor a major
        array = array.sort(function(a, b) {return a - b});
        for (var i = 0; i < array.length; i++) {

            node.innerHTML +='<div class="col-md-1 p-4 numero numero_men text-center" >' + array[i] + '</div>';
        }

    } else {
        node.innerHTML = "";

        // Funció per ordenar l'array de major a menor
        array = array.sort(function(a, b) {return b - a});
        
        for (var i = 0; i < array.length; i++) {

            node.innerHTML +='<div class="col-md-1 p-4 numero numero_maj text-center" >' + array[i] + '</div>';
        }
    }
}