function mostrar()
{
	// Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte,
	//  Sur, Este u Oeste

	var destinoIngresado = document.getElementById("txtIdDestino").value;

	// MODO RESUMIDO
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Sur");
			break;
	
		case "Cordoba":
			alert("Este");
			break;

		case "Mar del plata":
		case "Cataratas":
			alert("Oeste");
			break;
	}
		// alert(destinoIngresado);

}//FIN DE LA FUNCIÓN