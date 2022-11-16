function quadrats() {

    let quadrat;
    let primer = prompt("Introdueix el primer nombre sencer");
    primer = parseInt(primer);

    let num_01 = document.getElementById("num_01");
    let num_02 = document.getElementById("num_02");
    let error = document.getElementById("error");

    let segon = prompt("Introdueix un segon nombre sencer (Major que el primer)");
    segon = parseInt(segon);
    
    if (!Number.isInteger(primer) || !Number.isInteger(segon)) {
        
        num_01.innerHTML = '?';
        num_02.innerHTML = '?';
        document.getElementById("error").innerHTML ="Qualcun del dos nombres no es sencer";
    }

    else if (primer >= segon) {
        num_01.innerHTML = '?';
        num_02.innerHTML = '?';
        error.innerHTML = 'El nombre primer no és menor que el segon';
    } else {
        
        num_01.innerHTML = primer;
        num_02.innerHTML = segon;

            let resultats = false;
            while(primer<=segon)  
            {  
                quadrat = (primer * primer);
                 if (quadrat > segon) {
                    break;
                 } else {

                    document.getElementById("quadrats").innerHTML += '<div class="col-md-1 p-4 numero numero_men text-center" >' + primer + '</div>';
                    primer++;
                    resultats = true;

                 }
                
            } 

            if (!resultats) {
                error.innerHTML = 'No hi ha resultats';
            } else {
                document.getElementById("encabezado").innerHTML = 'Resultats';
            }


    }











}



