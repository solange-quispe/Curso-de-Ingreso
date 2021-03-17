function mostrar()
// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
{
	// INCREMENTA O DECREMENTA EN VALORES FIJOS
	// var contador; 
	// INCREMENTA O DECREMENTA EN VALORES VARIABLES, 
	// ESA ES LA DIFERENCIA
	var acumulador = 0; 
	var numeroIngresado;
	var promedio;
	// VARIABLE CONTADOR
	var i = 0;

	while (i < 5) {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		// VARIABLE DE CONTROL
		i = i + 1;
	}

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
	
}//FIN DE LA FUNCIÓN