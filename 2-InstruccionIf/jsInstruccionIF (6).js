function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
    edad=parseInt(edad);
	if(edad>17)
	{
		alert("Usted es mayor de edad");

	}
	if(edad>12&&edad<18)
	{
	 	alert("Usted es adolescente");

	}
	if(edad<13)
	{
		alert("Es un niño");
	}

	/* Segunda Version

	var edad;
	edad=document.getElementById('edad').value;
    edad=parseInt(edad);
	if(edad>17)
	{
		alert("Usted es mayor de edad");

	}
	else
  {
	if(edad>12&&edad<18)
	{
	 	alert("Usted es adolescente");

	}
	if(edad<13)
	{
		alert("Es un niño");
	}
  }

     MEJOR OPCION//MAYOR EFICIENCIA

    var edad;
	edad=document.getElementById('edad').value;
    edad=parseInt(edad);
	if(edad>17)
	{
		alert("Usted es mayor de edad");

	}
    else
    {
    	if(edad<13)
    	{
    		alert("Es un niño");
	
    	}
    	else
    	{
    		alert("Usted es un adolescente");
	
    	}
	
    }
    */
  




//tomo la edad  




}//FIN DE LA FUNCIÓN