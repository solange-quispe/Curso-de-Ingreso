function mostrar()
{
// // 	Bienvenidos.
// // En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo ("f" o "m") 
// // y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
// // a) El nombre de la persona con mas temperatura.
// // b) Cuantos mayores de edad estan viudos
// // c) La cantidad de hombres que hay solteros o viudos.
// // d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de 
// // temperatura
// // e) El promedio de edad entre los hombres solteros.

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var contadorHombres = 0;
	var nombrePersonaConMasTemp;
	var mayoresDeEdadViudos = 0;
	var contadorHombres = 0;
	var contadorPersonasTerceraEdad = 0;
	var acumuladorEdadHombresSolteros = 0;
	var contadorEdadHombresSolteros = 0;
	var promedio;

do {

 nombre = prompt("Ingrese su nombre");
  
  edad = parseInt(edad);
  edad = prompt("Ingrese su edad");
  while (isNaN(edad) || edad < 18) {
    edad = prompt("ERROR!! Ingrese edad de 18 en adelante");
  }

  sexo = prompt("ingrese sexo f o m ");
    while (sexo != "f" && sexo != "m") {
  	sexo = prompt("error, ingrese f o m");
 }

estadoCivil = prompt("Ingrese su estado civil con sus iniciales: soltero/casado/viudo");
	while (estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v") {
	estadoCivil = prompt("ERROR!! Ingrese su estado civil con sus iniciales: soltero/casado/viudo")
}

temperatura = parseFloat(prompt("Ingrese su temperatura coporal"));
  while (isNaN(temperatura) || temperatura == "") {
	temperatura = parseFloat(prompt("ERROR!! Reingrese su temperatura"));
}

//   a) El nombre de la persona con mas temperatura.
if (temperatura > 37) {
	nombrePersonaConMasTemp = nombre;
	// temperaturaDeEsaPersona = temperatura;
	
}
// b) Cuantos mayores de edad estan viudos
if (edad > 17 && estadoCivil == "v") {
	mayoresDeEdadViudos++;

}
// c) La cantidad de hombres que hay solteros o viudos.
if (estadoCivil == "s" || estadoCivil == "v" && sexo == "m") {
	contadorHombres++;
}
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de 
 // temperatura
 if (edad > 59 && temperatura > 37) {
	 contadorPersonasTerceraEdad++;
 }
 // e) El promedio de edad entre los hombres solteros.
 if (sexo == "m" && estadoCivil == "s") {
	acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edad;
	contadorEdadHombresSolteros++;

}

} while (confirm("¿Desea seguir"));

promedio = acumuladorEdadHombresSolteros / contadorEdadHombresSolteros;

document.write("====== RESULTADOS ====== " + "<br>");
document.write("El nombre de la persona con mas temperatura " + nombrePersonaConMasTemp + "<br>");
document.write("Cuantos mayores de edad estan viudos " + mayoresDeEdadViudos + "<br>");
document.write("La cantidad de hombres que hay solteros o viudos " + contadorHombres + "<br>");
document.write("Cuantas personas de la tercera edad( mas de 60 años), tienen mas de 38 de temperatura " + contadorPersonasTerceraEdad + "<br>");
document.write("El promedio de edad entre los hombres solteros " + promedio + "<br>");

}
// // 	Bienvenidos.
// // En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo ("f" o "m") 
// // y estado civil("soltero", "casado" o "viudo") y temperatura corporal.
// // a) El nombre de la persona con mas temperatura.
// // b) Cuantos mayores de edad estan viudos
// // c) La cantidad de hombres que hay solteros o viudos.
// // d) Cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de 
// // temperatura
// // e) El promedio de edad entre los hombres solteros.	


// var nombre;
// var edad;
// var sexo;
// var estadoCivil;
// //a) El nombre del hombre casado más joven.
// //var banderacasadoJoven = true;
// var casadoMasJoven;
// var casadoMasJovenBandera = false;
// var nombreCasadoMasJoven;
// //b) El sexo y nombre del pasajero/a más viejo.
// var banderaPasajeroViejo = true;
// var sexoMasviejo;
// var nombreMasViejo;
// //var edadPasajeroMasViajo;

// var pasajeraMasVieja;
// var sexoPasajeraMasVieja;

// var promedioMujeres = 0;
// var acumuladorMujeresCasadas = 0;
// var contadorMujeresCasadasyViudas = 0;

// var acumuladorEdadHombresSolteros = 0;
// var contadoEdadHombresSolteros = 0;
// var promedioHombresSolteros = 0;

// var acumuladorEdadMujeres = 0;
// var contadorMujeres = 0;

// var temperatura;
// var contadorTerceraEdad = 0;
// var edadPasajeroMasViajo;

// /* En el ingreso a un viaje en crucero nos solicitan nombre ,
//  edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
// a) El nombre del hombre casado más joven.
// b) El sexo y nombre del pasajero/a más viejo.
// c) La cantidad de mujeres que hay casadas o viudas.
// d) El promedio de edad entre las mujeres.
// e) El promedio de edad entre los hombres solteros.*/
// do {
//   nombre = prompt("ingrese nombre");
//   estadoCivil = prompt("ingrese estado Civil con sus iniciales soltero / casado / viudo");
//   while (estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v") {
// 	estadoCivil = prompt("Error. Ingrese estado Civil con sus iniciales soltero / casado / viudo");
//   }
//   sexo = prompt("ingrese sexo f o m ");
//   while (sexo != "f" && sexo != "m") {
// 	sexo = prompt("error, ingrese f o m");
//   }
//   edad = parseInt(prompt("ingrese edad de 18 en adelante"));
//   while (isNaN(edad) || edad < 18) {
// 	edad = parseInt(prompt("error, ingrese edad de 18 en adelante"));
//   }
  
//   temperatura = parseFloat(prompt("Ingrese su temperatura"));
//   while (isNaN(temperatura) || temperatura < 1) {
// 	temperatura = parseFloat(prompt("ERROR!! Reingrese su temperatura"));
//   }
//   //a) El nombre del hombre casado más joven.
//   if (estadoCivil == "c") {
// 	if (casadoMasJovenBandera == true) {
// 	  casadoMasJoven = edad;
// 	  nombreCasadoMasJoven = nombre;
// 	  casadoMasJovenBandera = false;
// 	}
// 	else
// 	  if (edad < casadoMasJoven) {
// 		casadoMasJoven = edad;
// 		nombreCasadoMasJoven = nombre;
// 	  }

//   }
//   //b) El sexo y nombre del pasajero/a más viejo.
//   if (banderaPasajeroViejo == true) {
// 	edadPasajeroMasViajo = edad;
// 	nombreMasViejo = nombre;
// 	sexoMasViejo = sexo;
// 	banderaPasMasViejo = false;
//   }
//   else if (edad > edadPasajeroMasViajo) {

// 	edadPasajeroMasViajo = edad;
// 	nombreMasViejo = nombre;
// 	sexoMasViejo = sexo;
//   }
//   //   c) La cantidad de mujeres que hay casadas o viudas.

//   if ((estadoCivil == "c" || estadoCivil == "v") && sexo == "f") {
// 	// acumuladorMujeresCasadas = acumuladorMujeresCasadas + edad;
// 	contadorMujeresCasadasyViudas++;
//   }//e) El promedio de edad entre los hombres solteros.
//   if (estadoCivil == "s" && sexo == "m") {
// 	acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edad;
// 	contadoEdadHombresSolteros++;
//   }//d) El promedio de edad entre las mujeres.
//   if (sexo == "f") {
// 	acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
// 	contadorMujeres++;
//   }
// // d) cuantas personas de la tercera edad ( mas de 60 años) , tienen mas de 38 de 
//  // temperatura
//  if (edad > 59 && temperatura > 37) {
// 	 contadorTerceraEdad++;
//  }
// } while (confirm("desea seguir"));

// promedioMujeres = acumuladorEdadMujeres / contadorMujeres;
// promedioHombresSolteros = acumuladorEdadHombresSolteros / contadoEdadHombresSolteros;
// document.write("====== RESULTADOS ====== " + "<br>");
// document.write("A- casado mas joven  " + casadoMasJoven + " nombre " + nombreCasadoMasJoven + "<br>");
// document.write("B- nombre pasajero mas viejo " + nombreMasViejo + " sexo mas viejo " + sexoMasviejo + "<br>");
// document.write("C- pasajera mayor " + pasajeraMasVieja + " su sexo " + sexoPasajeraMasVieja + "<br>");
// document.write(" " + "<br>");
// document.write("D- promedio mujeres " + promedioMujeres + "<br>");
// document.write("E- promedios hombres " + promedioHombresSolteros + "<br>");
// document.write("D2- personas de la tercera edad con temperatura mayor a 38º " + contadorTerceraEdad +"<br>");


// A- casado mas joven undefined nombre undefined
// B- nombre pasajero mas viejo luna sexo mas viejo undefined
// C- pasajera mayor undefined su sexo undefined

// D- promedio mujeres 46.5
// E- promedios hombres NaN
// D2- personas de la tercera edad con temperatura mayor a 38º 1