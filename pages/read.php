<?php
require_once "configuracion.php";
$sql = "select * from contactos";
if ($resultado = $pdo->query($sql)) {
    if ($resultado->rowCount()) {
        //cabecera de la tabla
        echo "<table>";
        echo "<tr>";
        echo "<th>Id</th>";
        echo "<th>Nombres</th>";
        echo "<th>Apellidos</th>";
        echo "<th>Numero Telefonico</th>";
        echo "<th>Correo</th>";
        echo "<th>Pais</th>";
        echo "<th>Ciudad</th>";
        echo "<th>Accion</th>";
        echo "</tr>";
        //Por cada contacto se pinta un renglon o fila de la tabla
        while ($row = $resultado->fetch()) {
            echo "<tr>";
            echo "<td>" .$row["id"]. "</td>";
            echo "<td>" .$row["nombres"]. "</td>";
            echo "<td>" .$row["apellidos"]. "</td>";
            echo "<td>" .$row["numeroTelefono"]. "</td>";
            echo "<td>" .$row["correo"]. "</td>";
            echo "<td>" .$row["pais"]. "</td>";
            echo "<td>" .$row["ciudad"]. "</td>";
            echo '<a href="./detalles.php?id='.$row["id"].'">Ver</a>';"</td>";
            echo "</tr>";
            echo "<tr>";
        }
        echo "</table>";
        //cerrar el resultado
        unset($resultado);
    } else {
        echo "No se encontraron contactos.";
    }
} else {
    echo "Lo siento se ha presentado un error!";
}
?>