function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;
	respuesta=prompt("Ingrese un numero");

	while(respuesta=="si")
	{
		respuesta=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		contador=contador+1
		acumulador=acumulador+numeroIngresado

		respuesta=prompt("Escriba 'si' para salir");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN