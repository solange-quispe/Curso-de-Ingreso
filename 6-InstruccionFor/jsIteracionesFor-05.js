function mostrar()
{
	// al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
	
	var repeticiones;

	repeticiones = parseInt(repeticiones);
	repeticiones = prompt("Ingrese repeticiones");

	for (var i = 0; i < repeticiones ; i++ ) {

		document.write(i);
		
		if (i == 9) {

			break;

		}

	}



}//FIN DE LA FUNCIÓN