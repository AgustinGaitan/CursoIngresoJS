/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
	var gradosFahrenheit;
	var gradosCentigrados;
function FahrenheitCentigrados () 
{
	gradosFahrenheit=0;
	gradosFahrenheit=document.getElementById('Temperatura').value;
	gradosFahrenheit=parseInt(gradosFahrenheit);

	gradosFahrenheit=32-gradosFahrenheit;
	alert("Son " +gradosFahrenheit+ " grados centigrados")
	
}

function CentigradosFahrenheit () 
{
	gradosCentigrados=0;
	gradosCentigrados=document.getElementById('Temperatura').value;
	gradosCentigrados=parseInt(gradosCentigrados);

	gradosCentigrados=gradosCentigrados+32;
	alert("Son " +gradosCentigrados+ " grados Fahrenheit.");
}
