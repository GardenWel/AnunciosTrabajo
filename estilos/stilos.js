// caja de filtro;
window.addEventListener("resize",cajaFiltroMargen)
function cajaFiltroMargen(){
    let cajaFiltro=document.getElementById("cajaFiltro");
    let mitadCaja=(cajaFiltro.clientHeight/2);
    cajaFiltro.style.top=`-${mitadCaja+18}px`;
    // añadiendo margenes para separarlo
    if(mitadCaja<18){
        let margen=34 -(18 -mitadCaja);
        cajaFiltro.parentElement.style.marginBottom=`${margen}px`;
    } else{
        let margen=mitadCaja-18+34;
        cajaFiltro.parentElement.style.marginBottom=`${margen}px`;
    }
}
cajaFiltroMargen();