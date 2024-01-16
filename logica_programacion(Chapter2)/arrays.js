let frutas = ["Bananas", "Manzana", "Mangostino", "Pera"];

//Mostrando los elementos del array
document.write(`Este es un ejemplo de array ${frutas[1]}`);

//Array Asociativo - es cómo decir un diccionario 
let pc = {
    nombre: "DaltoPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
    modelo: 45697135978
};

let pc2 = ["DaltoPC","Intel Core","16GB","1TB"];

document.write(pc2);
document.write("<br> <h3>Esto es un ejemplo mostrando un elemento de array</h3>" + `"${pc2[1]}"`);
document.write("<br> <h2>Un array asociativo</h2>");
document.write(`${pc["nombre"]} <br>`);

//Declarando variables apartir de un array

let nombre = pc["modelo"];
document.write(nombre);
alert(typeof nombre);

//Mostrando un texto grande con templates

document.write(`
        <br>
        <h2>Esto es un texto grande utilizando los templates en un mismo doc.write</h2>
        El nombre de la pc es: <b>${pc["nombre"]}</b> <br>
        El nombre del procesador es: <b>${pc["procesador"]}</b> <br>
        Cuánta ram: <b>${pc["ram"]}</b> <br>
        Espacio en almacenamiento: <b>${pc["espacio"]}</b> <br>
        Modelo de pc: <b>${pc["modelo"]}</b> <br>`);