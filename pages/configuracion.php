<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "mortgage";
$charset = "utf8mb4";

//Se usa el API de PDO para persistir los datos en la base de datos
//configuracion de comportamiento por defecto para el API PDO
//visite esta url para ver las opciones disponibles y lo que significan
//https://www.php.net/manual/en/pdo.setattribute.php
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$dsn = "mysql:host=$host;dbname=$database;charset=$charset";
try {
    $pdo = new PDO($dsn, $user, $password, $options);
    echo "Conexión exitosa a la base de datos";
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>