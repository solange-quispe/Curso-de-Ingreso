/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;

	alert("La suma es " + resultado);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	// NO VA ENTRE PARENTESIS!!
	resultado = numeroUno - numeroDos;

	alert("La resta es " + resultado);	
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno * numeroDos;

	alert("La multiplicacion es " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	// VA SIN PARENTESIS (ojo!!)
	resultado = numeroUno / numeroDos;

	alert("La division es " + resultado);
}

