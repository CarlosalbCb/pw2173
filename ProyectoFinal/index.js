const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery


const botonEntrar = document.getElementById('btnEntrar');
var usuario= document.getElementById('usuario');
var contrasena= document.getElementById('contrasena');
let PantallaGrupos;

botonEntrar.addEventListener('click',function(event){
	$.ajax({
		url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario='+$("#usuario").val()+'&clave='+$("#contrasena").val(),
		dataType: 'json',
		success: function(data){
			if(data.respuesta == true){
				console.log("Usuario Valido");
/////////////////Asignamos los tokens usuario, usuariovalida y periodo actual a las variables globales para su futuro uso./////////////////////////////
				require('electron').remote.getGlobal('infoUsuarios').usuario = $("#usuario").val();
				require('electron').remote.getGlobal('infoUsuarios').usuariovalida = data.usuariovalida;
				require('electron').remote.getGlobal('infoUsuarios').periodoactual = data.periodoactual;

				//console.log(require('electron').remote.getGlobal('infoUsuarios').usuario);
				//console.log(require('electron').remote.getGlobal('infoUsuarios').usuariovalida);
				//console.log(require('electron').remote.getGlobal('infoUsuarios').periodoactual);
				usuarioAceptado();
			}
			else{
				alert("Usuario o contraseña incorrectos");
			}
		}
	})
	
});


function usuarioAceptado(){
	PantallaGrupos= new BrowserWindow({width:320,height:425});
	PantallaGrupos.loadURL(url.format({
		pathname: path.join(__dirname,'pantallaGrupos.html'),
		protocol:'file', 
		slashes:true
	}));
	PantallaGrupos.webContents.openDevTools();
	PantallaGrupos.show();
}
