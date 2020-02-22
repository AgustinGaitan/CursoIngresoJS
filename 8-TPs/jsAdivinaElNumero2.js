/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
			switch(contador)
			{
				case 1:
				alert("Usted es psíquico.");
				break;
				case 2:
				alert("Excelente percepción");
				break;
				case 3:
				alert("Esto es suerte");
				break;
				case 4: 
				alert("Excelente técnica");
				break;
				case 5:
				alert("Usted éstá en la media");
				break;
				if(contador>5 && contador<11)
				{
					alert("Falta técnica");
				}
				default:
				alert("Afortunado en el amor!!!");
				break;
			}
		}
	}

	console.log(numeroRandom);

	document.getElementById('intentos').value=contador;
	

}