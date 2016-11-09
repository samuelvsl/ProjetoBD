<?php
    include "connection.php";
    $queryVelocidade = mysql_query("SELECT * FROM velocidade WHERE time > NOW() - INTERVAL 2 SECOND ORDER BY time DESC");
    // echo mysql_num_rows($queryEstado) . "<br>";

    if($arrayVelocidade = mysql_fetch_array($queryVelocidade)){
        echo $arrayVelocidade[velocidade];
        echo "<script>parent.putVelocidade($arrayVelocidade[velocidade]);</script>";
    }
    else{
        echo "0";
        echo "<script>parent.putVelocidade(0);</script>";
    }
?>
