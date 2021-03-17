/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    resultado = precioUno + precioDos + precioTres;

    alert("La suma es $ " + resultado);


}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    // ACA SI USO PARENTESIS!!
    // promedio = (precioUno + precioDos + precioTres) / 3;

    suma = precioUno + precioDos + precioTres;

    promedio = suma / 3;

    alert("El promedio es " + promedio);

}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;
    var suma;
    var iva;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    // ASI CALCULO EL IVA
    iva = suma *21 / 100;

    precioFinal = suma + iva;

    alert("El importe mas IVA incluido es " + precioFinal);
}