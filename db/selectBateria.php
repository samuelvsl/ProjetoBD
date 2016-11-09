<?php
    include "connection.php";
    $queryBateria = mysql_query("SELECT * FROM bateria WHERE time > NOW() - INTERVAL 10 SECOND ORDER BY time DESC");
    // echo mysql_num_rows($queryEstado) . "<br>";

    if($arrayBateria = mysql_fetch_array($queryBateria)){
        echo $arrayBateria[tensao];
        echo "<script>parent.putBateria(\"$arrayBateria[tensao]\");</script>";
    }
    else{
        echo "0";
        echo "<script>parent.putBateria(\"\");</script>";
    }
?>
