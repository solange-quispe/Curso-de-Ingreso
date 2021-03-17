function mostrar()
{
	// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
	//Genero el número RANDOM entre 1 y 10 
	// RAMDON ME REDONDEA AL ENTERO MAS CERCANO Ej. 8.5 = 9 y 8.49 = 8
	
	var numero;
	var minimo = 10;
	var maximo = 1;
//  ME DEVUELVE UN NUMERO ALEATORIO DENTRO DE ESE RANGO
// cuando tenemos operadores de la misma prioridad como modulos, division y multiplicacion la PC va a operar de izquierda a derecha
	
// NO OLVIDARME DEL PUNTO Y COMA!!
	numero = Math.round(Math.random()*(maximo-minimo)+minimo);
	
	alert(numero);

}//FIN DE LA FUNCIÓN