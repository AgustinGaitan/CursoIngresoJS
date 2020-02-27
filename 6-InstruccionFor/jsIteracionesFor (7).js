function mostrar()
{
	var numeroIngresado;
	var i;
	var divisores;

	divisores=0;
	numeroIngresado=prompt("Ingrese un numero");

	for(i=1;i<numeroIngresado;i++)
	{
		if((numeroIngresado%i)==0)
		{
			alert("Los divisores son: " +i);
			divisores++
		}

	}
	alert("La cantidad de divisores es: " +divisores);



}//FIN DE LA FUNCIÓN