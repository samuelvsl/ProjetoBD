<html>
    <head>
        <title>Telemetria</title>

        <script src="js/jquery.min.js"></script>
        <script src="js/telemetria.js"></script>
        <script src="bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>

        <link rel="stylesheet" type="text/css" href="bootstrap-3.3.6-dist/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="font-awesome-4.5.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="css/telemetria.css"/>

    </head>

    <body>
        <div id="geral">
            <div id="menuLateral">
                <div id="logoBaja"><span>Alfa</span></div>
                <table class="table table-striped table-bordered table-hover">
                    <tr>
                        <td>Estado:</td>
                        <td id="tabelaEstado">Desligado</td>
                    </tr>

                    <tr>
                        <td>Bateria:</td>
                        <td id="tabelaBateria"></td>
                    </tr>

                    <tr>
                        <td>Temp CVT:</td>
                        <td id="tabelaTempCVT"></td>
                    </tr>

                    <tr>
                        <td>Temp Motor:</td>
                        <td id="tabelaTempMotor"></td>
                    </tr>

                    <tr>
                        <td>Velocidade Max:</td>
                        <td>60 km/h</td>
                    </tr>

                    <tr>
                        <td>Temp Max CVT:</td>
                        <td>100 °C</td>
                    </tr>

                    <tr>
                        <td style="padding-right: 0px;">Temp Max Motor:</td>
                        <td>100 °C</td>
                    </tr>
                </table>
                <button type="button" class="btn btn-primary">Velocidade</button>
                <button type="button" class="btn btn-primary">Rotação do Motor</button>
                <button type="button" class="btn btn-primary">Forças Sobre o Piloto</button>
                <button type="button" class="btn btn-primary">Forças Sobre o Suspenção</button>
            </div><!-- div menuLateral -->
            <div id="ladoEsquerdo">
                <div id="divTermometroMotor">
                    <span id="labelMotor">Motor</span>
                </div><!-- divTermometroMotor -->
                <div id="divTermometroCVT">
                    <span id="labelCVT">CVT</span>
                </div><!-- divTermometroCVT -->
                <div id="divBateria">
                    <i class="fa fa-battery-full"></i>
                    <div id="divCombustivel"></div><!-- divCombustivel -->
                </div><!-- divBateria -->
                <div id="divVelocimetro">
                    <div id="velocimetroCirculo">
                        <span id="velocidade">0</span>
                        <span id="kmh">km/h</span>
                        <div id="divOdometro">0000<span>0</span></div><!-- divOdometro -->
                    </div><!-- div velocimetroCirculo -->
                </div><!-- divVelocimetro -->
            </div><!-- div ladoEsquerdo -->

            <div id="ladoDireito">
                <div id="divPiloto">
                    <i class="fa fa-user" id="piloto"></i>
                    <div id="forcaPiloto" class="panel panel-default popForca">
                        <div class="popForcaLeft"></div>
                        <div class="panel-heading">
                            <h3 class="panel-title">Forças</h3>
                        </div>
                        <div class="panel-body">
                            <span>X = 1.23G</span><br>
                            <span>Y = 1.23G</span><br>
                            <span>Z = 1.23G</span><br>
                        </div>
                    </div><!-- popForca -->
                </div><!-- divPiloto -->
                <div id="divCarro">
                    <div style="height: 225px; width: 100%;">
                        <div id="forca1" class="panel panel-default popForca">
                            <div class="popForcaRight"></div>
                            <div class="panel-heading">
                                <h3 class="panel-title">Forças</h3>
                            </div>
                            <div class="panel-body">
                                <span>X = 1.23G</span><br>
                                <span>Y = 1.23G</span><br>
                                <span>Z = 1.23G</span><br>
                            </div>
                        </div><!-- popForca -->

                        <div id="forca2" class="panel panel-default popForca">
                            <div class="popForcaLeft"></div>
                            <div class="panel-heading">
                                <h3 class="panel-title">Forças</h3>
                            </div>
                            <div class="panel-body">
                                <span>X = 1.23G</span><br>
                                <span>Y = 1.23G</span><br>
                                <span>Z = 1.23G</span><br>
                            </div>
                        </div><!-- popForca -->
                    </div><!--  -->

                    <div style="height: 225px; width: 100%;">
                        <div id="forca3" class="panel panel-default popForca">
                            <div class="popForcaRight"></div>
                            <div class="panel-heading">
                                <h3 class="panel-title">Forças</h3>
                            </div>
                            <div class="panel-body">
                                <span>X = 1.23G</span><br>
                                <span>Y = 1.23G</span><br>
                                <span>Z = 1.23G</span><br>
                            </div>
                        </div><!-- popForca -->

                        <div id="forca4" class="panel panel-default popForca">
                            <div class="popForcaLeft"></div>
                            <div class="panel-heading">
                                <h3 class="panel-title">Forças</h3>
                            </div>
                            <div class="panel-body">
                                <span>X = 1.23G</span><br>
                                <span>Y = 1.23G</span><br>
                                <span>Z = 1.23G</span><br>
                            </div>
                        </div><!-- popForca -->
                    </div><!-- popForca -->

                </div><!-- divCarro -->
            </div>
            <iframe class="telemetriaIframe" src="" id="telemetriaIframeRPM"></iframe>
            <iframe class="telemetriaIframe" src="" id="telemetriaIframeEstado"></iframe>
            <iframe class="telemetriaIframe" src="" id="telemetriaIframeBateria"></iframe>
            <iframe class="telemetriaIframe" src="" id="telemetriaIframeTempCVT"></iframe>
            <iframe class="telemetriaIframe" src="" id="telemetriaIframeTempMotor"></iframe>
            <iframe class="telemetriaIframe" src="" id="telemetriaIframeVelocidade"></iframe>
        </div><!-- div geral -->
    </body>
</html>
