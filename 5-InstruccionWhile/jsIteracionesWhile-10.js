/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. (ADENTRO)
2-Suma de los positivos. (ADENTRO)
3-Cantidad de positivos. (ADENTRO)
4-Cantidad de negativos. (ADENTRO)
5-Cantidad de ceros. (ADENTRO)
6-Cantidad de números pares. (ADENTRO)
7-Promedio de positivos. (afuera)
8-Promedios de negativos. (afuera)
9-Diferencia entre positivos y negativos, (positvos-negativos). (AFUERA) */
function mostrar()
{
	//declarar contadores y variables 
	var numero;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var respuesta;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorNumerosPares = 0;
	// POR LAS DUDAS QUE EL USUARIO NO ME INGRESE NADA, 
	// LO INICIALIZO EN CERO PORQUE NO SE PUEDE DIVIDIR POR CERO
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia;
	
	do {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		// PARA QUE SEA NEGATIVO TIENE QUE SER MENOR A CERO
		if (numero < 0) {
			// SUMO NEGATIVOS
		acumuladorNegativos = acumuladorNegativos + numero;
		// CUENTO CUANTOS NUMEROS NEGATIVOS TENGO
		contadorNegativos++;
		}
		// ESTO ES PARA ACUMULAR LOS CEROS
		else if (numero == 0) {
			// CUENTO CUANTOS CEROS TENGO
		contadorCeros++;
		}
		else{
			// SUMO POSITIVOS
		acumuladorPositivos = acumuladorPositivos + numero;
		// CUENTO CUANTOS NUMEROS POSITIVOS TENGO
		contadorPositivos++;
		}
		// ASI OBTENGO NUMEROS PARES
		if(numero % 2 == 0) {
			contadorNumerosPares++;
		}
		// respuesta = prompt("¿Desea ingresar otro numero?");

	// SIEMPRE TERMINAR CON PUNTO Y COMA CUANDO USO do.while!!
	} while (confirm("¿Desea seguir"));
	// HAGO UN IF PARA CADA UNO PORQUE UNO NO TIENE NADA QUE VER CON EL OTRO
	if (contadorPositivos != 0) {
		// promedioPositivos
		promedioPositivos = acumuladorPositivos / contadorPositivos;	
	}
	// HAGO UN IF PARA CADA UNO PORQUE UNO NO TIENE NADA QUE VER CON EL OTRO
	if (contadorNegativos != 0) {
		// promedioNegativos
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	
	// ASI SACO LA DIFERENCIA ENTRE POSITIVOS Y NEGATIVOS
	diferencia = contadorPositivos - contadorNegativos;
	// ES EQUIVALENTE A UN ALERT
	document.write("1- Suma de negativos: " + acumuladorNegativos);
	document.write("2- Suma de positivos: " + acumuladorPositivos);
	document.write("3- Cantidad de positivos: " + contadorPositivos);
	document.write("4- Cantidad de negativos: " + contadorNegativos);
	document.write("5- Cantidad de ceros: " + contadorCeros);
	document.write("6- Cantidad de numeros pares: " + contadorNumerosPares);
	document.write("7- Promedio positivos: " + promedioPositivos);
	document.write("8- Promedio negativos: " + promedioNegativos);
	document.write("9- Diferencia entre positivos y negativos: " + diferencia);

}//FIN DE LA FUNCIÓN








