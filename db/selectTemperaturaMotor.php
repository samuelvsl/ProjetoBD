<?php
    include "connection.php";
    $queryTempMotor = mysql_query("SELECT * FROM temperatura_motor WHERE time > NOW() - INTERVAL 2 SECOND ORDER BY time DESC");
    // echo mysql_num_rows($queryEstado) . "<br>";

    if($arrayTempMotor = mysql_fetch_array($queryTempMotor)){
        echo $arrayTempMotor[temperatura];
        echo "<script>parent.putTempMotor(\"$arrayTempMotor[temperatura]\");</script>";
    }
    else{
        echo "0";
        echo "<script>parent.putTempMotor(\"\");</script>";
    }
?>
