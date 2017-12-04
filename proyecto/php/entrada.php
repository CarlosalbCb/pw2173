<?php
	include 'conexion.php';

	function validaEntrada(){
		$conexion=conectaBD();
		$respuesta=false;
		$usuario=$_POST["usuario"];
		$clave=md5($_POST["clave"]);
		$consulta="select ncontrol, clave from alumnos where ncontrol ='".$usuario."' and clave='".$clave."' limit 1";
		$resConsulta=mysqli_query($conexion,$consulta);
		if(mysqli_num_rows($resConsulta) > 0){
			$respuesta = true;
		}
		$salida = array('respuesta' => $respuesta );
		print json_encode($salida);
	}

	$opc=$_POST["opc"];
	switch ($opc) {
		case 'valida':
			validaEntrada();
			break;
			
		default:
			
			break;
	}
?>