function mostrar()
{
	var numeroIngresado;
	var i;
	var numerosPares;

	numeroIngresado=parseInt(numeroIngresado);
	numeroIngresado=prompt("Ingrese un numero.");
	numerosPares=0;

	for(i=1;i<numeroIngresado;i++)
	{
		if((i%2)==0)
		{
			alert("Estos son los pares: " +i);
			numerosPares++;
		}
	}

	alert("La cantidad de numeros pares es:" +numerosPares);



}//FIN DE LA FUNCIÓN