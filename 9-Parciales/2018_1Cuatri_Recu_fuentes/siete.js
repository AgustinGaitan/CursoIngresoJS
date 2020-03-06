function mostrar()
{	
	var nombre;
	var edad;
	var sexo;
	var pasaje;
	var respuesta;
	var edadMasJovenNacional;
	var nombreMasJovenNacional;
	var sexoPasajeroMasViejo;
	var edadMaxima;
	var pasajePasajeroMasViejo;
	var cantidadTotalMujeres
	var cantidadTotalMujeresUrbanaONacional;
	var edadMujeres;
	var contadorDeHombresInternacional;
	var edadHombres;
	var promedioEdadMujeres;
	var promedioEdadHombresInternacional;
	var contador;

	cantidadTotalMujeres=0;
	edadMasJovenNacional=0;
	sexoPasajeroMasViejo=0;
	edadMaxima=0;
	cantidadTotalMujeresUrbanaONacional=0;
	edadMujeres=0;
	contadorDeHombresInternacional=0;
	edadHombres=0;
	promedioEdadMujeres=0;
	promedioEdadHombresInternacional=0;
	contador=0;

	do
	{
		do
		{
			nombre=prompt("Ingrese su nombre");

		}while(!isNaN(nombre));
		do
		{
			edad=prompt("Ingrese la edad, mayor a 18");
			edad=parseInt(edad);
		}while(isNaN(edad) && edad<18);
		do
		{
			sexo=prompt("Ingrese sexo, 'f' para femenino, 'm' para masculino");

		}while(!isNaN(sexo) || sexo!="f" && sexo!="m");
		do
		{
			pasaje=prompt("Ingrese su tipo de pasaje(urbano,nacional,internacional)");

		}while(!isNaN(pasaje) || pasaje!="urbano" && pasaje != "nacional" && pasaje!= "internacional");

		switch(sexo)
		{
			case "f":
				cantidadTotalMujeres++;
				edadMujeres=edadMujeres+edad;
				break;
			case "m":
				if(pasaje=="internacional")
				{
					contadorDeHombresInternacional++;
					edadHombres=edadHombres+edad;
				}
				break;
				
		}

		
		if(contador==0 || sexo=="m" && pasaje=="nacional" && edad<edadMasJovenNacional)
 		{	
 			edadMasJovenNacional=edad;
 			nombreMasJovenNacional=nombre;
 		}
		//puntoA
		
		if(contador==0 || edad>edadMaxima)
		{
			edadMaxima=edad;
			sexo=sexoPasajeroMasViejo;
			pasaje=pasajePasajeroMasViejo
		}		
		
		if(edad>edadMaxima)
			{
				edad=edadMaxima;
				sexo=sexoPasajeroMasViejo;
				pasaje=pasajePasajeroMasViejo
			}
			
		if(sexo=="f" && (pasaje=="urbano" || pasaje=="nacional"))
		{
			cantidadTotalMujeresUrbanaONacional++;
		}
		contador++;
		
		console.log(nombre);

		respuesta=prompt("Si quiere terminar, escriba 'si'");
	}while(respuesta!="si");	

	promedioEdadMujeres=edadMujeres/cantidadTotalMujeres;
	promedioEdadHombresInternacional=edadHombres/contadorDeHombresInternacional;
	document.write("<br> El nombre del hombre con el pasaje nacinonal mas joven es : " +nombreMasJovenNacional);
	document.write("<br> El sexo y pasaje del pasajero mas viejo son: " +sexoPasajeroMasViejo+ " y " +pasajePasajeroMasViejo);
	document.write("<br> La cantidad de mujeres con pasaje urbano o nacional es :" +cantidadTotalMujeresUrbanaONacional);
	document.write ("<br> El promedio de edad entre mujeres es: " +promedioEdadMujeres);
	document.write("<br> el promedio de edad entre los hombres con pasaje internacional es :" +promedioEdadHombresInternacional);

}