const {BrowserWindow}= require('electron').remote;
const app= require('electron').app;
// const path=require('path'); //muestra la ruta del archivo 
// const url= require('url'); //carga una página
const $ = require('jquery');  //el simbolo $ indica el inicio de un jquery
//constantes para llamar al PDF
const ipc=require('electron').ipcRenderer
const botonPDF= document.getElementById('btnPDF');

//Activamos el evento click del boton btnPDF
botonPDF.addEventListener('click', function(event){
	ipc.send('print-to-pdf')
});

var nombre = require('electron').remote.getGlobal('infoUsuarios').nombre;
var genero = require('electron').remote.getGlobal('infoUsuarios').genero;
var foto = require('electron').remote.getGlobal('infoUsuarios').foto;
var direccion = require('electron').remote.getGlobal('infoUsuarios').direccion;
var telefono = require('electron').remote.getGlobal('infoUsuarios').telefono;

$("#idNombre").html(nombre);
$("#idGenero").html(genero);
$("#idDireccion").html(direccion);
$("#idTelefono").html(telefono);
$("#idFoto").attr("src",foto);

