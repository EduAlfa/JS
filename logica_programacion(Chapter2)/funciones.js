// Creando funciones 
function saludar () {
    let pregunta = prompt("Hola Lucas, ¿Cómo fue tu día?");
    if (pregunta == "bien") {
        alert("Me alegro bastante");
    }
    else if (pregunta == "mal"){
        alert("Una pena");
    } else {
        alertj("Suerte!");
    }
}

//Creando funciones asignandoles en variables


const saludar = function () {
    let pregunta = prompt("Hola Lucas, ¿Cómo fue tu día?");
    if (pregunta == "bien") {
        alert("Me alegro bastante");
    }
    else if (pregunta == "mal"){
        alert("Una pena");
    } else {
        
        alert("Suerte!");
    }
}

const saludar = function (nombre){
    let frase = `Hola ${nombre}, ¿Cómo estás?`;
    document.write(frase);
}

saludar("Eduardo");

// guardando una función en una variable

function cortesia() {
    alert("Hola");
    return("La función se ejecutó correctamente");
}

let saludo = cortesia();
document.write(saludo);