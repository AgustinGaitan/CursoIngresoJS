function mostrar()
{

	var contador;
	var acumulador;
	contador=0;
	acumulador=0;
	acumulador=prompt("Ingrese un numero");

	while(contador<5)
	{
		acumulador=prompt("Ingrese un numero");

		contador=contador+1;
		acumulador=acumulador+contador;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN