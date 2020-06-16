function ponerCero(c){
    if (c < 10){
            c = '0' + c;
        }
    return c;
    }
    

function reloj(){
    //recoje los datos de las fechas y hora
    let fechaHora = new Date();
    //recoje la hora
    let h = fechaHora.getHours();
    //recoje los minutos
    let m = fechaHora.getMinutes();
    //recoje los segundos
    let s = fechaHora.getSeconds();  
    //añade un 0 detras a los segundos y minutos cuando se necesita
    n = ponerCero(m);
    s = ponerCero(s); 
    //muestra la hora en madrid
    let horaMadrid = document.getElementById("reloj_madrid");
    horaMadrid.innerHTML = `Madrid:${h}:${m}:${s}`;
    //muestra la hora en nueva york
    let horaNuevaYork = document.getElementById("reloj_nueva_york");
    let h_nueva_York = h -6;
    horaNuevaYork.innerHTML = `Nueva York:${h_nueva_York}:${m}:${s} `;
    //muestra la hora en nueva deli
    let hora_Nueva_Deli = document.getElementById("reloj_Nueva_Deli");
    let h_Nueva_Deli = h + 4;
    hora_Nueva_Deli.innerHTML = `Nueva Delhi:${h_Nueva_Deli}:${m}:${s} `;
    //muestra la hora en londres    
    let hora_Londres = document.getElementById("reloj_Londres");
    let h_londres = h -1;
    hora_Londres.innerHTML = `Londres:${h_londres}:${m}:${s} `;
    //muestra la hora en Tokyo
    let hora_Tokyo = document.getElementById("reloj_Tokyo");
    let h_tokyo = h + 7;
    hora_Tokyo.innerHTML = `Tokyo:${h_tokyo}:${m}:${s} `;
    setTimeout('reloj()', 1000);

}



reloj();

//Con el boton se añaden mas horas
function añadir(){
    let fechaHora = new Date();
    let h = fechaHora.getHours();
    let m = fechaHora.getMinutes();
    let s = fechaHora.getSeconds(); 
    divReloj = document.getElementById("demo");
    let h_rio = h - 5;
    divReloj.innerHTML = `Rio de Janeiro:${h_rio}:${m}:${s}`;
    var btn = document.createElement("demo2");
    btn.innerHTML = `Barcelona:${h}:${m}:${s}`;
}