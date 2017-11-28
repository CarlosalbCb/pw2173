const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery
//let PantallaDetalle; 


function inicia(){
	$.ajax({
		url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario=920&clave=12345678',
		dataType: 'json',
		success: function(data) {
			var resultado="";
			var nombre="";
			var genero="";
			var direccion="";
			var telefono="";
			var foto="";
			for(var i=0;i<20;i++){
				nombre= data.results[i].name.first+" "+data.results[i].name.last;
				genero= data.results[i].gender;
				direccion=data.results[i].location.street;
				telefono= data.results[i].phone;
				foto = data.results[i].picture.medium;
				resultado="<li><img src="+foto+">"+nombre+"<button id='"+i+"'>Detalle</button></li>";
				$("#lstUsuarios").append(resultado);
				usuarios[i]= new datos(nombre,genero,foto,direccion,telefono);
			}
		}
	});
}
