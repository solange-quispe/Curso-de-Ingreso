function mostrar()
 {
// 	Al ingresar una hora, informar:
// si está entre las 7 y las 11 : "Es de mañana."
	
//tomo la hora
// NO OLVIDARME DE PARSEARLO

	var horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	
	// CON IF
	// if (horaDelDia >= 7 && horaDelDia <= 11)
	//  {
	// 	alert("Es de mañana");
	// }
	
// LA VARIABLE VA SIN COMILLAS
// CON SWITCH
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
	
		// default:
			// alert();
			// break;
	}
	// alert(horaDelDia);
	
	



}//FIN DE LA FUNCIÓN