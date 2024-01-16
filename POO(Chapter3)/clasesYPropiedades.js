class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }
}

let prro = new animal("perro", 4, "negro");
let gato = new animal("Gato",2 , "blanco");
let pajaro = new animal("pajaro", 1, "verde");



//Imprimiendo instancias completas que hicimos, a partir de la clase animal

console.log(prro);
console.log(gato);

//Si quisiera imprimir la instancia completa en un document.write
//no podría porque el formato de cadena de un objeto por defecto es: [object object]
document.write(prro);

//Aquí sí muestra la propiedad de lo que tiene la instancia perro
document.write(prro.info + "<br>");
//Imprimiendo la información de las demás instancias
document.write("<h2>Imrpimiendo las propiedades de las instancias realizadas!</h2>")
document.write(prro.info + "<br>");
document.write(gato.info + "<br>");
document.write(pajaro.info + "<br>");