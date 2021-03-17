function mostrar()

{
	// Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive)
	//tomo la edad 
	var edad;
	edad = documentElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 13) 
	{
		// alert("Es adolescente");

		// PUEDO USAR 2 IF, PERO VA UNO ADENTRO DEL OTRO (OJO!)
		if (edad <= 17) 
		{
		alert("Es adolescente");	
		}
		
	}
	



} //FIN DE LA FUNCIÓN