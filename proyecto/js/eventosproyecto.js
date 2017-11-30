var inicia = function(){
	var entrada = function(){
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		var parametros="opc=valida"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();
		$.ajax({
			url:"localhost/pw/php/entrada.php",
			dataType:'json',
			success:function(data){
			
			},
			error:function(a,b,c){

			}
		});
	}
	$("#btnEntrar").on("click",entrada)
}

$(document).ready(inicia);