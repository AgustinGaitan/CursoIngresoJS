
/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva */

function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQr;
	var contadorTarjeta;
	var contadorEfete;
	var formaDePagoMasUtilizada;

	contador=0;
	acumulador=0;
	contadorQr=0;
	contadorTarjeta=0;
	contadorEfete=0;


	do
	{
		nombre=prompt("Ingrese su nombre");

		do
		{
			cantidadDePersonas=prompt("Ingrese la cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}
		while(isNaN(cantidadDePersonas) || cantidadDePersonas<1);

		do
		{
			cantidadDeDias=prompt("Ingrese la cantidad de dias que va a estar");
			cantidadDeDias=parseInt(cantidadDeDias);
		}while(isNaN(cantidadDeDias) || cantidadDeDias<1);

		do
		{
			formaDePago=prompt("Ingrese su forma de pago");

		}while(!isNaN(formaDePago) || formaDePago!="qr" && formaDePago!="efectivo" && formaDePago!="tarjeta");

		console.log("personas: " +cantidadDePersonas);
		console.log("dias: " +cantidadDeDias);
		console.log("forma de pago: " +formaDePago);

		if(contador==0 || maximoDePersonas<cantidadDePersonas) //sacando el maximo
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombre;

		}
		if(contador==0 || maximoDeDias<cantidadDeDias) //sacando el 2ndo maximo
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;

		}

		switch(formaDePago)
		{
			case "efectivo":
				contadorEfete++;
				break;
			case "qr":
				contadorQr++;
				break;
			default:     //al ser el unico restante, es el case "tarjeta":
				contadorTarjeta++;
				break;
		}

		acumulador=acumulador+cantidadDeDias;
		contador++;
    	respuesta=prompt("Desea continuar?Ingrese 's' si asi lo desea.");
	}while(respuesta=="s"); //termina el while

	if(contadorEfete>contadorTarjeta && contadorEfete>contadorQr)
	{
	
	formaDePagoMasUtilizada="efectivo";
		
	}else
	{
		if(contadorQr>contadorTarjeta)
		{
			formaDePagoMasUtilizada="qr";
		}else
		{
			formaDePagoMasUtilizada="tarjeta";
		}
	}

	promedio=acumulador/contador;
	console.log("Nombre con mas personas" +maximoDePersonasNombre);
	console.log("Cantidad de personas que se quedaron mas dias " +maximoDeDiasCantidadDePersonas);
	console.log("forma de pago mas utilizada: " +formaDePagoMasUtilizada);

	document.write("<br> Nombre del huesped con mas invitados: " +maximoDePersonasNombre);





}
