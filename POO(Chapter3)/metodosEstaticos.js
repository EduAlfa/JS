class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }

    
    verInformacion(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    static ladrar(){
        alert("¡WAU!");
    }
}

//-En los métodos estáticos se pueden utilizar si no necesita de alguna propiedad antes de crear el objeto

Perro.ladrar();
let gato = new Animal("Gato",2 , "blanco");
let pajaro = new Animal("pajaro", 1, "verde");

Perro.ladrar();
