/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	// var i;
	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var promedio;

	while (respuesta == "si") {
	// SIEMPRE LO PARSEO
	numeroIngresado = parseInt(prompt("Ingrese un numero"));
	
	acumulador = acumulador + numeroIngresado;
	
	contador ++;

	respuesta = prompt("¿Usted quiere ingresar otro numero?");

	}

	promedio = acumulador / contador;

	alert("Fin de la operacion...");

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

	var numeroIngresado;
	// var i;
	var contador = 0;
	var acumulador = 0;
	// ACA ELIMINE EL "si" PORQUE NO NECESITO QUE NADIE ME RESTRINJA NADA PORQUE YO ASI LO PROGRAME
	var respuesta; 
	var promedio;

	// LO MAS CORRECTO ES HACERLO CON do-while ...
	
	do {
	// SIEMPRE LO PARSEO
	numeroIngresado = parseInt(prompt("Ingrese un numero"));
	
	acumulador = acumulador + numeroIngresado;
	
	contador ++;

	respuesta = prompt("¿Usted quiere ingresar otro numero?");
	// ACA RECIEN VA A ESTAR LA RESTRICCION
	} while (respuesta == "si")

	promedio = acumulador / contador;

	alert("Fin de la operacion...");

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

}//FIN DE LA FUNCIÓN