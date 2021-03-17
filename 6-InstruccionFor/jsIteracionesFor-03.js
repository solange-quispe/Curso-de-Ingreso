function mostrar()
{
	// al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

	var repeticiones;

	repeticiones = parseInt(repeticiones);
	repeticiones = prompt("Ingrese repeticiones: ");

	for( var i = 0 ; i < repeticiones ; i++ ) {

	document.write("Hola UTN-FRA");

	}

}//FIN DE LA FUNCIÓN