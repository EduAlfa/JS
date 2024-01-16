class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInformacion(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza,nombre){
        super(especie, edad, color);
        this.raza = null;
        this.nombre = nombre;
    }
    static ladrar(){
        alert("¡WAU!");
    }
    //En realidad es un método que al final se convierte en una propiedad más de la clase
    set setRaza(newRaza){
        this.raza = newRaza;
    }
    set setNombre(newNombre){
        this.nombre = newNombre;
    }
    get getRaza(){
        return this.raza;
    }
}


const prro = new Animal("perro", 4, "negro");
const gato = new Animal("Gato",2 , "blanco");
const pajaro = new Animal("pajaro", 1, "verde");

const dog = new Perro("Wacho", 155, "Negro", "Rascuache");
const perro = new Perro("Perro",5,"Marron","Doberman", "Toby");
const dogo = new Perro("Wacha",3,"Naranja");

//No funcionaría así 
//perro.modificarRaza("Pedro");
// Si no así

document.write(perro.raza + "<br>");
console.log(perro);

perro.setRaza = "Doberman";

document.write(perro.raza + "<br>");
console.log(perro.getRaza);
console.log(perro);

dogo.setRaza = "Pitbull";
dogo.setNombre = "Picapiedra";
document.write(dogo.info);
console.log(dogo);