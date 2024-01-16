let sospechoso = prompt(" Hay un crimen y eres el culpable");
let sospechoso2 = prompt(" Hay un crimen y eres el culpable, hay que hacer unos examens en el detector");
let cofla = prompt(" Hay un crimen y serás pasado al detector de mentiras");

// 1 Mintiendo
// 2 no miente
// 3 indeciso

if (sospechoso == 1) {
    alert("Sospechosho #1 mintió, hay que darle una descarga");
}
else if (sospechoso == 2) {
    alert("Sospechoso #1 no minitió, No hacerle descarga electrica!");
}
else if (sospechoso == 3) {
    alert("Escaneo no preciso, volver a intentarlo para aclarar la pregunta al sospechoso #1");
} else {
    alert("OPCION INVALIDA!!");
}

if (sospechoso2 == 1) {
    alert("Sospechoso #2 mintió, hay que darle una descarga");
}
else if (sospechoso2 == 2) {
    alert(" Sospechoso #2 No está mintiendo, No hacerle descarga electrica!");
}
else if (sospechoso2 == 3) {
    alert("Escaneo no preciso, volver a intentarlo para aclarar la pregunta a sospechoso #2");
} else {
    alert("OPCION INVALIDA!!");
}

if (cofla == 1) {
    alert("Cofla estás mintiendo, hay que darle una descarga");
}
else if (cofla == 2) {
    alert("Cofla no está mintiendo, No hacerle descarga electrica!");
}
else if (cofla == 3) {
    alert("Escaneo no preciso para Cofla, volver a intentarlo para aclarar");
} else {
    alert("OPCION INVALIDA!!");
}