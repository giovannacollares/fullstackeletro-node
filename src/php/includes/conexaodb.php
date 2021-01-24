<?php

$servername ='localhost';
$username = 'root';
$password = 'password';
$database = 'fseletro';

$conexao = mysqli_connect("localhost", "root", "password", "fseletro", 3306);


// verificando a conexão
if ($conexao == false) {
    die("A conexão falhou" . mysqli_connect_error());
    var_dump($conexao);
}



?>
