/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;

	// GUARDO EN LA VARIABLE NOMBRE EL TEXTO QUE ESCRIBE EL USUARIO DENTRO DE LA VENTANA PROMP
	dato = prompt("Ingrese su nombre");
	
	// COPIO EN NOMBRE QUE TENGO GUARDADO EN LA VARIABLE NOMBRE DENTRO DE LA CAJA DE TEXTO EMBEBIDA EN LA PAGINA HTML
	document.getElementById("txtIdNombre").value = dato;
	
	// alert("ok");
	alert(dato);
	
	
}

