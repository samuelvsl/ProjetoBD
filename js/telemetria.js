var tempMaxCVT = 0;
var tempMaxMotor = 0;
var velocidadeMax = 0;
var startAnimate = 19;
var startAnimateFlag = 1;
var start = setInterval(start2, 50);
var tabelaEstado = setInterval(selectEstado, 1000);
var tabelaBateria = setInterval(selectBateria, 1000);
var tabelaTempCVT = setInterval(selectTempCVT, 1000);
var tabelaTempMotor = setInterval(selectTempMotor, 1000);
var tabelaVelocidade = setInterval(selectVelocidade, 1000);
var tabelaRPM = setInterval(selectRPM, 1000);

function putEstado(estado){
    if(estado == 1)
        $("#tabelaEstado").text("Ligado");
    else
        $("#tabelaEstado").text("Desligado");
}

function putBateria(tensao){
    if(tensao != "")
        $("#tabelaBateria").text(zero(tensao)+" v");
    else
        $("#tabelaBateria").text("");
}

function putTempCVT(temperatura){
    if(temperatura != ""){
        $("#tabelaTempCVT").text(espaco(temperatura)+" °C");
        if(temperatura < 50)
            $("#divTermometroCVT").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro01.svg)");
        else {
            if(temperatura < 100)
                $("#divTermometroCVT").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro02.svg)");
            else {
                if(temperatura < 150)
                    $("#divTermometroCVT").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro03.svg)");
                else {
                    if(temperatura < 200)
                        $("#divTermometroCVT").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro04.svg)");
                    else {
                        $("#divTermometroCVT").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro05.svg)");
                    }
                }
            }
        }

        if(temperatura > tempMaxCVT){
            tempMaxCVT = temperatura;
            $("#tabelaTempMaxCVT").text(tempMaxCVT + " °C");
        }
    }
    else
        $("#tabelaTempCVT").text("");


}

function putTempMotor(temperatura){
    if(temperatura != ""){
        $("#tabelaTempMotor").text(espaco(temperatura)+" °C");
        if(temperatura < 50)
            $("#divTermometroMotor").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro01.svg)");
        else {
            if(temperatura < 100)
                $("#divTermometroMotor").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro02.svg)");
            else {
                if(temperatura < 150)
                    $("#divTermometroMotor").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro03.svg)");
                else {
                    if(temperatura < 200)
                        $("#divTermometroMotor").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro04.svg)");
                    else {
                        $("#divTermometroMotor").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/termometro05.svg)");
                    }
                }
            }
        }

        if(temperatura > tempMaxMotor){
            tempMaxMotor = temperatura;
            $("#tabelaTempMaxMotor").text(tempMaxMotor + " °C");
        }
    }
    else
        $("#tabelaTempMotor").text("");
}

function putVelocidade(velocidade){
    $("#velocidade").text(velocidade);
    if(velocidade > velocidadeMax){
        velocidadeMax = velocidade;
        $("#tabelaVelocidadeMax").text(velocidadeMax + " km/h");
    }
}

function putRPM2(rpm){
    // $("#velocidade").text(rpm);

    if(rpm > 95)
        $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro18.svg)");
    else{
        if(rpm > 89)
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro17.svg)");
        else
            if(rpm > 84)
                $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro16.svg)");
            else
                if(rpm > 78)
                    $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro15.svg)");
                else
                    if(rpm > 72)
                        $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro14.svg)");
                    else
                        if(rpm > 67)
                            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro13.svg)");
                        else
                            if(rpm > 61)
                                $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro12.svg)");
                            else
                                if(rpm > 56)
                                    $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro11.svg)");
                                else
                                    if(rpm > 50)
                                        $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro10.svg)");
                                    else
                                        if(rpm > 44)
                                            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro09.svg)");
                                        else
                                            if(rpm > 39)
                                                $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro08.svg)");
                                            else
                                                if(rpm > 33)
                                                    $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro07.svg)");
                                                else
                                                    if(rpm > 28)
                                                        $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro06.svg)");
                                                    else
                                                        if(rpm > 22)
                                                            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro05.svg)");
                                                        else
                                                            if(rpm > 16)
                                                                $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro04.svg)");
                                                            else
                                                                if(rpm > 11)
                                                                    $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro03.svg)");
                                                                else
                                                                    if(rpm > 5)
                                                                        $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro02.svg)");
                                                                    else
                                                                        $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro00.svg)");
    }
}

function putRPM(rpm){
    // $("#velocidade").text(rpm);
    console.log("Rpm: " + rpm);
    if(rpm > 95){
        $(".velocimetroCirculoClass").hide();
        $("#velocimetroCirculo18").show();
    }
    else{
        if(rpm > 89){
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo17").show();
        }
        else{
            if(rpm > 84){
                $(".velocimetroCirculoClass").hide();
                $("#velocimetroCirculo16").show();
            }
            else{
                if(rpm > 78){
                    $(".velocimetroCirculoClass").hide();
                    $("#velocimetroCirculo15").show();
                }
                else{
                    if(rpm > 72){
                        $(".velocimetroCirculoClass").hide();
                        $("#velocimetroCirculo14").show();
                    }
                    else{
                        if(rpm > 67){
                            $(".velocimetroCirculoClass").hide();
                            $("#velocimetroCirculo13").show();
                        }
                        else{
                            if(rpm > 61){
                                $(".velocimetroCirculoClass").hide();
                                $("#velocimetroCirculo12").show();
                            }
                            else{
                                if(rpm > 56){
                                    $(".velocimetroCirculoClass").hide();
                                    $("#velocimetroCirculo11").show();
                                }
                                else{
                                    if(rpm > 50){
                                        $(".velocimetroCirculoClass").hide();
                                        $("#velocimetroCirculo10").show();
                                    }
                                    else{
                                        if(rpm > 44){
                                            $(".velocimetroCirculoClass").hide();
                                            $("#velocimetroCirculo09").show();
                                        }
                                        else{
                                            if(rpm > 39){
                                                $(".velocimetroCirculoClass").hide();
                                                $("#velocimetroCirculo08").show();
                                            }
                                            else{
                                                if(rpm > 33){
                                                    $(".velocimetroCirculoClass").hide();
                                                    $("#velocimetroCirculo07").show();
                                                }
                                                else{
                                                    if(rpm > 28){
                                                        $(".velocimetroCirculoClass").hide();
                                                        $("#velocimetroCirculo06").show();
                                                    }
                                                    else{
                                                        if(rpm > 22){
                                                            $(".velocimetroCirculoClass").hide();
                                                            $("#velocimetroCirculo05").show();
                                                        }
                                                        else{
                                                            if(rpm > 16){
                                                                $(".velocimetroCirculoClass").hide();
                                                                $("#velocimetroCirculo04").show();
                                                            }
                                                            else{
                                                                if(rpm > 11){
                                                                    $(".velocimetroCirculoClass").hide();
                                                                    $("#velocimetroCirculo03").show();
                                                                }
                                                                else{
                                                                    if(rpm > 5){
                                                                        $(".velocimetroCirculoClass").hide();
                                                                        $("#velocimetroCirculo02").show();
                                                                    }
                                                                    else{
                                                                        $(".velocimetroCirculoClass").hide();
                                                                        $("#velocimetroCirculo00").show();
                                                                        console.log("Circulo00");
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function putBateria2(bateria){
    // $("#velocidade").text(rpm);

    $(".velocimetroCirculoClass").hide();
    switch(bateria){
        case 1:
            $("#velocimetroCirculo18").show();
            break;
        default:

    }
}

function selectEstado(){
    document.getElementById("telemetriaIframeEstado").src = "db/selectEstado.php";
}

function selectBateria(){
    document.getElementById("telemetriaIframeBateria").src = "db/selectBateria.php";
}

function selectTempCVT(){
    document.getElementById("telemetriaIframeTempCVT").src = "db/selectTemperaturaCVT.php";
}

function selectTempMotor(){
    document.getElementById("telemetriaIframeTempMotor").src = "db/selectTemperaturaMotor.php";
}

function selectVelocidade(){
    document.getElementById("telemetriaIframeVelocidade").src = "db/selectVelocidade.php";
}

function selectRPM(){
    document.getElementById("telemetriaIframeRPM").src = "db/selectRPM.php";
}

function zero(x){
    if(x%1 == 0)
        x = x + ".0";
    return x;
}

function espaco(x){
    if(x/100 >= 1)
        x = " " + x;
    return x;
}

function sleep(x){
    var time = new Date().getTime() + x;
    while(new Date().getTime() < time){}
}

function start(){
    console.log("start");
    switch(startAnimate){
        case 1:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro18.svg)");
            startAnimateFlag = 0;
            break;
        case 2:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro17.svg)");
            break;
        case 3:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro16.svg)");
            break;
        case 4:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro15.svg)");
            break;
        case 5:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro14.svg)");
            break;
        case 6:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro13.svg)");
            break;
        case 7:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro12.svg)");
            break;
        case 8:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro11.svg)");
            break;
        case 9:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro10.svg)");
            break;
        case 10:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro09.svg)");
            break;
        case 11:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro08.svg)");
            break;
        case 12:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro07.svg)");
            break;
        case 13:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro06.svg)");
            break;
        case 14:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro05.svg)");
            break;
        case 15:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro04.svg)");
            break;
        case 16:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro03.svg)");
            break;
        case 17:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro02.svg)");
            break;
        case 18:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro01.svg)");
            break;
        case 19:
            $("#velocimetroCirculo").css("background-image","url(http://"+$(location).attr('host')+"/Baja/imagens/velocimetro00.svg)");
            break;
        default:
            clearInterval(start);
            break;
    }
    if(startAnimateFlag == 0)
        startAnimate++;
    else
        startAnimate--;
}

function start2(){
    console.log("start2");
    switch(startAnimate){
        case 1:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo18").show();
            startAnimateFlag = 0;
            break;
        case 2:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo17").show();
            break;
        case 3:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo16").show();
            break;
        case 4:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo15").show();
            break;
        case 5:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo14").show();
            break;
        case 6:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo13").show();
            break;
        case 7:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo12").show();
            break;
        case 8:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo11").show();
            break;
        case 9:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo10").show();
            break;
        case 10:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo09").show();
            break;
        case 11:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo08").show();
            break;
        case 12:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo07").show();
            break;
        case 13:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo06").show();
            break;
        case 14:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo05").show();
            break;
        case 15:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo04").show();
            break;
        case 16:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo03").show();
            break;
        case 17:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo02").show();
            break;
        case 18:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo01").show();
            break;
        case 19:
            $(".velocimetroCirculoClass").hide();
            $("#velocimetroCirculo00").show();
            break;
        default:
            clearInterval(start);
            break;
    }
    if(startAnimateFlag == 0)
        startAnimate++;
    else
        startAnimate--;
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

// document.getElementById('divTermometroCVT').style.backgroundImage = "url('imagens/termometro-0.2.svg')";
