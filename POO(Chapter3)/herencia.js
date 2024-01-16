class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }

    //En los métodos sí o sí tiene que ser funciones normales
    verInformacion(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    ladrar(){
        alert("¡WAU!");
    }
}

//No puedo tener un objeto con el mismo nombre de la clase

let prro = new Animal("perro", 4, "negro");
let gato = new Animal("Gato",2 , "blanco");
let pajaro = new Animal("pajaro", 1, "verde");

let dog = new Perro("Wacho", 155, "Negro", "Rascuache");


prro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();

dog.verInformacion();
dog.ladrar();
gato.ladrar();