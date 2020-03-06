function mostrar()
{	
	var nombre;
	var edad;
	var sexo;
	var pasaje;
	var respuesta;
	var edadMasJovenNacional;
	var nombreMasJovenNacional;
	var primeraVezHombreNacionalJoven;
	var sexoPasajeroMasViejo;
	var edadMaxima;
	var pasajePasajeroMasViejo;
	var bandera;
	var contadorDeMujeres;
	var cantidadTotalMujeresUrbanaONacional;
	var edadMujeres;
	var contadorDeHombresInternacional;
	var edadHombres;


	primeraVezHombreNacionalJoven=1;
	edadMasJovenNacional=0;
	sexoPasajeroMasViejo=0;
	edadMaxima=0;
	bandera=0;
	contadorDeMujeres=0;
	cantidadTotalMujeresUrbanaONacional=0;
	edadMujeres=0;
	contadorDeHombresInternacional=0;
	edadHombres=0;

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
			pasaje=propt("Ingrese su tipo de pasaje(urbano,nacional,internacional)");

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

		if(primeraVezHombreNacionalJoven)
		{ 
			if(sexo=="m" && pasaje=="nacional")
			{
				primeraVezHombreNacionalJoven=0;
				edadMasJovenNacional=edad;
				nombreMasJovenNacional=nombre;
			}
		}
		else
		{
			if(edad < edadMasJovenNacional)
			{
				edadMasJovenNacional=edad;
				nombreMasJovenNacional=nombre;
			}
		}//puntoA

		if(bandera)
		{
			if(bandera=0)
			{
				edadMaxima=edad;
				sexo=sexoPasajeroMasViejo;
				bandera=1;
			}else
			{
				if(edad>edadMaxima)
				{
					edad=edadMaxima;
					sexo=sexoPasajeroMasViejo;
				}
			}
		}
		if(sexo=="f" && (pasaje=="urbano" || pasaje=="nacional"))
		{
			contadorDeMujeresUrbanaONacional++;
		}
	
		



		respuesta=prompt("Si quiere terminar, escriba 'si'");
	}while(respuesta=="si");

}
