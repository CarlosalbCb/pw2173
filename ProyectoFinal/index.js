const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery
//let PantallaDetalle; 

const botonEntrar = document.getElementById('btnEntrar');
var usuario= document.getElementById('usuario');
var contrasena= document.getElementById('contrasena');

function datos(usuariovalida,periodoactual){
	this.usuariovalida = usuariovalida;
	this.periodoactual = periodoactual;
}

botonEntrar.addEventListener('click',function(event){
	//console.log("click");
	$.ajax({
		url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario='+$("#usuario").val()+'&clave='+$("#contrasena").val(),
		dataType: 'json',
		success: function(data){
			if(data.respuesta == true){
				console.log("click");
			}
			else{
				console.log("usuario invalido")
			}
		}
	})
	
});
