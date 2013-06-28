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
	

	document.getElementById("dias").innerHTML = dd + '<br/> dias';
	document.getElementById("horas").innerHTML = hh + '<br/>  horas';
	document.getElementById("minutos").innerHTML = mm + '<br/>  minutos';
	document.getElementById("segundos").innerHTML = ss + '<br/>  segundos';
	
}

setInterval('updatetime()', 1000 );
