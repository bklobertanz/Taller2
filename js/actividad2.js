//Contador
var acum=0;
var contador=(function() {
    return function() {return acum+=1;}
})();
function mostrarContador(){

	document.getElementById("pcontador").innerHTML=contador();
	
	//pasar a CSS 
	switch(acum) {
	    case 5:
	        document.getElementById("pcontador").className ="red";
	        break;
	    case 6:
	        document.getElementById("pcontador").className ="blue";
	        break;
	    case 7:
	        document.getElementById("pcontador").className ="green";
	        break;
	    case 8:
	        document.getElementById("pcontador").className ="brown";
	        break;
	    case 9:
	        document.getElementById("pcontador").className ="gray";
	        break;
	    case 10:
	        document.getElementById("pcontador").className ="pink";
	        break;
	    case 11:
	        document.getElementById("pcontador").className ="yellow";
	        break;
        default: 

        	if(acum>=12){

	       	 document.getElementById("pcontador").className ="black";
        	}
	} 
}
function reiniciarContador(){

	acum=0;
	document.getElementById("pcontador").innerHTML=0;
	document.getElementById("pcontador").className ="black";
}
//Calculadora 

function sumar (a,b){

return a+b; 
}
function restar(a,b){
	return a-b; 
}
function multiplicar(a,b){

	return a*b; 
}
function dividir(a,b){

	if(b!=0){

		return a/b;	
	}
	else{
		return ("No se puede dividir por 0");
	}
	
}
function incrementar(a){

	return a=a+1; 
}
function decrementar(a){

	return a=a-1;
}
