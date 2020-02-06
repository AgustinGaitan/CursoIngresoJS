/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultado;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);

	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);

	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	resultado=primerPrecio+segundoPrecio+tercerPrecio;
	resultado=parseInt(resultado);

	alert("La suma de los precios es " +resultado);
	
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	var promedio;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);

	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(primerPrecio);

	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	suma=primerPrecio+segundoPrecio+tercerPrecio;

	promedio=suma/3;

	alert("El promedio es de " +promedio);

	
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	var precioFinal
	var iva;
	iva=21

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);

	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);

	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	suma=primerPrecio+segundoPrecio+tercerPrecio;

	precioFinal=suma*iva/100+suma;

	alert("El precio final con IVA es " +precioFinal);
	
}