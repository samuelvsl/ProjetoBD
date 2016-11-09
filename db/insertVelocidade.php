<html>
    <head>
        <?php
            function modulo($x){
                if($x < 0)
                    return -1 * $x;
                return $x;
            }

            if(!isset($_GET[val]))
                $_GET[val] = 0;
            else
                if($_GET[val] > 22)
                    $_GET[val] = 0;


            include "connection.php";
            mysql_query("INSERT INTO velocidade (velocidade, time) VALUES(". modulo(sin($_GET[val])*99) .",NOW())") or die(mysql_error());
            $_GET[val] += 0.1;
        ?>
        <link rel="stylesheet" type="text/css" href="../css/insert.css"/>
        <meta http-equiv="refresh" content="1;url=insertVelocidade.php?val=<?php echo $_GET[val];?>">
        <script src="../js/jquery.min.js"></script>
    </head>

    <body>
        <div class="timerInsert">
            <div class="titleInsert">Velocidade</div>
            <div class="msInsert"><script>document.write(($("meta").attr("content").split(";"))[0]*1000);</script> ms</div>
        </div>
    </body>
</html>
