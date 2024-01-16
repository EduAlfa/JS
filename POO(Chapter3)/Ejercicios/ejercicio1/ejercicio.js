class Celular{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    info(){
        document.write(`
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución pantalla: <b>${this.resolucionDePantalla}</b><br>
        Cámara: <b>${this.resolucionDeCamara}</b><br>
        Ram: <b>${this.ram}</b><br><br>
        `);
    }
    presionarBotonEncendido(){
        if(this.encendido != true){
            alert("Encendiendo...");
            this.encendido = true;
        } else {
            alert("Apagando...");
            //this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido != false){
            alert("Reiniciando Celular");
        } else {
            alert("El celular está apagado");
        }
    }
    tomarFoto(){
        alert(`Foto capturado en un resolución de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Grabando en resolución ${this.resolucionDeCamara}`);
    }
}

celular1 = new Celular("Rojo", "145g","1400pxls","12MPS","2GB");
celular2 = new Celular("Negro", "174g","1720pxls","48MPS","1GB");
celular3 = new Celular("Blanco", "174g","1350pxls","48MPS","3GB");

celular1.info();
celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();

celular2.info();
celular3.info();
