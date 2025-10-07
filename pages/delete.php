<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["id"])) {
    $id = $_POST["id"];
    eliminarRegistro($id);
}


function eliminarRegistro($id)
{
    require_once "configuracion.php";
    $sql = "DELETE FROM contactos WHERE id = :id";
    if ($stmt = $pdo->prepare($sql)) {
        $stmt->bindParam("id", $id);
        // Se ejecuta la sentencia sql que devolvera falso o verdadero para indicar exito o error
        if ($stmt->execute()) {
            // Si se ha borrado con exito se redirige a la pagina de contacto
            header("location: form.php");
            exit();
        } else {
            echo "Lo siento! Se ha presentado un error.";
        }
    } else {
        //si no viene el id se redirige a la vista de error
        header("location: error.php");
        exit();
    }
    //cerramos la sentencia
    unset($stmt);
    //cerrar la conexion a la base de datos
    unset($pdo);
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap-5.2.3-dist/css/bootstrap.min.css">
    <script src="../css/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js"></script>
    <title>Eliminar</title>
    <style>
        .wrapper {
            width: 600px;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <h2 class="mt-5 mb-3">Eliminar Cliente</h2>
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                    <div class="alert alert-danger">
                        <input type="hidden" name="id" value="<?php echo trim($_GET["id"]); ?>">
                        <p>Por favor confirmar que deseas eliminar el cliente?</p>
                        <p>
                            <input type="submit" value="Si" class="btn btn-danger">
                            <a href="./form.php" class="btn btn-secondary">No</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>