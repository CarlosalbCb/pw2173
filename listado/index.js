const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery
function inicia(){
	$.ajax({
		url: 'https://randomuser.me/api/?results=20',
		dataType: 'json',
		success: function(data) {
			var resultado="";
			var nombre="";
			for(var i=0;i<20;i++){
				nombre= data.results[i].name.first+" "+data.results[i].name.last;
				resultado="<li>"+nombre+"</li>";
				$("#lstUsuarios").append(resultado);
			}
			


		  	// $("#nombre").html("Nombre: "+data.results[0].name.first+" "+data.results[0].name.last);
		  	// $("#genero").html("Genero: "+data.results[0].gender);
		  	// $("#foto").attr("src",data.results[0].picture.large);
		  	// $("#domicilio").html("Domicilio: "+data.results[0].location.street+", "+
		  	// 	data.results[0].location.city+" "+data.results[0].location.state+", CP:"+data.results[0].location.postcode);
		  	// $("#email").html("Email: "+data.results[0].email);
		  	// $("#tel").html("Telefono: "+data.results[0].phone);
		  	// $("#cell").html("Celular: "+data.results[0].cell);
		}
	});
}
inicia();