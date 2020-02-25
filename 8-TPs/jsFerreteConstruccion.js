/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{	
	var cantidadAlambre;
	var largo;
	var ancho;
	var perimetro;
	var totalComprado;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	perimetro=2*ancho+2*largo;
	totalComprado=perimetro*3;

	alert("Se debe comprar " +totalComprado+ " metros de alambre.")

}
function Circulo () 
{	
	var cantidadAlambre;
	var circunferencia;
	var radio;
	var totalComprado;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	circunferencia=2*Math.PI*radio
	totalComprado=circunferencia*3;
	alert("Se debe comprar " +circunferencia+ " metros de alambre");
	
}
function Materiales () 
{
	var cantidadCemento;
	var cantidadCal;
	var ancho;
	var largo;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	cantidadCemento=(largo*ancho)*2;
	cantidadCal=(largo*ancho)*3;

	alert("Se necesitarán " +cantidadCemento+ " bolsas de cemento y " +cantidadCal+ " bolsas de cal.");


}