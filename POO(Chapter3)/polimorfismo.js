class animal{
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

    ladrar(){
        if (this.especie == "perro"){
            document.write("Guau! <br>")
        } else{
            document.write(`No puede ladrar, ya que es un ${this.especie} <br>`)
        }
    }

}

let prro = new animal("perro", 4, "negro");
let gato = new animal("Gato",2 , "blanco");
let pajaro = new animal("pajaro", 1, "verde");

prro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();

prro.ladrar();
gato.ladrar();
pajaro.ladrar();