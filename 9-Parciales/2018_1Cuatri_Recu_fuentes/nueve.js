function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var contadorTemperaturasPares;
	var contador;
	var pesoPesado;
	var nombrePesado;
	var temperaturaPesado;
	var contadorAnimalesFrios;
	var pesoTotal;
	var promedioPeso;
	var pesoMaximo;
	var pesoMinimo;
	var contadorDeAnimales;


	contadorTemperaturasPares=0;
	contador=0;
	pesoPesado=0;
	temperatura=0;
	contadorAnimalesFrios=0;
	pesoTotal=0;
	temperaturaPesado=0;
	promedioPeso=0;
	pesoMaximo=0;
	pesoMinimo=0;
	contadorDeAnimales=0;

	do
	{	
		do
		{

			nombre=prompt("Ingrese el nombre del animal");
		
		}while(!isNaN(nombre));
		
		do
		{
			peso=prompt("Ingrese el peso del animal, debe ser entre 1 y 1000");
			peso=parseInt(peso);

		}while(isNaN(peso) || (peso<1 || peso>1000));
		
		do
		{
			temperatura=prompt("Ingrese la temperatura del habitat, debe ser entre -30 y 30");
			temperatura=parseInt(temperatura);
		
		}while(isNaN(temperatura) || (temperatura<-30 || temperatura>30));

		if(temperatura%2==0)
		{
			contadorTemperaturasPares++;          
		}//puntoA

		if(contador==0 || peso>pesoPesado)
		{
			nombrePesado=nombre;
			pesoPesado=peso;    
			temperaturaPesado=temperatura;
		}//puntoB
		if(temperatura<1)
		{
			contadorAnimalesFrios++;
		}//puntoC
		if(contador==0 || contador>0)
		{
			pesoTotal=pesoTotal+peso;
		}//puntoD
		if(contador==0 || peso>pesoMaximo && temperatura<1)
		{
			pesoMaximo=peso;
		}
		if(contador==0 || peso<pesoMinimo && temperatura<1)
		{
			pesoMinimo=peso;
		}
		
		//puntoF
		
		contador++;
		contadorDeAnimales++;
	
		console.log("Nombre del animal " +nombre);
		console.log("Peso del animal " +peso);
		console.log("Temperatura  " +temperatura);

		respuesta=prompt("Ingrese 'si' si desea continuar");
	}while(respuesta!="si");

	promedioPeso=pesoTotal/contadorDeAnimales;

	document.write("<br> La cantidad de temperaturas pares son " +contadorTemperaturasPares);
	document.write("<br> El nombre del animal mas pesado es " +nombrePesado+ " y la temperatura de su habitat es " +temperaturaPesado);
	document.write("<br> La cantidad de animales que viven a menos de 0 grados es " +contadorAnimalesFrios);
	document.write("<br> El promedio del peso de todos los animales es " +promedioPeso);
	document.write("<br> El peso maximo de los animales que viven a temperaturas bajo cero son " +pesoMaximo+ " y el minimo es " +pesoMinimo);

}

