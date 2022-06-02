let pasos = 0;
let rapido = 0;
let acelerar = 2;
function empezar (){
    if (rapido >= 0 && rapido <= 90) {
        pasos++;
        rapido = pasos * acelerar;
        document.getElementById("player").innerHTML = Math.round(rapido*1.085) + "%";
        document.getElementById("player").style.left = rapido + "%";
    } else
    if (rapido = 90) {
        rapido = 0;
        pasos = -1;
    }
    
}
setInterval(empezar, 120);
window.addEventListener("keyup", saltar, false);

let res = 3;
let piso = 81;
function saltar (){
    res++;
    document.getElementById("player").style.top = (piso - (res*3)) + "vh";
    setTimeout(saltar_2, 300);
    
}

function saltar_2 (){
    res = 3;
    piso = 81;
    document.getElementById("player").style.top = 81 + "vh";
}