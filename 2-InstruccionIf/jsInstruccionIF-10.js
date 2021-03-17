function mostrar()
{ 
// 	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
// "EXCELENTE" para notas igual a 9 o 10,
// "APROBÓ" para notas mayores a 4,
// "Vamos, la proxima se puede" para notas menores a 4
	
//Genero el número RANDOM entre 1 y 10 
	
var nota;
var maximo = 10;
var minimo = 1;

nota = Math.round(Math.random()*(maximo-minimo)+minimo);

alert(nota);

if (nota >= 9) 
{
  alert("EXCELENTE");  
}
else if (nota < 4)
 {
  alert("Vamos, la proxima se puede"); 
}
else 
{
alert("APROBO");
}


}//FIN DE LA FUNCIÓN