const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segs = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segs}`;
    const meses = ["Ene", "Feb", "Mar","May", "Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jueves", "Vie", "Sab"]
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()]
    let año = fecha.getFullYear();
    let fechaTexto =`${diaSemana}, ${dia} ${mes} ${año}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
    document.getElementById("contenedor").classList.toggle("animar");
}
const formatoHora = (hora) =>{
    if(hora<10)
        hora = "0" + hora;
        return hora;
    
}
setInterval(mostrarReloj, 1000 );