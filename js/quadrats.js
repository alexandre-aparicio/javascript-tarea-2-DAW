


function quadrats() {

    let quadrat;
    let primer = prompt("Introdueix el primer nombre sencer");
    primer = parseInt(primer);

    let segon = prompt("Introdueix un segon nombre sencer (Major que el primer)");
    segon = parseInt(segon);

    console.log(Number.isInteger(primer)+" " + primer );
    console.log(Number.isInteger(segon)+" " + segon );
    
    if (!Number.isInteger(primer) || !Number.isInteger(segon)) {
        document.getElementById("demo").innerHTML =
            "Hay alguno de tus números que no es entero";
    }

    else if (primer >= segon) {
        document.getElementById("demo").innerHTML =
            "El primer no es MENOR que el segon";
    } else {

        document.getElementById("demo").innerHTML =
            "El primer és " + primer + " i el segon " + segon;

        
            while(primer<=segon)  
            {  
                quadrat = (primer * primer);
                 if (quadrat > segon) {
                    break;
                 } else {
                document.write("el nombre és " + primer + " i el seu quadrat és " + quadrat + "<br/>");  

                    primer++;

                 }
                
            } 


    }











}



