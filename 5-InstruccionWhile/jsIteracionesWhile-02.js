/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var i = 10;
	
	while (i > 0) {
		
		// console.log(i);
		// document.write(i);
		alert(i);
		//NO ES LO MISMO PONERLO ANTES O DESPUES, ALTERA EL RESULTADO
		i = i - 1;
		// i--; ES LO MISMO QUE ARRIBA
	}

}//FIN DE LA FUNCIÓN