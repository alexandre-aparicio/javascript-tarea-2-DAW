


function xifres() {
    
    let nombre = prompt("Introdueix un nombre sencer");
    nombre = parseInt(nombre);
    let array = [];

    if (!Number.isInteger(nombre)) {
        document.getElementById("demo").innerHTML =
            "El nombre no és sencer no es entero";
    } else {

        nombre = nombre.toString()


        let quant = nombre.length;

        for (var i = 0; i< quant; i++) {

            var caracter = nombre.charAt(i);
            caracter = parseInt(caracter);

            array[i] = caracter;

            array = array.sort(function(a, b){return a - b});
            console.log(caracter);

        }   
        
        console.log(array);

        document.getElementById("demo").innerHTML =
            "El nombre té " + quant;

    }


    }














