/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	// CONCATENO: alert("Usted se llama ESPACIO" + nombre + "ESPACIO y tiene ESPACIO" + edad + "ESPACIO años");
	// ES ESPACIO EVITA QUE LA FRASE SALGA TODO APEGADO
	alert( "Usted se llama " + nombre + " y tiene " + edad + " años");
}

