function mostrar()
{
// 	al seleccionar un mes informar.
// si estamos en Invierno: "Abrigate que hace frio."
// si aún no llego el Invierno: "Falta para el invierno."
// si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
// ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
	
//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes.value");
	
	switch (mesDelAño) {
		case "Julio":
		case "Junio":
		case "Agosto":
			alert("Abrigate que hace frio!!!");
			break;
	
		case "Marzo":
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno");
			break;

		case "Noviembre":
		case "Septiembre":
		case "Octubre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
	}
	
	// alert(mesDelAño);




}//FIN DE LA FUNCIÓN