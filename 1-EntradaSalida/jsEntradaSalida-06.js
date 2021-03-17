/*
Debemos lograr tomar los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	// ESTA ES OTRA OPCION DE EDITAR EL CODIGO, MAS RESUMIDA
	// numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value); 
	// numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// numeroUno = promt("Ingrese un numero");
	// numeroDos = promt("Ingrese otro numero");

	// NO VA ENTRE PARENTESIS
	resultado = numeroUno + numeroDos;

	alert("El suma es " + resultado);
}

