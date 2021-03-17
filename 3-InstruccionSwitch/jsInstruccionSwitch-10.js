function mostrar()
{
// 	una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año debemos,

//  informar si "Se viaja" o "No se viaja" a ese lugar

// en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

// en Verano: Se viaja a Mar del plata y Cataratas solamente

// en Otoño: Se viaja a todos los destinos.

// Primavera: solo no se viaja a Bariloche

	var estacionIngresada;
	var destinoIngresado;

	var estacionIngresada =document.getElementById("txtIdEstacion").value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	// alert(estacionIngresada);

	switch (estacionIngresada) {

		case "Invierno":
			if (destinoIngresado == "Bariloche")
			 {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;

		case "Verano":
			if (destinoIngresado == "Mar del plata" && destinoIngresado == "Cataratas")
		 	{
			alert("Se viaja");
			}
			else {
			alert("No se viaja");
			}
			break;

		case "Primavera":
			if (destinoIngresado != "Bariloche") 
			{
			alert("Se viaja");	
			}
			else {
				alert("No se viaja");
			}
			default:
				alert("Se viaja");
			


	}


}//FIN DE LA FUNCIÓN