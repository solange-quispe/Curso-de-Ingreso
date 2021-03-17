/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	// NUMEROS MAYORES O IGUALES A CERO = POSITIVOS, LO INICIALIZAMOS EN CERO PORQUE ALGO MAS CERO ES ALGO, NO ME ANULA LA CUENTA
	var sumaPositivos = 0;
	// NUMEROS MENORES A CERO = NEGATIVOS, LO INICIALIZAMOS EN 1 PORQUE UNA MULTIPLICACION POR CERO ME ANULA LA CUENTA
	var multiplicarNegativos = 1;
	// NO INICIALICE RESPUESTA PORQUE USO do-while, LO USO COMO CONDICION EN while
	var respuesta;
	
	// ESTO LO PONGO POR SI NO INGRESAN NINGUN NUMERO NEGATIVO, PARA QUE NO ME DE 1 PORQUE VA A ESTAR MAL!!
	// ESTO ES UNA BANDERA
	var flag = 0;

	 do {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else {
			flag = 1;
			multiplicarNegativos = multiplicarNegativos * numeroIngresado;
		}
		respuesta = prompt("¿Usted quiere ingresar otro numero?");

	} while (respuesta == "si");
	
	if (flag == 0) {
		multiplicarNegativos = 0;
	}	

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicarNegativos;

}//FIN DE LA FUNCIÓN