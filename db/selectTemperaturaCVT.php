<?php
    include "connection.php";
    $queryTempCVT = mysql_query("SELECT * FROM temperatura_cvt WHERE time > NOW() - INTERVAL 2 SECOND ORDER BY time DESC");
    // echo mysql_num_rows($queryEstado) . "<br>";

    if($arrayTempCVT = mysql_fetch_array($queryTempCVT)){
        echo $arrayTempCVT[temperatura];
        echo "<script>parent.putTempCVT(\"$arrayTempCVT[temperatura]\");</script>";
    }
    else{
        echo "0";
        echo "<script>parent.putTempCVT(\"\");</script>";
    }
?>
