<?php
    include "connection.php";
    $queryEstado = mysql_query("SELECT * FROM estado WHERE time > NOW() - INTERVAL 2 SECOND");
    // echo mysql_num_rows($queryEstado) . "<br>";

    if(mysql_num_rows($queryEstado)){
        echo "1";
        echo "<script>parent.putEstado(\"1\");</script>";
    }
    else{
        echo "0";
        echo "<script>parent.putEstado(\"0\");</script>";
    }
?>
