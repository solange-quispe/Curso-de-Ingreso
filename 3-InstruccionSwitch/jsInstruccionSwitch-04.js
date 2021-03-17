function mostrar()
{
// 	al seleccionar un mes informar.
// si tiene 28 días.
// si tiene 30 días.
// si tiene 31 días.
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	
	//  SE PODRIA RESUMIR AUN MAS AGRUPANDO LOS QUE TIENEN LA MISMA CANTIDAD DE DIAS

	switch (mesDelAño) {
		
		case "Febrero":
			alert("tiene 28 dias (29 si es bisiesto)");
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 dias");
			break;
		default: 
			alert("tiene 31 dias");
	
	}

	// alert(mesDelAño);
	
	



}//FIN DE LA FUNCIÓN