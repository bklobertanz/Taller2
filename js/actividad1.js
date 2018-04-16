function mostrar() {
	
	var href=document.getElementById("href");
	var pathname=document.getElementById("pathname");
	var navi=document.getElementById("navi");
	var alto=document.getElementById("alto");
	var ancho=document.getElementById("ancho");
	var res=document.getElementById("res");

	href.innerHTML="href: " + location.href;
	pathname.innerHTML="pathname: " + location.pathname;
    navi.innerHTML="OS: " + navigator.oscpu; 
    alto.innerHTML="alto: " + screen.height;
    ancho.innerHTML="ancho: " + screen.width;
    res.innerHTML="resolución : " + (screen.height*screen.width);
}
var cliente = { 
	alto:screen.height, 
	ancho:screen.width,
	getHeight: function(){return this.alto},
	getWidht: function(){return this.ancho},
};
cliente.os=navigator.oscpu; 
cliente.getOs= function(){return this.os};
delete cliente.alto; 

window.onload = mostrar;

