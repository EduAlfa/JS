let cantidad = prompt("Cuántos alumnos son:");
let alumnosTotales = [];


for (let i = 0; i < cantidad; i++){
	alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}

const tomarLista = (nombre, i) =>{
	let presencia = prompt("Pasando lista a alumno: " + nombre);
	if (presencia == "p" || presencia == "P") {
		alumnosTotales[i][1]++;
	}
}

for (i = 0; i < 30; i++) {
	for(alumno in alumnosTotales){
		tomarLista(alumnosTotales[alumno][0],alumno);
	}
}

for(alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}: <br>
	______Asistencias: ${alumnosTotales[alumno][1]} <br>
	______Ausencias: ${30 - alumnosTotales[alumno][1]} <br>
	`;
	if(30 - alumnosTotales[alumno][1] > 18) {
		resultado += "Reprobado por demasiadas inasistencias!! <br>" 
	} else{
		resultado+= "<br><br>";
	}
	document.write(resultado);
}