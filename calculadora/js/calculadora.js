//constantes de electron
const{BrowserWindow}=require('electron').remote;
const app=require('electron').app;
const path=require('path');
const url=require('url');
//Otra ventana
let ventanaCalculadoraCientifica;

function calculadoraCientifica(){
	ventanaCalculadoraCientifica = new BrowserWindow({
		width:380,
		height:380
	});
	ventanaCalculadoraCientifica.loadURL(url.format({
		pathname:path.join(__dirname,'calccientifica.html'),
		protocol:'file',
		slashes:true
	}));
	ventanaCalculadoraCientifica.webContents.openDevTools();//click derecho para que muestre errores
	ventanaCalculadoraCientifica.show();
}


// Variable global
var operador="";
//////Se puede usar en cualquier funcion////////
function numeros(numero){
	if(operador == ""){ //Escribe en operando1
		var valorInicial=document.calculadora.operando1.value;
		if(valorInicial=="0"){
			document.calculadora.operando1.value="";
		}
		//concatena los valores de numero con los del operando1
		document.calculadora.operando1.value=document.calculadora.operando1.value+numero;
	}else{ //operando2
		var valorInicial=document.calculadora.operando2.value;
		if(valorInicial=="0"){
			document.calculadora.operando2.value="";
		}
		//concatena los valores de numero con los del operando1
		document.calculadora.operando2.value=document.calculadora.operando2.value+numero;
	}
}

var operadores=function(ope){
	operador=ope;
}

var borrar=function(){
	if(operador="CE"){
		document.calculadora.operando1.value="";
		document.calculadora.operando2.value="";
		document.calculadora.resultado.value="0";
		operador="";
		document.calculadora.operando1.focus();
	}
}

var igual=function(){
	if(operador=="+"){
		var suma=parseInt(document.calculadora.operando1.value)+parseInt(document.calculadora.operando2.value);
		document.calculadora.resultado.value=suma;

	}
}