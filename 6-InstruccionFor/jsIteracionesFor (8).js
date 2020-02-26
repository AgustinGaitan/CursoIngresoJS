function mostrar()
{
	var numeroIngresado;
	var i;
	var bandera;
	
	bandera=0;
	numeroIngresado=prompt("Ingrese un numero y le diremos si es primo o no.");
	numeroIngresado=parseInt(numeroIngresado);

	for(i=2;i<numeroIngresado;i++)
	{
		console.log(i);
		if(numeroIngresado%i==0)
		{
			bandera=1;
			break;
		}
		
	}
	if(bandera==0)
	{
		alert("El numero " +numeroIngresado+ " es primo.");
	}
	else
	{
		alert("El numero " +numeroIngresado+ " no es primo.");
	}



}//FIN DE LA FUNCIÓN