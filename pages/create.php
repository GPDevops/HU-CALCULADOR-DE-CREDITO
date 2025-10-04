<?php
    $id= 0;
    $nombres= "";
    $apellidos= "";
    $numeroTelefono= "";
    $correo= "";
    $pais= "";
    $ciudad= "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        processContactForm();
    }

function processContactForm() {
    require_once "configuracion.php";
    $nombres =$_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $numeroTelefono = $_POST["numeroTelefono"];
    $correo = $_POST["correo"];
    $pais = $_POST["pais"];
    $ciudad = $_POST["ciudad"];


    $sql = "INSERT INTO contactos (nombres,apellidos,numeroTelefono,correo,pais,ciudad) VALUES (?,?,?,?,?,?)";
//Para acceder a la DB, siempre se usa la variable $pdo que esta definida en el archivo config.php
//con el API $pdo necesitamos definir un objeto $stmt para ejecutar los comandos
    if ($stmt = $pdo->prepare($sql)) {
        //se ejecuta la sentencia sql que devolvera falso o verdader para indicar exito o error
        if ($stmt->execute([$nombres,$apellidos,$numeroTelefono,$correo,$pais,$ciudad])) {
        //si se ha guardado con exito se redirige a la pagina de contacto
        header("location: form.php");
        exit();
        }else {
            echo "Los siento! se ha presentado un error.";
        }
    }
    //cerrar la variable stmt
    unset($stmt);
    //cerrar la conexion a la base de datos
    unset($pdo);
}
?>