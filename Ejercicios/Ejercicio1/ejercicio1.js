let dineroRoberto = prompt("¿Cuánto dinero tiene Roberto?");
let dineroPedro = prompt("Ingresa el dinero disponible, Pedro");
let dineroCofla = prompt("Ingresa el dinero disponible, Cofla");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, te puedes comprar el helado de agua");
    alert(`Y te sobran ${dineroCofla-0.6} USD`);
}
else if(dineroCofla >= 1 && dineroCofla < 1.6 ) {
    alert("Cofla, te puedes comprar helado de crema");
    alert(`Y te sobran ${dineroCofla-1} USD`);
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7 ) {
    alert("Cofla, te puedes comprar helado de heladix");
    alert(`Y te sobran ${dineroCofla-1.6} USD`);
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, te puedes comprar helado de helafovich");
    alert("Cofla, te sobran " + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9 ) {
    alert("Cofla, te puedes comprar helado de helardo");
    alert("Cofla, te sobran " + (dineroCofla - 1.8));
}
else if(dineroCofla >= 2.9) {
    alert("Cofla, te puedes comprar el helado de confites y el de pote de 1/4KG");
    alert("Cofla, te sobran " + (dineroCofla - 2.9));
} else {
    alert("Cofla, lo siento, no es suficiente dinero para poder comprar un helado!!");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, te puedes comprar el helado de agua");
}
else if(dineroPedro >= 1 && dineroPedro < 1.6 ) {
    alert("Pedro, te puedes comprar helado de crema");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7 ) {
    alert("Pedro, te puedes comprar helado de heladix");
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8 ) {
    alert("Pedro, te puedes comprar helado de helafovich");
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9 ) {
    alert("Pedro, te puedes comprar helado de helardo");
}
else if(dineroPedro >= 2.9) {
    alert("Pedro, te puedes comprar el helado de confites y el de pote de 1/4KG");
} else {
    alert("Pedro, lo siento, no es suficiente dinero para poder comprar un helado!!");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, te puedes comprar el helado de agua");
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6 ) {
    alert("Roberto, te puedes comprar helado de crema");
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7 ) {
    alert("Roberto, te puedes comprar helado de heladix");
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8 ) {
    alert("Roberto, te puedes comprar helado de helafovich");
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9 ) {
    alert("Roberto, te puedes comprar helado de helardo");
}
else if(dineroRoberto >= 2.9) {
    alert("Roberto, te puedes comprar el helado de confites y el de pote de 1/4KG");
} else {
    alert("Roberto, Lo siento, no es suficiente dinero para poder comprar un helado!!");
}