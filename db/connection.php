<?php
    $banco = "telemetria";
    // $usuario = "telemetria";
    // $senha = "Baja@2016";
    $usuario = "root";
    $senha = "baja2016";
    $host = "localhost";
    $db = mysql_connect($host, $usuario, $senha);
    $dados = mysql_select_db($banco, $db);

    // mysql_query("INSERT INTO estado (time) VALUES(NOW())") or die(mysql_error());
    // echo "Teste";
    //
    // $link = mysql_connect('localhost', '', '');
    // if (!$link) {
    //     die('Não foi possível conectar: ' . mysql_error());
    // }
    // echo 'Conexão bem sucedida';
    // mysql_close($link);

    // mysqli_connect("localhost","telemetria","Baja@2016","telemetria");

    // phpinfo();
?>
