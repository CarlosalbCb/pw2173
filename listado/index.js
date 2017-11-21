const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery
var usuarios = new Array(20);

function datos(nombre,genero,foto,direccion,telefono){
	this.nombre = nombre;
	this.genero = genero;
	this.foto= foto;
	this.direccion=direccion;
	this.telefono=telefono;

}

function inicia(){
	$.ajax({
		url: 'https://randomuser.me/api/?results=20',
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

function botonDetalle(){
	alert(usuarios[this.id].nombre);
	alert(usuarios[this.id].genero);
	alert(usuarios[this.id].foto);
}
$("body").on("click","li > button", botonDetalle);

inicia();