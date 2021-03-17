/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var dato;
	
	dato = document.getElementById("txtIdNombre").value;

	// dato = prompt("Ingrese un dato");
	
	alert(dato);

	dato = document.getElementById("txtIdNombre").value = ""; 
	
	// SI COPIO ESTO ASI, DEJO PREPARADO PARA EL PROXIMO INGRESO

}


