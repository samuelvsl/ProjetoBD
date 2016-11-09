function restart(time){

}

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function triggerTimer(){
    var progressEstado = parseInt($(".progress-bar").attr("progress"));
    var progressEstadoMax = parseInt($(".progress-bar").attr("progressMax"));
    if(progressEstado <= progressEstadoMax){
        $(".progress-bar").css("width", ((100*progressEstado)/progressEstadoMax) + "%");
        $(".progress-bar").attr("progress", progressEstado+10);
    }
    else{
        clearInterval(trigger);
        // $(".progress-bar").attr("progress", "0");
        // $("#iframeInsert").src("src", "google.com");
    }
}
