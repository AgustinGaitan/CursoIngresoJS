/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroRandom;
var contador;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	contador=0;
	numeroRandom=Math.floor(Math.random() * 100) + 1;
	alert("El numero random ya está seleccionado, ahora ingrese un numero del 1 al 100");
	
	console.log(numeroRandom);
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	contador=contador+1;

	numeroIngresado=document.getElementById('numero').value;

	if(numeroIngresado>numeroRandom)
	{
		alert("Te pasaste,capo.");
	}
	else
	{
		if(numeroIngresado<numeroRandom)
		{
			alert("Falta");
		}
		else
		{
			alert("Acertaste en " +contador+ " intentos.");
		}
	}
	

	console.log(numeroRandom);

	document.getElementById('intentos').value=contador;
	
}