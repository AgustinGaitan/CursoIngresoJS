function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado=0;

	while(numeroIngresado!="no")
	{
		numeroIngresado=prompt("Ingrese un numero, o diga que no para terminar");
		if(!isNaN(numeroIngresado))
		{
			numeroIngresado=parseInt(numeroIngresado);
			acumulador=numeroIngresado+acumulador;
			contador=contador+1	

		}
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
