/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// IMPORTE = SUELDO
	var importe;
	var importeConAumento;
	var aumento;
	// var resultado;

	// USO PARSEFLOAT PARA QUE ME TOME LOS PUNTOS TAMBIEN!!
	importe = parseFloat(document.getElementById("txtIdSueldo").value);
	// resultado = document.getElementById("txtIdResultado").value;

	// NO LLEVA PARENTESIS PORQUE LOS OPERADORES DE MISMA PRIORIDAD SE VAN EJECUTANDO DE DERECHA A IZQUIERDA
	// LO PODRIA RESUMIR AUN MAS AL PORCENTAJE = importe * 0.1
	aumento = importe * 10 / 100;

	importeConAumento = importe + aumento;

	document.getElementById("txtIdResultado").value = importeConAumento;

	// alert(resultado);
}
