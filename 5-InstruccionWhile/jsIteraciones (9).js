function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numeroIngresado;

	var respuesta='si';

	while(respuesta!='no')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}
		}	
		respuesta=prompt("Ingresa 'no' para salir");
	
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN