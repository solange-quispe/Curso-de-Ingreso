function mostrar()
{
// 	al seleccionar un mes informar.
// si es Enero: "que comiences bien el año!!!."
// si es Marzo: "a clases!!!."
// si es Julio: "se vienen las vacaciones!!!."
// si es Diciembre: "Felices fiesta!!!."

//tomo el mes
	
// evitar usar la "Ñ" en una variable para no complicarme la vida, aca funciona pero no siempre lo hace
	var mesDelAño = document.getElementById("txtIdMes").value;

	// if (mesDelAño == "Enero") 
	// {
	// alert("que comiences bien el año!!!");	
	// }
	// else if (mesDelAño == "Marzo")
	//  {
	// alert("a clases!!!");	
	// }
	// else if (mesDelAño == "Julio")
	//  {
	// alert("se vienen las vacaciones!!!");	
	// }
	// else
	//  {
	// 	alert("Felices fiesta!!!");
	// }
	
	// alert(mesDelAño);

	switch (mesDelAño) {
		case "Enero":
			alert("Que comiences bien el año");
			break;
	
		case "Marzo":
			alert("a clases!!!");
			break;
		
		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;

		case "Diciembre":
			alert("Felices fiesta!!!");
			break;
	}



}//FIN DE LA FUNCIÓN