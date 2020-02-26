/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso ()
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;

	edad=0;
	sexo=0;
	estadoCivil=0;
	sueldoBruto=0;
	legajo=0;
	
	while(isNaN(edad) || edad<18 || edad>90)
	{
		edad=prompt("Ingrese su edad, recuerde que debe ser entre 18 y 90");
		edad=parseInt(edad);

	}
	while(!isNaN(sexo) || sexo!="m" && sexo!="f" )
	{
		sexo=(prompt("Ingrese su sexo, 'M' para masculino, 'F' para femenino.")).toLowerCase(); // para que acepte mayuscula
	}
	switch(sexo)  //Los switch que están despues de los while sirven para que devuelva la palabra completa y no la abreviacion, están fuera de los while porque se sobreescribe la variable y no sale del while
		{
			case "m":
			sexo="Masculino";
			break;
			case "f":
			sexo="Femenino";
			break;
		}	
	while(isNaN(estadoCivil) || estadoCivil<1 || estadoCivil>4)   
	{
		estadoCivil=prompt("Ingrese su estado civil. Tener en cuenta que 1= Soltero, 2= Casado, 3= Divorciado, 4= Viudo");
		estadoCivil=parseInt(estadoCivil);
	}
	switch(estadoCivil)
		{
			case "1":
			estadoCivil="Soltero/a";
			break;
			case "2":
			estadoCivil="Casado/a";
			break;
			case "3":
			estadoCivil="Divorciado/a";
			break;
			case "4":
			estadoCivil="Viudo/a";
			break;
		}	
	while(isNaN(sueldoBruto)||sueldoBruto<8000)
	{
		sueldoBruto=prompt("Ingrese sueldo bruto,no debe ser menor a 8000");
		sueldoBruto=parseInt(sueldoBruto);
	}
	while(isNaN(legajo)||legajo<1000 || legajo>9999)
	{
		legajo=prompt("Ingrese su numero de legajo y debe ser de 4 digitos.");
		legajo=parseInt(legajo);
	}
	while(!isNaN(nacionalidad) || nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{	
		nacionalidad=(prompt("Ingrese su nacionalidad.A= Argentino, E= Extranjero y N= Nacionalizado")).toUpperCase(); //para que acepte minuscula
	}
	switch(nacionalidad)
		{
			case "A":
			nacionalidad="Argentino/a";
			break;
			case "E":
			nacionalidad="Extranjero/a";
			break;
			case "N":
			nacionalidad="Nacionalizado/a";
			break;
		}	
	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=sueldoBruto;
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;
		
}