
<?php
include "create.php";
?>
<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../css/bootstrap-5.2.3-dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="../css/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js"></script>  
        <link rel="stylesheet" href="../css/mortgage.css">
        <title>form</title>
    </head>

    <body class="bg-dark">
        <h1 class="card-title mb-3 text-primary p-2">Inmogestion S.A.</h1>
        <!--Definir el contenedor con 5p de espacio en el margen superior-->
    <div class="container p-2">
        <!--Definir un componente card para ubicar todo el formulario-->
        <div class="card mx-3 mt-n5 shadow-lg" style="border-radius: 10px; border-left: 8px solid blue; border-right: 8px solid blue;
        border-top:none; border-bottom:none;">
            <!--Definir un componente card para ubicar el cuerpo del formulario-->
            <div class="card-body">
                <!--Definir titulo del formulario-->
                <h2>Formulario de contacto</h2>
                <!--Definir el formulario-->
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" id="formDatos" method="post">
                    <div class="row">
                        <div class="col">
                            <label for="nombres" class="form-label">Nombres:</label>
                            <input type="text" id="nombres" name="nombres" class="form-control" value="<?php echo $nombres?>">
                        </div>
                        <div class="col">
                            <label for="apellidos" class="form-label">Apellidos:</label>
                            <input type="text" id="apellidos" name="apellidos" class="form-control" value="<?php echo $apellidos?>">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="numeroTelefono" class="form-label">Numero de Telefono:</label>
                            <input type="text" id="numeroTelefono" name="numeroTelefono" class="form-control" value="<?php echo $numeroTelefono?>">
                        </div>
                        <div class="col">
                            <label for="correo" class="form-label">Correo electronico:</label>
                            <input type="text" id="correo" name="correo" class="form-control" value="<?php echo $correo?>">
                        </div>
                        <div class="col">
                            <label for="pais" class="form-label">Pais:</label>
                            <input type="text" id="pais" name="pais" class="form-control" value="<?php echo $pais?>">
                        </div>
                        <div class="col">
                            <label for="ciudad" class="form-label">Ciudad:</label>
                            <input type="text" id="ciudad" name="ciudad" class="form-control" value="<?php echo $ciudad?>">
                            <br>
                        </div>

                        <div>
                            <button type="submit" class="btn btn-primary" style="border-radius: 4px; margin-bottom: 4px;">Guardar</button>
                            <!--<button onclick="resetform()" type="reset" class="btn btn-primary" style="border-radius: 4px; margin-bottom: 4px;">Reiniciar formulario</button>-->
                        </div>
                        
                        <div>
                            <a href="../index.html" class="btn btn-primary" style="border-radius: 4px; margin-bottom: 4px">Ir a la página
                                principal</a>
                            </a>
                            <!--<button onclick="listarcontactos()" type="button" class="btn btn-primary" style="border-radius: 4px;">Listar</button>-->
                        </div>
                    
                         
                        <div class="tableFixHead" id="tablecontact">
                            <?php
                            require_once "read.php";
                            ?>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    </div>  
    </body>

</html>