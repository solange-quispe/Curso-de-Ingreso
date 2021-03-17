function mostrar()
 { 	
	// QUISPE SOLANGE
	// Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
	//  o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
	//tomo la edad  
	
	var edad;
	// var mayor;
	// var adolescente;
	// var menor;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	 
	// FORMA RESUMIDA
	if (edad > 13) 
	{
		alert("Es niño");
	}
	else {
		if (edad >= 13 && edad <= 17)
	 {
		 alert ("Es adolescente"); 
	}
	else
	 {
		alert("Es adulto");
	}
		}
	 


}//FIN DE LA FUNCIÓN