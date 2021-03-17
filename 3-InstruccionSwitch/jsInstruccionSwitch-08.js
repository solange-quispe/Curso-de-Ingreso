function mostrar()
{
	// Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
	
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	
	// alert(destinoIngresado);

	// MODO RESUMIDO
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Hace frio");
			break;
	
		case "Cataratas":
			
		case "Mar del plata":
			
		case "Cordoba":
				alert("Hace calor");
				break;
	}
	

}//FIN DE LA FUNCIÓN