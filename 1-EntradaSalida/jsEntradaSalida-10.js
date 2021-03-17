/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// IMPORTE = SUELDO
	var sueldo;
	var sueldoConDescuento;
	var descuento;

	sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	// resultado = document.getElementById("txtIdResultado").value;
	
	descuento = sueldo * 25 / 100;
	sueldoConDescuento = sueldo - descuento;

	// SI ME PIDE QUE MUESTRE EL ID DEBO INVERTIR LA OPERACION. Ej:!
	document.getElementById("txtIdResultado").value = sueldoConDescuento;

	// alert(resultado);
}
