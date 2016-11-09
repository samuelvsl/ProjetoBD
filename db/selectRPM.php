<?php
    include "connection.php";
    $queryRPM = mysql_query("SELECT * FROM rpm WHERE time > NOW() - INTERVAL 2 SECOND ORDER BY time DESC");
    // echo mysql_num_rows($queryEstado) . "<br>";

    if($arrayRPM = mysql_fetch_array($queryRPM)){
        echo $arrayRPM[rpm];
        echo "<script>parent.putRPM($arrayRPM[rpm]);</script>";
    }
    else{
        echo "0";
        echo "<script>parent.putRPM(0);</script>";
    }
?>
