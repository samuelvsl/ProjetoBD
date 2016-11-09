<html>
    <head>
        <?php
            if(!isset($_GET[val]))
                $_GET[val] = 12;
            else
                if($_GET[val] <= 0)
                    $_GET[val] = 12;
            include "connection.php";
            mysql_query("INSERT INTO bateria (tensao, time) VALUES($_GET[val],NOW())") or die(mysql_error());
        ?>
        <link rel="stylesheet" type="text/css" href="../css/insert.css"/>
        <meta http-equiv="refresh" content="5;url=insertBateria.php?val=<?php echo $_GET[val]-0.1;?>">
        <script src="../js/jquery.min.js"></script>
    </head>

    <body>
        <div class="timerInsert">
            <div class="titleInsert">Bateria</div>
            <div class="msInsert"><script>document.write(($("meta").attr("content").split(";"))[0]*1000);</script> ms</div>
        </div>
    </body>
</html>
