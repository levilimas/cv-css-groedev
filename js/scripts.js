//JS Card-currículo

var  textoInfo  =  document.getElementById ("texto-info");
var  textoSobre  =  document.getElementById ("texto-sobre");
var textoConhecimentos = document.getElementById("texto-conhecimentos");
var textoObjetivo = document.getElementById("objective");


function clickNoSobre() {
    console.log();
    textoSobre.style.display = "block";
    textoInfo.style.display = "none";
    textoConhecimentos.style.display = "none";
    textoObjetivo.style.display = "none";
}

function clickNoConhecimentos() {
    console.log();
    textoConhecimentos.style.display = "block";
    textoInfo.style.display = "none";
    textoSobre.style.display = "none";
    textoInfo.style.display = "none";
    
    textoObjetivo.style.display = "none";
}
function clickNoObjetivo() {
    console.log();
    textoObjetivo.style.display = "block";
    textoSobre.style.display = "none";
    textoInfo.style.display = "none";
    textoConhecimentos.style.display = "none";
    
}

