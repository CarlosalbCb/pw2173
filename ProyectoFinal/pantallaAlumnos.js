const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página*/
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery

const usuario = require('electron').remote.getGlobal('infoUsuarios').usuario;
const usuariovalida = require('electron').remote.getGlobal('infoUsuarios').usuariovalida;
const periodoactual = require('electron').remote.getGlobal('infoUsuarios').periodoactual;

const clavemateria = require('electron').remote.getGlobal('infoGrupos').clavemateria;
const grupo = require('electron').remote.getGlobal('infoGrupos').grupo;

console.log(clavemateria);
console.log(grupo);
var alumnos = new Array();

function datos(ncontrol,apellidopaterno,apellidomaterno,nombre){
	this.ncontrol = ncontrol;
	this.apellidopaterno = apellidopaterno;
	this.apellidomaterno= apellidomaterno;
	this.nombre=nombre;
}


function cargaAlumnos(){
	$.ajax({
		//url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/obtienealumnos2.php?usuario=920&usuariovalida=49nc8Eznl4dnU&periodoactual=2173&materia=AEB1055&grupo=8B',
		url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/obtienealumnos2.php?usuario='+usuario+'&usuariovalida='+usuariovalida+'&periodoactual='+periodoactual+'&materia='+clavemateria+'&grupo='+grupo,
		dataType: 'json',
		success: function(data){
			if(data.respuesta == true){
				console.log("alumnos cargados");
			}
			else{
				console.log("alumnos no cargados");
			}
		}
	});
}

cargaAlumnos();