
recipiente = "barbijo";
alert(recipiente);

/*Tipos de datos*/

string = "\"Cadena de texto\"";
numbero = 19;
booleano = false

alert(string);

/*Casos especiales de Datos
    Por ejemplo:
    Undefined,
    Null,
    Nan
*/

/* ****Scope de variable - alcance de variables****

const nombre = "dalto";

nombre = "Suarez"; /* No se puede cambiar su valor nunca
alert(nombre);

*/

/* Declaración de multiples variables */
let numero = 1;
let num2 = 2;
let num3 = 3;
/* O puede ser de la otra manera */
numero = 1, num2 = 9, num3 = 5

alert(numero,num2,num3);

// ***Dandole con null y Nan***

let number = null;/* Null es un concepto en javaScript en donde sí guarda el espacio
en memoria y literal es nada, es de tipo vacío */

// NaN = not a number, lo tenemos que hacer únicamente con números
alert(numero * num3);

//Ejemplo de concatenación

let nombre = prompt("¿Cuál es tu nombre?");
alert("Tu nombre es: " + nombre);
let saluda = "¡Hola Pedro!";
let pregunta = "¿Cómo estás? ";

document.write("Mi nombre es: " + nombre + pregunta + "Bien Gracias!");

// Mejor forma de optimizado utilizando Backticks y template

document.write(`Mi nombre es: ${nombre} ${pregunta}`);

//Escape de doble comillas, comillas simples y backticks
document.write(" Hola 'Mundo' " + ' Hola "Mundo" ' + ` hola "Mundo" ` + " Hola `Mundo` ");