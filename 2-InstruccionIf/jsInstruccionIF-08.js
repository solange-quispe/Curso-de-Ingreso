function mostrar()
{
// 	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
// pero si no es asi, y es soltero y no es menor, 
// mostrar el siguiente mensaje: 'Es soltero y no es menor.'
	//tomo la edad  
	
	var edad;
	var estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	
	// if (edad < 18 && estadoCivil == "Soltero") 
	// {
	// alert("");	
	// }
	
	if (estadoCivil != "Soltero" && edad >= 18) 
	{
	alert("Es soltero y no es menor");	
	}
	


}//FIN DE LA FUNCIÓN