<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../css/insert.css"/>
        <meta http-equiv="refresh" content="1">
        <script src="../js/jquery.min.js"></script>
    </head>

    <body>
        <?php
            include "connection.php";
            mysql_query("INSERT INTO estado (time) VALUES(NOW())") or die(mysql_error());
            /*
            mysql_query("INSERT estado (time) VALUES (NOW())");
            $queryVelocidade = mysql_query("SELECT * FORM velocidade") or die(mysql_error());
            $arrayVelocidade = mysql_fetch_array($queryVelocidade);
            echo $arrayVelocidade[0];
            */
        ?>
        <!--
        <div class="timerInsert" id="velocidadeInsert">
            <div class="titleInsert">Velocidade</div>
            <div class="msInsert">200 ms</div>
            <div class="progress">
                <div id="progressEstado" class="progress-bar" progress="0" progressMax="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
            </div>
        </div>
        <iframe id="iframeInsert" src=""></iframe>
        <script>
            var trigger = setInterval(triggerTimer, 10);
        </script>
        -->

        <div class="timerInsert">
            <div class="titleInsert">Estado</div>
            <div class="msInsert"><script>document.write($("meta").attr("content")*1000);</script> ms</div>
        </div>
    </body>
</html>
