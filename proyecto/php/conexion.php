<?php 
	function conectaBD(){
		//servidor,usuario,contraseña,bd
		$conexion=mysqli_connect("localhost","root","","pw2173");
		return $conexion;
	}
?>