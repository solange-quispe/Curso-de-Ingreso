function mostrar()
{
	// al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado,
	//  y mostrar la cantidad de numeros pares encontrados.

	var numero;
	var contadorPares = 0;

	numero = parseInt(numero);
	numero = prompt("Ingrese un numero");

	for (var i = 1; i <= numero; i++ ) {
		
		document.write(i);
		// SI ESTA DIVISION ME DA CERO QUIERE DECIR QUE ES UN NUMERO PAR
		if (i % 2 == 0) {

			contadorPares++;
			document.write(i);
			
		}

	}

	document.write("Cantidad de numeros pares " + contadorPares);

}//FIN DE LA FUNCIÓN