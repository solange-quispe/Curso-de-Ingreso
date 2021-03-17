/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var cantAlambre;

// PARSEANLO
largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);

perimetro = largo * 2 + ancho * 2;

cantAlambre = perimetro * 3;

// LO  CONCATENO
alert("Se necesitan comprar " + cantAlambre + " metros de alambre.");

}
function Circulo () 
{
    var perimetro;
    var radio;
    var cantAlambre;

// CONST ES LO MISMO QUE UNA VARIABLE PERO ES SOLO DE LECTURA
// A LAS CONSTANTES LAS DECLARAMOS EN MAYUSCULA 
    
    const PI = 3.14;

// ASI ME DA EL VALOR DE PI CON MAS PRESICION
    // Math.PI
    // alert(Math.PI);
// LO PARSEO ...
    radio = parseInt(document.getElementById("txtIdRadio").value);
    
    // FORMULA PARA SACAR EL RADIO
    perimetro = 2 * PI * radio;
    
    cantAlambre = perimetro * 3;
    
    // LO  CONCATENO
    alert("Se necesitan comprar " + cantAlambre + " metros de alambre.");	

}
function Materiales () 
{
var largo;
var ancho;
var area;
var cemento;
var cal;

// PARSEANLO
largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);

area = ancho * largo;

cemento = area * 2;

cal = area * 3; 

alert("Para un contrapiso de " + (area + " m2, necesito comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");	

}