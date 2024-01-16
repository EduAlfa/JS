let numero = 0;
const clave = prompt("Guarde su contraseña: ");

do{
    numero++;
    document.write(numero + "<br>");
} while (clave != prompt("Ingrese su contraseña: "));

// let clave;

// do{
//     clave = prompt("Ingrese la clave: ");
//     document.write(clave + "<br>");
// } while (clave != prompt("Ingrese la clave nuevamente: "));
