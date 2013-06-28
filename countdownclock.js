function updatetime() { //Funcion para actualizar el reloj
	
	now  = new Date(); //Fecha de hoy
	then = new Date("October 09, 2013 11:30:00"); // fecha en la cual sera el evento
	diff = then - now; // tiempo faltante del evento
		
	dias  = Math.floor( diff / (1000*60*60*24) ); // Calculo de los dias faltantes
	horas = Math.floor( diff / (1000*60*60) ); // calculo de las hroas faltantes
	minutos  = Math.floor( diff / (1000*60) ); // calculo de los minutos faltantes
	segundos  = Math.floor( diff / 1000 ); // calculo de los segundos faltantes
		
	// Conversiones

	dd = dias; 
	hh = horas - dias  * 24;
	mm = minutos  - horas * 60;
	ss = segundos  - minutos  * 60;

	// Crear divisiones

	var divdias = document.createElement("div");	
	var divhoras = document.createElement("div"); 	
	var divminutos = document.createElement("div"); 
	var divsegundos = document.createElement("div");

	divdias.className = "dias";		
	divhoras.className = "horas";	
	divminutos.className = "minutos";	
	divsegundos.className = "segundos";

	divdias.innerHTML = '<span class="num">' + dd + '<br/> dias </span>';
	divhoras.innerHTML = '<span class="num">' + hh + '<br/>  horas </span>';
	divminutos.innerHTML = '<span class="num">' + mm + '<br/>  minutos </span>';
	divsegundos.innerHTML = '<span class="num">' + ss + '<br/>  segundos </span>';

	while (document.getElementById("CLOCKCLOCK").hasChildNodes()) 
	{
    	document.getElementById("CLOCKCLOCK").removeChild(document.getElementById("CLOCKCLOCK").lastChild);
	}

	document.getElementById("CLOCKCLOCK").appendChild(divdias);
	document.getElementById("CLOCKCLOCK").appendChild(divhoras);
	document.getElementById("CLOCKCLOCK").appendChild(divminutos);
	document.getElementById("CLOCKCLOCK").appendChild(divsegundos);
}

setInterval('updatetime()', 1000 );
