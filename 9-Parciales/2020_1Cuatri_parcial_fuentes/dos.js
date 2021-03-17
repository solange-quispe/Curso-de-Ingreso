function mostrar()
 {
// Realizar el algoritmo que permita ingresar los datos de una compra productos 
// de la construccion, hasta que el cliente quiera:
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
// Precio por bolsa (más de cero ),

// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// c) Informar el tipo con mas cantidad de bolsas.
// d) El tipo mas caro
  
var tipo;
var cantidad;
var precio;
var acumuladorBolsas = 0;
var porcentaje;
var descuento;
var precioConDescuento = 0;
var precioSinDesc = 0;
var precioSinDescTotal = 0;
var acumulador1 = 0;
var acumulador2 = 0;
var acumulador3 = 0;
var tipoMayor;
var tipoMasCaro;
var tipoMasIngresado;
var flagTipo = true;

do {

  tipo = prompt("Ingrese tipo con el numero correspondiente: 1- arena/ 2- cal/ 3- cemento");
  
  while (tipo != "1" && tipo != "2" && tipo != "3") {
    tipo = prompt("ERROR!! Ingrese tipo con el numero correspondiente: 1- arena/ 2- cal/ 3- cemento");
  }

  cantidad = prompt("Ingrese cantidad");
  cantidad = parseInt(cantidad);

  while (isNaN(cantidad) && cantidad < 1) {
    cantidad = prompt("ERROR!! Ingrese cantidad");
  }

  precio = prompt("Ingrese precio");
  precio = parseFloat(precio);

  while (isNaN(precio) && precio < 1) {

    precio = prompt("ERROR!! Ingrese precio");
  }
// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
 
   // a) El importe total a pagar , bruto sin descuento y...
    // ACA ESTARIA HACIENDO LA CUENTA POR UNIDAD DE COMPRA
    precioSinDesc = precio * cantidad;
    // ACA ESTARIA CALCULANDO EL TOTAL SIN DESCUENTO EN TOTAL, SERIA POR MAYOR
    precioSinDescTotal = precioSinDescTotal + precioSinDesc;
                       // SUMA LAS BOLSAS TOTALES + NUEVA BOLSA INGRESADA
    acumuladorBolsas = acumuladorBolsas + cantidad;
    
    // c) Informar el tipo con mas cantidad de bolsas.
    if (tipo == "1") { // ARENA
        acumulador1 = acumulador1 + cantidad;
    }
   else if (tipo == "2") { // CAL
        acumulador2 = acumulador2 + cantidad;
    }
    else { // CEMENTO
        acumulador3 = acumulador3 + cantidad;
        
    } // PARA MAXIMOS Y MINIMOS SIEMPRE VOY A USAR UNA BANDERA
    // SEGUNDA Y ULTIMA PARTE DEL PUNTO D)
if (flagTipo == true || precio > tipoMasCaro) {
    tipoMasCaro = precio;
    tipoMasIngresado = tipo;
    flagTipo = false;
} 

} while (confirm("¿desea seguir?")); 
  
  // d) El tipo mas caro
  if (acumuladorBolsas > 10 && acumuladorBolsas < 31) {
    porcentaje = 15;
    
  }
   else if (acumuladorBolsas > 30 ) {
    porcentaje = 25;
    
  }
  else {
    porcentaje = 0;
    
  }
  // b) el importe total a pagar con descuento(solo si corresponde)

  descuento = precioSinDescTotal * porcentaje / 100;

  precioConDescuento = precioSinDescTotal - descuento;
  // SEGUNDA  Y ULTIMA PARTE DEL PUNTO C)
if (acumulador1 > acumulador2 && acumulador1 > acumulador3) {
    tipoMayor = "1";
}
else if (acumulador2 > acumulador1 && acumulador2 > acumulador3) {
    tipoMayor = "2";
}
else {
    tipoMayor = "3";
}



document.write("a) Precio sin descuento es: " + precioSinDescTotal + "<br>");
document.write("b) Precio con descuento es: " + precioConDescuento + "<br>");
document.write("c) Informar el tipo con mas cantidad de bolsas: " + tipoMayor + "<br>");
document.write("d) Informar el tipo mas caro: " + tipoMasIngresado + "<br>");

}


// {
//     let respuesta;
//     let tipo;
//     let precio;
//     let cantidadBolsas;
  
//     let total;
//     let acumuladorTotalBolsas;
//     let precioBrutoTotal;
//     let precioBrutoProducto;
//     let porcentaje;
//     let precioConDescuento;
  
//     let acumuladorCal;
//     let acumuladorCemento;
//     let acumuladorArena;
  
//     let tipoconMasUnidades;
//     let tipoMasCaro;
//     let tipoMasCaroPrecio;
  
//     let flag;
  
//     flag = 0;
//     acumuladorTotalBolsas = 0;
//     precioBrutoTotal = 0;
//     respuesta ='s'
  
  
//     do{
  
//      do{
  
//       //validaciones
       
//       tipo = prompt("Ingrese un producto de los siguientes: arena, cal o cemento");
       
//      }while( !(tipo == "arena" || tipo == "cal" || tipo == "cemento"));
  
//      cantidadBolsas = parseInt(prompt("ingrese la cantidad de bolsas:"));
    
  
//      do{ 
//        precioPorBolsa = parseInt(prompt("ingrese el precio por bolsa. Debe ser mayor a 0"));
      
//      }while(precio < 0);
  
//      //fin validaciones
  
//      // acumuladores generales
  
//      acumuladorTotalBolsas = acumuladorTotalBolsas + cantidadBolsas;
//      precioBrutoProducto = cantidadBolsas + precioPorBolsa;
//      precioBrutoTotal = precioBrutoTotal + precioBrutoProducto;
  
//      //fin acumuladores generales
  
//      //para saber cuál es el más caro
  
//      if(flag == 0){
//        tipoMasCaro = tipo;
//        tipoMasCaroPrecio = precioPorBolsa;
//        flag = 1;
//      }else{
//        if(precioPorBolsa > tipoMasCaroPrecio){
//         tipoMasCaro = tipo;
//         tipoMasCaroPrecio = precioPorBolsa;
  
//        }
//      }
//      //fin saber el más caro
  
//      //acumulador de cantidades 
  
//      switch(tipo){
  
//         case "cal":
//           acumuladorCal = acumuladorCal + cantidadBolsas;
//           break;
//         case "cemento":
//           acumuladorCemento = acumuladorCemento + cantidadBolsas;
//           break;
//         case "arena":
//           acumuladorArena = acumuladorArena + cantidadBolsas;
//           break;
  
//      }
//       //acumulador de cantidades 
  
//      respuesta = prompt( "desea continuar?: si es así presiones s");
  
//     }while (respuesta == 's')
  
  
  
//     if(acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal){
//         //arena
//         tipoconMasUnidades = "arena";
//     }else {
//       if(acumuladorCal > acumuladorCemento){
//         //cal
//         tipoconMasUnidades = "cal";
  
//       }else{
//         //cemento
//         tipoconMasUnidades = "cemento";
//       }
//     }
  
  
  
//     if( acumuladorTotalBolsas > 30){
  
//       porcentaje = 25;
//     }
//      else{
//       if(acumuladorTotalBolsas > 10){
//         porcentaje = 15;
  
//       }else{
//         porcentaje = 0;
//       }
//     }
  
    
// el importe total a pagar, bruto sin descuento
//     
  
//     if(  porcentaje != 0){
  
//       descuento = precioBrutoTotal * porcentaje / 100;
//       precioConDescuento = precioBrutoTotal - descuento;
  
//       console.log('pagar con descuento:' + precioConDescuento);
  
//     }
//      //a- el importe total a pagar 
  
//     console.log(' bruto sin descuento:' + precioBrutoTotal);
//     console.log("el tipo de más comprado es : " + tipoconMasUnidades);
//     console.log("el tipo más caro es :" + tipoMasCaro);
  
  
  
//   }

// function mostrar()
// {
// 	Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// b) Del tipo con mas unidades, el promedio por compra
// c) Cuántas unidades de jabones hay en total

// var tipo;
// var precio;
// // CANTIDAD = CONTADOR
// var cantidadUnidades = 0;
// var marca;
// var fabricante;	
// var acumuladorJabon = 0;
// var acumuladorBarbijo = 0;
// var acumuladorAlcohol = 0;
// var contadorJabon = 0;
// var contadorBarbijo = 0;
// var contadorAlcohol = 0;
// var precioAlcoholBarato; 
// var cantidadAlcoholBarato = 0; 
// var fabricanteAlcoholBarato; 
// var promedioCompra;
// var mayorTipo;

// for (var i = 0; i < 1; i++) {

//     tipo = prompt('Ingrese tipo: "b", "j" o "a"');
//     while (tipo != "b" && tipo != "j" && tipo != "a") {
//         tipo = prompt("Tipo invalido. Ingrese tipo barbijo/jabon/alcohol");
//     }
//     precio = parseFloat(precio);
//     precio = prompt("Ingrese precio entre 100 y 300");

//     while (precio < 100 || precio > 300 || isNaN(precio)) {

//         precio = prompt("ERROR!!. Ingrese un numero entre 100 y 300");
//     }

//     // la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
    
//     cantidadUnidades = parseInt(cantidadUnidades);
//     cantidadUnidades = prompt("Ingrese unidades entre 1 y 1000");

//     while (cantidadUnidades < 1 || cantidadUnidades > 1001) {

//         cantidadUnidades = prompt("ERROR!!. Ingrese un numero entre 1 y 1000");
//     }
//     marca = prompt("Ingrese marca");

//     fabricante = prompt("Ingrese fabricante");

// // a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

// if (precioAlcoholBarato == true || precio < precioAlcoholBarato) {
//     precioAlcoholBarato = precio;
//     cantidadAlcoholBarato = cantidadUnidades;
//     cantidadUnidades++;
//     fabricanteAlcoholBarato = fabricante;
//     precioAlcoholBarato = false;
// }
// }
// // b) Del tipo con mas unidades, el promedio por compra
// if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
//     // acumulador de alcohol sea mayor
//     mayorTipo = "a";
//     promedioCompra = acumuladorAlcohol / contadorAlcohol;
// }else if (acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo >= acumuladorJabon) {
//     // acumulador de barbijo sea mayor
//     mayorTipo = "b";
//     promedioCompra = acumuladorBarbijo / contadorBarbijo;
// }else {
//     // acumulador de jabon sea mayor
//     mayorTipo = "j";
//     promedioCompra = acumuladorJabon / contadorJabon;
// }

// // c) Cuántas unidades de jabones hay en total

// if (tipo == "j") {
// contadorJabon++;

// }

// document.write("=========RESULTADOS =======" + "<br>");
// document.write("Del más barato de los alcohol, la cantidad de unidades " + contadorUnidades + " y el fabricante " + fabricanteAlcoholBarato + "<br>");
// document.write("Del tipo con mas unidades, el promedio por compra " + promedioCompra + "<br>");
// document.write("Cuántas unidades de jabones hay en total " + contadorJabon + "<br>");

// 1)De 5  personas que ingresan al hospital se deben tomar y
// validar los siguientes datos.
// nombre , temperatura, sexo y edad.
// a)informar la cantidad de personas de cada sexo.
// b)la edad promedio en total
// c)la mujer con más temperatura(si la hay) 
// pedir datos por prompt y mostrar por document.write o console.log



// for (i = 0; i < 1; i++) {
// var nombre;
// var temperatura;
// var sexo;
// var edad;
// var contadorFem = 0;
// var contadorHom = 0;
// var acumuladorEdad = 0;
// var flagMujer;
// var promedio;
// var temperaturaMayor;
// var mujerConMasTemp;

// nombre = prompt("Ingrese su nombre");

// temperatura = prompt("Ingrese su temperatura corporal");
// temperatura = parseFloat(temperatura);

// while (isNaN(temperatura) || temperatura == " ") {
//     temperatura = prompt("ERROR!! Ingrese su temperatura corporal");  
// }
// sexo = prompt("ingrese sexo f o m ");
// while (sexo != "f" && sexo != "m") {
//   sexo = prompt("error, ingrese f o m");
// }
// edad = parseInt(edad);
// edad = prompt("Ingrese su edad");
//   while (isNaN(edad) || edad < 1) {
//     edad = prompt("ERROR!! Reingrese su edad");
//   }
//   // a)informar la cantidad de personas de cada sexo.
// if ( sexo == "f") {
// contadorFem++;
// }else if (sexo == "m") {
// contadorHom++;
// }
// // b)la edad promedio en total
// if (isNaN(edad) || edad > 0) {
//     acumuladorEdad = acumuladorEdad + edad;
    
// }

// // c)la mujer con más temperatura(si la hay)
// if (flagMujer == true || sexo == "f" && temperatura > 37)  {
// temperaturaMayor = temperatura;
// mujerConMasTemp = nombre;
// flagMujer = false;

// }

// }

// promedio = acumuladorEdad / 5;

// document.write("=========RESULTADOS =======" + "<br>");
// document.write("a)informar la cantidad de personas de cada sexo " + contadorFem + " y " + contadorHom + "<br>");
// document.write("b)la edad promedio en total " + promedio + "<br>");
// document.write("c)la mujer con más temperatura(si la hay) " + mujerConMasTemp + "<br>");

// }

// switch (tipo) {
    
//     case "a":
//         acumuladorAlcohol += cantidadUnidades;
//         contadorAlcohol++;
    
//         if ( flag == 0  || precio < precioAlcoholBarato) {
    
//             precioAlcoholBarato = precio;
//             cantidadUnidades = cantidadAlcoholBarato;
//             fabricante = fabricanteAlcoholBarato;
        
//             flag = 1;
        
//         }
        
//         break;
//     case "b":
//         acumuladorBarbijo += cantidadUnidades;
//         contadorBarbijo++;
//         break;
    
//         // c) Cuántas unidades de jabones hay en total
//     case "j":
//         acumuladorJabon += cantidadUnidades;
//         contadorJabon++;
//         break;
//     }
    
// // b) Del tipo con mas unidades, el promedio por compra
// if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
//     // acumulador de alcohol sea mayor
//     mayorTipo = "a";
//     promedioCompra = acumuladorAlcohol / contadorAlcohol;
// }else if (acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo >= acumuladorJabon) {
//     // acumulador de barbijo sea mayor
//     mayorTipo = "b";
//     promedioCompra = acumuladorBarbijo / contadorBarbijo;
// }else {
//     // acumulador de jabon sea mayor
//     mayorTipo = "j";
//     promedioCompra = acumuladorJabon / contadorJabon;
// }
// if (flag == 1) {

//     mensajeAlcohol = " A- Fabricante alcohol barato: " + fabricanteAlcoholBarato + "Cantidad: " + cantidadAlcoholBarato + "Precio: " + precioAlcoholBarato;
    
// }

// mensajeBarbijo = "B- Tipo con mas unidades: " + mayorTipo + " Promedio: " + promedioCompra;
// mensajeJabon = "C- Unidades de jabon: " + contadorJabon;

