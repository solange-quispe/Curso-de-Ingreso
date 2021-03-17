

function mostrar()
{
// // QUISPE SOLANGE
// // Se piden a 5 personas el nombre , sexo y edad , mostrar el nombre de la mujer mas joven 
// // ingresada, Colocar el link de GDB con la solución, se piden por prompt y se muestra por
// //  console.log *

var nombre;
var sexo;
var edad;
var flagEdad = true;
var mujerMasJoven;
var nombreMujerMasJoven;

for (var i = 0; i < 5 ; i++ ) {

nombre = prompt("Ingrese su nombre");

sexo = prompt("ingrese sexo f o m ");

while (sexo != "f" && sexo != "m") {
  sexo = prompt("ERROR!! Ingrese f o m");

}
edad = parseInt(edad);
edad = prompt("Ingrese su edad");

  while (isNaN(edad) || edad < 1) {
    edad = prompt("ERROR!! Reingrese su edad");
  }
  // mostrar el nombre de la mujer mas joven ingresada

  if (flagEdad == true && sexo == "f") {
    mujerMasJoven = edad;
    
    flagEdad = false;
    
  } else if (edad < mujerMasJoven) {

    nombreMujerMasJoven = nombre;

}
  
}

if (flagMujer = true) {
console.log("El nombre de la mujer mas joven ingresada es: " + nombreMujerMasJoven);

}
else {
  console.log("No ingreso ninguna mujer");
}

}