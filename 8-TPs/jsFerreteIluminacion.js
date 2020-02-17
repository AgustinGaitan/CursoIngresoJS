/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
*/
 function CalcularPrecio () 
{
	var precioLampara;
	var cantidadLampara;
	var descuento;
	var precioConDescuento;
	var precioFinal;
	var marca;
	var precioLamparaSinDescuento;
	var precioImpuesto;
	var iibb; 

	precioLampara=35;
	descuento=0;
	cantidadLampara=document.getElementById('Cantidad').value;
	cantidadLampara=parseInt(cantidadLampara);
	marca=document.getElementById('Marca').value;
	precioLamparaSinDescuento=precioLampara*cantidadLampara;	
//ITEM A//
	if(cantidadLampara>5)
	{
		descuento=50;
	}else
	{
//ITEM B//
	
		if(cantidadLampara==5)
		{
			if(marca=="ArgentinaLuz")
			{
				descuento=40;
			} else
			{
				descuento=30;
			}
		}//ITEM C//
		else
		{
			if(cantidadLampara==4)
			{
				if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
				{
					descuento=25;
				}else
				{
					descuento=20;
				}//ITEM D//
			}else
			{
				if(cantidadLampara==3)
				{
					if(marca=="ArgentinaLuz")
					{
						descuento=15;
					}else
					{
						if(marca=="FelipeLamparas")
						{
							descuento=10;
						}else
						{
							descuento=5;
						}
						//ITEM E//
					}
						
				}

			}
			
		}	
	}	
	precioConDescuento=precioLamparaSinDescuento*descuento/100;
	precioFinal=(cantidadLampara*precioLampara)-precioConDescuento;
	iibb=precioFinal*10/100;
	if(precioFinal>120)
	{
		precioImpuesto=precioFinal+iibb;
		precioFinal=precioImpuesto
		alert("Usted pagó $" +iibb+ " de impuestos");
     }
	document.getElementById('precioDescuento').value=precioFinal;
}	
 