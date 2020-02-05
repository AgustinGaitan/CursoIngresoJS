/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var aumento;
	aumento= 10;

	importe = document.getElementById('sueldo').value;
	importe = parseInt(importe);
	resultado = parseInt(resultado);

	resultado = aumento*importe/100+importe;

	document.getElementById('resultado').value=resultado;

	console.log(resultado);


	
}
