function mostrar()
{
	// al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
	// y mostrar la cantidad de numeros divisores encontrados.

	var numero;
	// CONTADOR = DIVISOR
	var contadorDivisores = 0;

	numero = parseInt(numero);
	numero = prompt("Ingrese un numero");

	for (var i = 1; i <= numero; i++ ) {
		
		document.write(i);
		// PARA SABER SI UN NUMERO ES DIVISIBLE POR OTRO HAGO a % b == 0
		if (numero % i == 0) {

			contadorDivisores++;
			document.write(i);
			
		}

	}

	document.write("Cantidad de divisores: " + contadorDivisores);



}//FIN DE LA FUNCIÓN