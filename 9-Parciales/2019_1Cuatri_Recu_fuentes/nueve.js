function mostrar()
{	
	var nombre;
	var edad;
	var sexo;
	var notaFinal;
	var respuesta;
	var contadorDeHombresAprobados;
	var contadorDeMenoresDeEdad;
	var contadorDeAdolescentes;
	var contadorDeMayoresDeEdad;
	var acumuladorDeNotasDeMenoresDeEdad;
	var acumuladorDeNotasDeAdolescentes;
	var acumuladorDeNotasDeMayoresDeEdad;
	var contadorDeHombres;
	var contadorDeMujeres;
	var acumuladorDeNotasDeMujeres;
	var acumuladorDeNotasDeHombres;
	var promedioDeNotasDeMenoresDeEdad;
	var promedioDeNotasDeAdolescentes;
	var promedioDeNotasDeMayoresDeEdad;
	var promedioDeNotasDeMujeres;
	var promedioDeNotasDeHombres;

	contadorDeHombresAprobados=0;
	contadorDeAdolescentes=0;
	contadorDeMayoresDeEdad=0;
	contadorDeMenoresDeEdad=0;
	acumuladorDeNotasDeMenoresDeEdad=0;
	acumuladorDeNotasDeAdolescentes=0;
	acumuladorDeNotasDeMayoresDeEdad=0;
	contadorDeHombres=0;
	contadorDeMujeres=0;
	acumuladorDeNotasDeMujeres=0;
	acumuladorDeNotasDeHombres=0;

	do
	{
		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre));
		
		do
		{
			edad=prompt("Ingrese la edad, menor a 100");
			edad=parseInt(edad);
		}while(isNaN(edad) || edad>100);

		do
		{
			sexo=prompt("Ingrese el sexo, 'm' para masculino, 'f' para femenino");
		}while(!isNaN(sexo) || sexo!="m" && sexo!="f");

		do
		{
			notaFinal=prompt("Ingrese la nota final");
			notaFinal=parseInt(notaFinal);
		}while(isNaN(notaFinal) || notaFinal<1 || notaFinal>10);

		if(notaFinal>4 && sexo=="m")
		{
			contadorDeHombresAprobados++;
		}

		if(edad>17)
		{
			contadorDeMayoresDeEdad++;
			acumuladorDeNotasDeMayoresDeEdad=acumuladorDeNotasDeMayoresDeEdad+notaFinal;

		}else
		{
			if(edad<18)
			{
				contadorDeMenoresDeEdad++;
				acumuladorDeNotasDeMenoresDeEdad=acumuladorDeNotasDeMenoresDeEdad+notaFinal;
			}
			if (edad>13 && edad<18)
			{
				contadorDeAdolescentes++;
				acumuladorDeNotasDeAdolescentes=acumuladorDeNotasDeAdolescentes+notaFinal;
			}
		}
			switch(sexo)
			{
				case "m":
					contadorDeHombres++
					acumuladorDeNotasDeHombres=acumuladorDeNotasDeHombres+notaFinal;
						break;
				default:
					contadorDeMujeres++;
					acumuladorDeNotasDeMujeres=acumuladorDeNotasDeMujeres+notaFinal;
						break;
			}
		


		console.log(nombre);
		console.log("edad " +edad);
		console.log("sexo " +sexo);
		console.log("nota final " +notaFinal);
		console.log("cantidad mujeres: " +contadorDeMujeres);
		console.log("cantidad hombres: " +contadorDeHombres);
		respuesta=prompt("Ingrese 'si' si quiere continuar, de ser el caso contrario, ingrese cualquier caracter.");
	}while(respuesta=="si");
		
		promedioDeNotasDeMenoresDeEdad=acumuladorDeNotasDeMenoresDeEdad/contadorDeMenoresDeEdad;
		promedioDeNotasDeAdolescentes=acumuladorDeNotasDeAdolescentes/contadorDeAdolescentes;
		promedioDeNotasDeMayoresDeEdad=acumuladorDeNotasDeMayoresDeEdad/contadorDeMayoresDeEdad;
		promedioDeNotasDeHombres=acumuladorDeNotasDeHombres/contadorDeHombres;
		promedioDeNotasDeMujeres=acumuladorDeNotasDeMujeres/contadorDeMujeres;

		document.write("<br> La cantidad de hombres aprobados son: " +contadorDeHombresAprobados);
		document.write("<br> El promedio de notas entre los menores de edad es: " +promedioDeNotasDeMenoresDeEdad);
		document.write("<br> El promedio de notas entre los adolescentes es: " +promedioDeNotasDeAdolescentes);
		document.write("<br> El promedio de notas entre los mayores de edad es: " +promedioDeNotasDeMayoresDeEdad);
		document.write("<br> El promedio de notas de las mujeres es: " +promedioDeNotasDeMujeres);
		document.write("<br> El promedio de notas de los hombres es: " +promedioDeNotasDeHombres);
}


