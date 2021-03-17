/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var resto;

	numeroUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	// VA SIN PARENTESIS (ojo!!)
	resultado = numeroUno / numeroDos;

	resto = document.getElementById("txtIdNumeroDividendo").value;

	alert("La division es " + resultado);
	
}
