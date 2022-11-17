function notas() {

    let nota = prompt("Introdueix una nota");
    nota = parseInt(nota);
    let node_nota = document.getElementById("nota");    
    let node_qualificacio = document.getElementById("qualificacio");   

    if (nota > -1 && nota < 3) {
        node_nota.innerHTML = nota;
        node_qualificacio.innerHTML  = "Molt Deficient";
    } 
    
    else if (nota > 2 && nota < 5) {
        node_nota.innerHTML = nota;
        node_qualificacio.innerHTML  = "Insuficient";
    }

    else if (nota == 5) {
        node_nota.innerHTML = nota;
        node_qualificacio.innerHTML  = "Aprovat";        
    }

    else if (nota == 6) {
        node_nota.innerHTML = nota;
        node_qualificacio.innerHTML  = "Bé";
    }

    else if (nota > 6 && nota < 9) {
        node_nota.innerHTML = nota;
        node_qualificacio.innerHTML  = "Notable";
    }

    else if (nota > 8 && nota < 11) {
        node_nota.innerHTML = nota;
        node_qualificacio.innerHTML  = "Excel·lent";
    } 
    
    else {
        node_nota.innerHTML = "?";
        node_qualificacio.innerHTML  = "No has introduit un nombre vàlid";
    }
}



