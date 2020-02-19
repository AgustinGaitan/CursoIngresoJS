function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	acumulador=prompt("Ingrese un numero");
	acumulador=parseInt(acumulador);

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un numero");

		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
		numeroIngresado=parseInt(numeroIngresado);
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN