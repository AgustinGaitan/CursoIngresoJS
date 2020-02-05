/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var primerNumero; //Las variables no pueden: empezar con numeros ni tener espacios//
	var segundoNumero;
	var resultado; //las variables van siempre arriba//
	
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero+segundoNumero; //el signo + concatena, es por eso que se usa parseInt//
	console.log(resultado);



	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero-segundoNumero;
	console.log(resultado);
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

