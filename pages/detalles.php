<?php
// Se comprueba que si venga el id del registro como parametro antes de proceder
if(isset($_GET["id"]) && !empty(trim($_GET["id"]))){
   // desde este archivo se va a acceder a base de datos es necesario incluir la conenfiguracion y conexion a base de datos
    require_once "configuracion.php";    

// Se contruye la sentencia esql en una variable
    $sql = "SELECT * FROM contactos WHERE id = ?";
    //se prepara la sentencia sql
   if($stmt = $pdo -> prepare($sql)){ 
        // se entrega el id copmo parametro
        $param_id = trim($_GET["id"]);
 // Se ejecuta la sentencia para obtener los varoles, si el resultado es true, se contruye la tabla y se pintan los varores
         if($stmt ->execute([$param_id])){ 
             //si el resultado es exitoso se comprueba que si obtengamos registros
            if($stmt ->rowCount() == 1){
                //dado que se obtendria solo un registro porque se busca por ID, no es necesario hacer un siclo, el fet devuelve un array asociativo
                $row = $stmt -> fetch();
                // se recuperan los valores en cada variable
                $nombres = $row["nombres"];
                $apellidos = $row["apellidos"];
                $numeroTelefono = $row["numeroTelefono"];
                $correo = $row["correo"];
                $pais = $row["pais"];
                $ciudad = $row["ciudad"];
            } else{
                // si no se encuentra un registro se redirige a la vista de error
                header("location: error.php");
                exit();
            }  
        } else{
            echo "Lo siento! Se ha presentado un error.";
        }
    }
   // cerrrar la variable stmt
    unset($stmt);
    // cerrar la conexion a la base de datos
    unset($mysqli);
} else{
       // si no viene el id se redirige a la vista de error
    header("location: error.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="../css/bootstrap-5.2.3-dist/css/bootstrap.min.css">
        <script src="../css/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js"></script>
        <script src="../js/form.js"></script>
        <title>Detalles del Contacto</title>
    </head>

    <body>
        <div class="container">
            <div class="container-fluid"></div>
            <div class="row">
                <div class="col-md-12">
                    <h1 class="mt-5 mb-3">Detalles del Registro</h1>
                        <div class="form-group">
                        <label for="nombres">Nombres</label>
                        <p id="nombres" class="fw-bold"><?php echo $row["nombres"];?></p>
                        </div>
                        <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <p id="apellidos" class="fw-bold"><?php echo $row["apellidos"];?></p>
                        </div>
                        <div class="form-group">
                        <label for="numeroTelefono">Numero Telefonico</label>
                        <p id="numeroTelefono" class="fw-bold"><?php echo $row["numeroTelefono"];?></p>
                        </div>
                        <div class="form-group">
                        <label for="correo">Correo</label>
                        <p id="correo" class="fw-bold"><?php echo $row["correo"];?></p>
                        </div>
                        <div class="form-group">
                        <label for="pais">Pais</label>
                        <p id="pais" class="fw-bold"><?php echo $row["pais"];?></p>
                        </div>
                        <div class="form-group">
                        <label for="ciudad">Ciudad</label>
                        <p id="ciudad" class="fw-bold"><?php echo $row["ciudad"];?></p>
                        </div>
                        <p><a href='./form.php' class="btn btn-primary" style="border-radius: 4px;">Regresar a pagina anterior</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </body>

</html>