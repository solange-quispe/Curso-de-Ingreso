/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numero;
	// NO INICIALICE RESPUESTA PORQUE USO do-while, LO USO COMO CONDICION EN while
	var respuesta; 
	var maximo;
	var minimo;
	// USO UNA BANDERA PORQUE EN ESTE CASO NO TENGO NADA QUE CONTAR, SOLO NECESITO SABER SI ESTOY EN LA PRIMERA ITINERACION O NO
	var flag = 0;

	do {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		// PREGUNTO SI FLAG SIGUE VALIENDO CERO
		if (flag == 0) {

		 maximo = numero;
		 minimo = numero;
		// ASI HACEMOS QUE NO VUELVA A INGRESAR DE NUEVO ACA SI flag ES DISTINTO DE CERO
		flag = 1;

		}
		if (numero > maximo) {
			maximo = numero;
			
		}
		// SI NO ES EL MAXIMO NO QUIERE DECIR QUE SEA EL MINIMO, PUEDE ESTAR EN EL MEDIO
		// ES MEJOR HACER else if PORQUE SI if DA VERDADERO A else if YA NI INGRESA
		else if (numero < minimo) {
			minimo = numero;
		}
		
		respuesta = prompt("¿Desea ingresar otro numero?");

	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

	// ES UNA FORMA MAS RESUMIDA DE HACER EL EJERCICIO
	// CUANDO INGRESE LA PRIMERA VEZ Y flag SEA 0 VA A INGRESAR A ESE if, LUEGO AL OTRO if
	// if (flag == 0 || numero > maximo ) {
	// 	maximo = numero;
	// }
	// if (flag == 0 || numero < minimo) {
	// 	minimo = numero
		// UNA VEZ QUE YA INGRESE A LOS 2 if AL CAMBIARLE EL VALOR DE LA BANDERA YA NO INGRESA A LA PRIMERA PARTE DEL if 
		// flag = 1;
}

//FIN DE LA FUNCIÓN