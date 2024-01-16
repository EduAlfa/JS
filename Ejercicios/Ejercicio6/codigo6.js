const sumar = (num1, num2)=> {
    return num1 + num2;
}
const restar = (num1, num2)=> {
    return num1 - num2;
}
const multiplicar = (num1, num2)=> {
    return num1 * num2;
}
const dividir = (num1, num2)=> {
    return num1 / num2;
}

alert(`Calculadora`);

let i = 0;
do{
    operacion = prompt("1.Sumar 2.Restar 3.Multiplicar 4. Dividir: ");
    
    if(operacion == 1){
        numero1 = parseInt(prompt("Ingrese el primer valor: "));
        numero2 = parseInt(prompt("Ingrese el segundo valor: "));
        resultado = sumar(numero1,numero2);
        alert("El resultado de la suma es: " + resultado);
    }
    else if(operacion == 2){
        numero1 = prompt("Ingrese el primer valor: ");
        numero2 = prompt("Ingrese el segundo valor: ");
        resultado = restar(numero1,numero2);
        alert("El resultado de la resta es: " + resultado);
    }
    else if(operacion == 3){
        numero1 = prompt("Ingrese el primer valor: ");
        numero2 = prompt("Ingrese el segundo valor: ");
        resultado = multiplicar(numero1,numero2);
        alert("El resultado de la multiplicacion es: " + resultado);
    }
    else if(operacion == 4){
        numero1 = prompt("Ingrese el primer valor: ");
        numero2 = prompt("Ingrese el segundo valor: ");
        resultado = dividir(numero1,numero2);
        alert("El resultado de la división es: " + resultado);
    } else{
        alert("Opción Invalida!");
    }
} while(prompt(`1. Continuar   0.Salir`) !=0);

// document.write(`
//     Suma de números: ${sumar(5,5)}<br>
//     Resta de números: ${restar(5,5)}<br>
//     Producto de números: ${multiplicar(5,5)}<br>
//     Division de números: ${dividir(5,5)}<br>
// `);