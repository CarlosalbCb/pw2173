var inicia = function(){
	var entrada = function(){
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		var parametros="opc=valida"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();
		$.ajax({
			url:"php/entrada.php",
			dataType:'json', //datos que recibimos
			type:"POST", //datos ocultos que enviamos
			data:parametros,
			success:function(data){
				if(data.respuesta){
					//alert("bienvenido "+data.nombre);
					$("main").load("menu.html");
				}else{
					alert("usuario y/o clave incorrectos");
				}
			},
			error:function(a,b,c){
				alert("no se pudo conectar al server...");
			}
		});
	}
	$("#btnEntrar").on("click",entrada)
}

$(document).ready(inicia);