
// const saludar = nombre => document.write(`Hola ${nombre}, Cómo estás?`);

//Es lo mismo que esto:

const saludar = (nombre) => {
    document.write("hola como estás " + nombre);
}

const despedir = function(nombre){
    document.write("Adios" + nombre);
}
saludar("Eduardo");
despedir("Luis");
