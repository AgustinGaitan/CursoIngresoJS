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

		estadoCivil=parseInt(estadoCivil);
		sueldoBruto=parseInt(sueldoBruto);
		legajo=parseInt(legajo);
        edad=prompt("Ingrese su edad", "De 18 a 90");


		if(edad>17&&edad<91)
		{
			document.getElementById('Edad').value=edad;
			sexo=prompt("Ingrese su sexo","'m' o 'f'");

			switch(sexo)
			{
				case "m":
				case "f":
				document.getElementById('Sexo').value=sexo;
				estadoCivil=prompt("Ingrese su estado civil: 1 para Soltero, 2 para casados, 3 para divorciados y 4 para viudos","1,2,3,4");
				break;
				
				switch(estadoCivil)
				{
					case 1:
					estadoCivil="Soltero/a";
					case 2:
					estadoCivil="Casado/a";
					case 3:
					estadoCivil="Divorciado/a";
					case 4:
					estadoCivil="Viudo/a";
					document.getElementById('EstadoCivil').value=estadoCivil;
					sueldoBruto=prompt("Ingrese su sueldo(no menor a $8000)");
					break;
					
					while(sueldoBruto<8000)
					{
						sueldoBruto=prompt("Ingrese su sueldo(no menor a $8000)");
						document.getElementById('Sueldo').value=sueldoBruto;
						legajo=prompt("Ingrese su legajo, de 4 cifras, sin ceros a la izquierda")

					 }
						if(!isNaN(legajo));
						{
							document.getElementById('Legajo').value=legajo;
							nacionalidad=prompt("Ingrese su nacionalidad, 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados")

							switch(nacionalidad)
							{
								case "a":
								nacionalidad=="Argentino/a";
								break;
								case "e":
								nacionalidad=="Extranjero/a";
								break;
								case "n":
								nacionalidad=="Nacionalizado/a";
								break;
								document.getElementById('Nacionalidad').value=nacionalidad;
							}
						}
					
				}
			}
		}
 
}
