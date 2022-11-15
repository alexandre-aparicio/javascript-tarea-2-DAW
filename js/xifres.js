


function xifres() {
    
    let nombre = prompt("Introdueix un nombre sencer");
    nombre = parseInt(nombre);
    let array = [];
    const node = document.getElementById("demo");

    if (!Number.isInteger(nombre)) {
        document.getElementById("demo").innerHTML =
            "El nombre no és sencer";
    } else {
        document.getElementById("nombre").innerHTML +=
        '<div class="col-md-3 numero_n" >' + nombre + '</div>';
        nombre = nombre.toString()


        let quant = nombre.length;

        for (var i = 0; i< quant; i++) {

            var caracter = nombre.charAt(i);
            caracter = parseInt(caracter);
            document.getElementById("demo").innerHTML +=
            '<div class="col-md-1 numero" >' + caracter + '</div>';

            array[i] = caracter;

            array = array.sort(function(a, b){return a - b});         



        }   
        
        for (var i = 0; i< array.length; i++) {

            document.getElementById("ordenat").innerHTML +=
            '<div class="col-md-1 numero" >' + array[i] + '</div>';


        }
        console.log(array);

        
            

    }


    }














