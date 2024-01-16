let free = false;

const validarCliente = (time)=>{
    let edad = prompt("Cuál es tu edad?");
    if(edad > 18){
        if(time >= 2 && time < 7 && !free){
            alert("Podes pasar gratis porque sos la primera persona después de las 2AM");
            free = true;
        } else{
            alert(`Son las ${time}:00Hrs y podes pasar, pero tenes que pagar la entrada`);
        }
    } else{
        alert("Lo siento papu, sos menor de edad");
    }
}
alert(free);
validarCliente(2);
validarCliente(23);
validarCliente(3);

alert(free);