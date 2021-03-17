/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	
	claveIngresada = prompt("Ingrese su clave");
// EN LA CONDICION VA LO QUE NO QUIERO QUE SE CUMPLA, LO PLANTEO ASI
	while (claveIngresada != "utn750") {
		
		alert("ERROR!! Ingrese nuevamente su clave");
	}
	
	alert("Clave correcta!!");

	
}//FIN DE LA FUNCIÓN
