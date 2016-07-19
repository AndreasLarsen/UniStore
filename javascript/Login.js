


$(".append").val($(".append").val() + '@wustl.edu');

$( ".append" ).append( "<p>@wustl.edu</p>" );



function cambiar_login() {
	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
	document.querySelector('.cont_form_login').style.display = "block";
	document.querySelector('.cont_form_sign_up').style.opacity = "0";   

	setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
	
	setTimeout(function(){    
	document.querySelector('.cont_form_sign_up').style.display = "none";
	},200);
	/*terminar_login_setup()*/
	
  }

function cambiar_sign_up(at) { //Function for when the sign_up button is clicked
  	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  	document.querySelector('.cont_form_sign_up').style.display = "block";
	document.querySelector('.cont_form_login').style.opacity = "0";
  
	setTimeout(function(){  
		document.querySelector('.cont_form_sign_up').style.opacity = "1";
		},100);  

	setTimeout(function(){  
		document.querySelector('.cont_form_login').style.display = "none";
		},400);
	/*terminar_login_setup()*/
}

function terminar_login_setup(){
	document.querySelector('.cont_forms cont_forms').className ="spread";
	window.location.href='Home.html'
	//console.log("Terminando")
}  




function ocultar_login_sign_up() {
	 document.querySelector('.cont_forms').className = "cont_forms";  
	document.querySelector('.cont_form_sign_up').style.opacity = "0";               
	document.querySelector('.cont_form_login').style.opacity = "0"; 

	setTimeout(function(){
	document.querySelector('.cont_form_sign_up').style.display = "none";
	document.querySelector('.cont_form_login').style.display = "none";
	},500); 
  }
  





