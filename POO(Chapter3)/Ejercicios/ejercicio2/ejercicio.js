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
        return (`
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución pantalla: <b>${this.resolucionDePantalla}</b><br>
        Cámara: <b>${this.resolucionDeCamara}</b><br>
        Ram: <b>${this.ram}</b><br>
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

class CelularAltaGama extends Celular {
    constructor(color,peso,rdp,rdc,ram,rCExtra){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rCExtra;
    }
    grabarVideoLento(){
        document.write("Estás grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.info() + `Resolución de cámara extra: <b>${this.resolucionDeCamaraExtra}</b><br><br>`;
    }
}

celular1 = new CelularAltaGama ("Negro","180g","1950px","4k","6GB","Full hd");
celular2 = new CelularAltaGama ("Blanco","196g","1800px","4k","8GB","hd");
document.write(celular1.infoAltaGama());
document.write(celular2.infoAltaGama());