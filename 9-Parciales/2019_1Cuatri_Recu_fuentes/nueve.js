function mostrar()
{	
	var nombreDelEstudiante;
	var edadDelEstudiante;
	var sexoDelEstudiante;
	var notaFinal;
	var respuesta;
	var contadorHombres;
	var contadorHombresAprobados;
	var promedioDeNotasDeMenoresDeEdad;
	var cantidadDeMenoresDeEdad;
	var promedioDeNotasDeAdolescentes;
	var cantidadAdolescentes;
	var cantidadDeMayores;
	var promedioDeNotasDeMayores;
	var promedioDeNotasDeHombres;
	var promedioDeNotasDeMujeres;
	var contadorDeMujeres;
	var contadorNotaFinalMujeres;
	var contadorNotaFinalHombres;
	var acumuladorNotaFinalHombres;
	var acumuladorNotaFinalMujeres;

	contadorHombres=0;
	contadorHombresAprobados=0;
	cantidadDeMenoresDeEdad=0;
	cantidadAdolescentes=0;
	cantidadDeMayores=0;
	contadorDeMujeres=0;
	promedioDeNotasDeMujeres=0;
	promedioDeNotasDeMayores=0;
	promedioDeNotasDeHombres=0;
	promedioDeNotasDeAdolescentes=0;
	promedioDeNotasDeMenoresDeEdad=0;

	do
	{
		nombreDelEstudiante=prompt("Ingrese el nombre");
		do
		{
			edadDelEstudiante=prompt("Ingrese la edad");
			edadDelEstudiante=parseInt(edadDelEstudiante);
		}while(isNaN(edadDelEstudiante));

		do
		{
			sexoDelEstudiante=prompt("Ingrese el sexo, 'f' para femenino, 'm' para masculino");
		}while(!isNaN(sexoDelEstudiante) || sexoDelEstudiante!="f" && sexoDelEstudiante != "m");

		do
		{
			notaFinal=prompt("Ingrese la nota final");
			notafinal=parseInt(notaFinal);
		}while(isNaN(notaFinal));

		switch(sexoDelEstudiante)
		{
			case "m":
				contadorHombres++;
				acumuladorNotaFinalHombres=acumuladorNotaFinalHombres+notaFinal;
				break;
			default:
				contadorDeMujeres++;
				acumuladorNotaFinalMujeres=acumuladorNotaFinalMujeres+notaFinal;
				break;
		}

		if(notaFinal>4 && sexoDelEstudiante=="m")
		{
			contadorHombresAprobados++;
		}

		if(edadDelEstudiante<18)
		{
			cantidadDeMenoresDeEdad++;
			
		}else 
		{
			cantidadDeMayores++;
		}
		
		if(edadDelEstudiante>12 && edadDelEstudiante<18)
		{
			cantidadAdolescentes++;
		}
		
		console.log("El nombre es " +nombreDelEstudiante);
		console.log("La edad es " +edadDelEstudiante);
		console.log("El sexo es " +sexoDelEstudiante);
		console.log("La nota final es " +notaFinal);
		

		respuesta=prompt("Quiere continuar? ingrese 'si'. En caso contrario, escriba otra cosa.");
	}while(respuesta=="si");
	

	promedioDeNotasDeMenoresDeEdad=notaFinal/cantidadDeMenoresDeEdad;
	promedioDeNotasDeMayores=notaFinal/cantidadDeMayores;
	promedioDeNotasDeAdolescentes=notaFinal/cantidadAdolescentes;
	promedioDeNotasDeHombres=acumuladorNotaFinalHombres/contadorHombres;
	promedioDeNotasDeMujeres=acumuladorNotaFinalMujeres/contadorDeMujeres;
	document.write("<br> La cantidad de varones aprobados es" +contadorHombresAprobados);
	document.write("<br> El promedio de notas de los menores de edad es " +promedioDeNotasDeMenoresDeEdad);
	document.write("<br> El promedio de notas de los adolescentes es " +promedioDeNotasDeAdolescentes);
	document.write("<br> El promedio de notas de los mayores de edad es " +promedioDeNotasDeMayores);

}
