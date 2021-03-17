/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    // var temperatura;
    // const FAHRENHEIT = 32;
    // const CENTIGRADOS = 0;
    var temperaturaF;
    var temperaturaC;
    
     temperaturaF = parseFloat(document.getElementById("txtIdTemperatura"). value);

    temperaturaC = (temperaturaF - 32) / 1.8;
    // temperaturaC = temperatura * 32;
    
    // EL TO.FIXED(2) ME SIRVE PARA QUE ME DEVUELVA 2 DECIMALES UNICAMENTE
    alert(temperaturaF + " grados Fahrenheit equivalen a " + temperaturaC.toFixed(2) + " grados centigrados.");

}

function CentigradosFahrenheit () 
{
	var temperaturaF;
    var temperaturaC;
    
     temperaturaC = parseFloat(document.getElementById("txtIdTemperatura"). value);

    temperaturaF = temperaturaC * 1.8 + 32;

    alert(temperaturaC + " grados Centigrados equivalen a " + temperaturaF.toFixed(2) + " grados Fahrenheit.");
}
