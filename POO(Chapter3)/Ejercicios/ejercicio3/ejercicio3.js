class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            if(this.instalada == true){
                alert("La aplicación se ha instalado correctamente");
            }
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("La aplicación se ha desinstalado correctamente");
        }       
    }

    abrir (){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar (){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App apagada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

app = new App(16.000,"5 Estrellas", "903mb");
app2 = new App(1.000,"4 Estrellas", "469mb");
app3 = new App(5.000,"5 Estrellas", "250mb");
app4 = new App(12.000,"2 Estrellas", "710mb");
app5 = new App(4.000,"2 Estrellas", "100mb");
app6 = new App(5.000,"3 Estrellas", "360mb");
app7 = new App(14.000,"4.8 Estrellas", "199mb");


document.write(`
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`);

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();