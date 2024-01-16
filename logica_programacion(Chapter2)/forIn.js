let animales = ["gato", "perro", "TiranosaurioREx"];


//Recorre la lista en sus posiciones
for (animal in animales) {
    document.write(animal + "<br>");
}

//Recorre la lista a partir del valor en su posición
for (animal of animales) {
    document.write(animal + "<br>");
}