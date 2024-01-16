let valor = true;
let valor2 = true;

let resultado = valor && valor2;
let resultado2 = valor || valor2;
let resultado3 = !valor;

let num1 = 12;
let num2 = 24;

document.write("<h2>Operadores lógicos</h2>")
document.write(resultado + "<br>");
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");

let num3 = 25;
let num4 = 92;
let num5 = 95;

let op = ((num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 !=num3));

document.write("<h2>Ejercicio operadores lógicos </h2>" + (num1 < num2 || num1 == num2));
document.write("<br>" + (op));

let  op2 = (num5 > num2 && num4 > num3) || (!(num1 === num2) || num3 != num3);

document.write("<h2>Ejercicio #2 Operadores lógicos</h2>");
document.write(op2);