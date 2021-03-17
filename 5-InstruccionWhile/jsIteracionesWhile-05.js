/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese f ó m");
							// Alt + 1
	while (sexoIngresado != "f" && sexoIngresado != "m") {
		
		alert = prompt("Reingrese sexo");
	
	}

document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN