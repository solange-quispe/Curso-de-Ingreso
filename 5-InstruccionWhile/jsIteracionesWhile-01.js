/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	 var i = 0; 
	
	//  declaracion e inicializacion de la variable de control
	// se puede usar numeros negativos!
	while( i < 10 ){ 
	// variable de control (condicion)
	// el console.log funciona como un alert, tambien se puede concatenar
	// console.log(i); 
	// document.write(i + "-"); SI YO CONCATENO ASI ME SEPARA LOS NUMEROS CON UN GUION
	// document.write(i + "<br>"); SI YO LO CONCATENO ASI SE PONE UN NUMERO DEBAJO DEL OTRO
	alert (i);
	// modificacion de la variable de control
	i = i + 1;
	// i++; ES LO MISMO QUE ARRIBA
	}

	//  alert('iteración while');

}//FIN DE LA FUNCIÓN