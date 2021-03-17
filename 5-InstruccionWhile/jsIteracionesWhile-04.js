/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 9"));
						// Alt + 1
	while (numeroIngresado < 0 || numeroIngresado > 9) {
		
		numeroIngresado = parseInt(prompt("ERROR!! Ingrese un número entre 0 y 9"));
	}
	// CUANDO QUIERO MOSTRAR UN NUMERO AL USUARIO LO ESCRIBO AL REVEZ!!
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN