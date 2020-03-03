/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/


    var numeroIngresado;
	var i;


function NumerosPares ()
{	
	var numerosPares;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	numerosPares=0;
	
	for(i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			console.log(i);
			numerosPares++;

		}

	}	

	alert("La cantidad de numeros pares que hay es : " +numerosPares);
}

function NumerosImpares () 
{	
	var numerosImpares;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	numerosImpares=0;
	
	for(i=1;i<numeroIngresado;i++)
	{
		if((i%2)==1)
		{
			console.log(i);
			numerosImpares++;

		}

	}	

	alert("La cantidad de numeros impares que hay es : " +numerosImpares);
}

function NumerosDivisibles ()
{
	var numerosDivisibles;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	numerosDivisbiles=0;

	for(i=1;i<101;i++)
	{
		if((i%numeroIngresado)==0)
		{
			console.log(i);
			numerosDivisbiles++;
		}
	}

	alert("La cantidad de numeros divisibles que hay es : " +numerosDivisbiles);
}

function VerificarPrimo ()
{
	var numerosPrimos;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	numerosPrimos=0;

	for(i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			alert(+numeroIngresado+ "  es un numero primo.")
		}
		else
		{
			alert(+numeroIngresado+ " no es un numero primo." )       //falta terminar
		}

	}
}

