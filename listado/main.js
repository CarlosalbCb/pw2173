// const app=require('electron').app;
// const BrowserWindow=require('electron').BrowserWindow;
const {app, BrowserWindow}= require('electron');
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
// ECMASCRIPT = 6.  let=const  permite declarar variables pero cuando reciben un valor se vuelven constantes
let PantallaPrincipal;

//objeto global para compartir datos entre pantallas
global.infoUsuarios = {
	nombre: '',
	genero: '',
	foto: '',
	direccion: '',
	telefono: ''
}

function muestraPantallaPrincipal(){
	PantallaPrincipal= new BrowserWindow({width:267,height:250});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true 
	}));
	PantallaPrincipal.webContents.openDevTools();   //Linea para herramientas de desarrollador(consola que muestra errores)
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal);
