//Me arroja el código de error 2, pero al reiniciar el adaptador wifi, funcionó.
function inicio(){

	gestionLocalStorage();
}
function posicion(pos){

	var latitud=pos.coords.latitude;
	var longitud=pos.coords.longitude; //tipos number
	var lat = document.getElementById("latitud"); 
	var lon = document.getElementById("longitud");
	var arregloPos=[latitud,longitud];
	lat.innerHTML="Latitud: " + latitud; 
	lon.innerHTML="Longitud: " + longitud;
	guardarLocalStorage(latitud,longitud);
}
function error(err){

	alert("Error, código " + err.code);
	cargarLocalStorage();
}

function gestionLocalStorage(){

	if(typeof Storage == undefined){

		console.log("Su navegador no soporta el uso de localStorage!");
	}
	else{

		if(localStorage.latitud && localStorage.longitud){

			cargarLocalStorage();
		}
		else{
			navigator.geolocation.getCurrentPosition(posicion,error,{timeout:10000});
		}
	}
}
function guardarLocalStorage(lat,lon){

	if(lat && lon){

		localStorage.setItem("latitud", lat);
		localStorage.setItem("longitud",lon);
	}
	else{

		console.log("lat o lon es nulo!");
	}
}
function cargarLocalStorage(){

	var lat = document.getElementById("latitud"); 
	var lon = document.getElementById("longitud");

	lat.innerHTML="Latitud: " + localStorage.latitud; 
	lon.innerHTML="Longitud: " + localStorage.longitud;
}
window.onload=inicio;