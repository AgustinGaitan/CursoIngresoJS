function mostrar()
{	
	var marca;
	var peso;
	var temperaturaDeAlmacenamiento;
	var contadorPeso;
	var respuesta;

	
	do
	{
		do
		{
		marca=prompt("Ingrese la marca del producto");
		}
	do
	{
		prompt=peso("Ingrese el peso (debe ser entre 1 y 100)");
		peso=parseInt(peso);
	}while(isNaN(peso) || (!(peso<101 && peso>0)));

	do
	{	
		temperaturaDeAlmacenamiento=prompt("Ingrese la temperatura del producto");
		temperaturaDeAlmacenamiento=parseInt(temperaturaDeAlmacenamiento);

	}while(isNaN(temperaturaDeAlmacenamiento) || temperaturaDeAlmacenamiento>30 && temperaturaDeAlmacenamiento<-30);
	

	respuesta=prompt("Desea continuar? escriba 'si' si asi lo desea");
	}while(respuesta=="si");

}