<html>
    <head>
        <?php
            if(!isset($_GET[val]) || !isset($_GET[val2])){
                $_GET[val] = 33;
                $_GET[val2] = 0;
            }
            else{
                if($_GET[val] > 300)
                    $_GET[val2] = 1;
                else
                    if($_GET[val] < 50 && $_GET[val2] == 1)
                        $_GET[val2] = 0;
            }

            include "connection.php";
            mysql_query("INSERT INTO temperatura_motor (temperatura, time) VALUES($_GET[val],NOW())") or die(mysql_error());

            if($_GET[val2] == 0)
                $val = $_GET[val] + 13;
            else
                $val = $_GET[val] - 13;
        ?>
        <link rel="stylesheet" type="text/css" href="../css/insert.css"/>
        <meta http-equiv="refresh" content="1;url=insertTemperaturaMotor.php?val=<?php echo $val."&val2=".$_GET[val2];?>">
        <script src="../js/jquery.min.js"></script>
    </head>

    <body>
        <div class="timerInsert">
            <div class="titleInsert">Temp Motor</div>
            <div class="msInsert"><script>document.write(($("meta").attr("content").split(";"))[0]*1000);</script> ms</div>
        </div>
    </body>
</html>
