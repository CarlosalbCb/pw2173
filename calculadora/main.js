const app=require('electron').app;
const BrowserWindow=require('electron').BrowserWindow;
const path=require('path'); //muestra la ruta del archivo 
const url= require('url'); //carga una página
// ECMASCRIPT = 6.  let=const  permite declarar variables pero cuando reciben un valor se vuelven constantes
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal= new BrowserWindow({width:267,height:250});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true 
	}));
	PantallaPrincipal.webContents.openDevTools();
	PantallaPrincipal.show();
};

app.on('ready',muestraPantallaPrincipal);

