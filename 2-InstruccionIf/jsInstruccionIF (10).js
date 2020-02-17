function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() * 10) + 1;  
	if(numeroRandom>8)
	{
		alert("Excelente");
	}
	else
		{
			if(numeroRandom>3)
			{
				alert("Aprobó");
			}
			else
			{
				alert("Vamos, la próxima se puede");
			}
		}
		console.log(numeroRandom);
	

}//FIN DE LA FUNCIÓN