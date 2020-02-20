function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta=0;

	while(respuesta!="no")
	{
		respuesta=prompt("Ingrese un numero, o diga que no para terminar");
		if(!isNaN(respuesta))
		{
			respuesta=parseInt(respuesta);
			
			if(respuesta>0)
			{
			
			    positivo=respuesta+positivo;
			}
			else
			{	
				if(respuesta<0)
					{
						negativo=negativo*respuesta;
					}

			}


		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
