
let filtros=[];
visibleCajaFiltros(filtros);
function visibleCajaFiltros(filt){
    let caja=document.getElementById("cajaPadreFiltros");
    if(filt.length==0){
        caja.style.visibility="hidden";
    } else {
        caja.style.visibility="visible";
    }
}

function agregarFiltro(listFiltros){
    let menuTags=document.getElementById("menuTags");
    if(listFiltros.length>-1){
        let template="";
        listFiltros.map(elemento=>{
            template+=`<div class="tag-group">
            <div class="tag text-tur">${elemento}</div>
            <div class="tag-close" onclick="eliminarFiltro(this)"><img src="images/icon-remove.svg"></div>
          </div>`
        });
        menuTags.innerHTML=template;
    }
    visibleCajaFiltros(filtros);
    mostrarAnuncios(DATOS,filtros,"agregar Filtros");
}
// para eleminar tag;
function eliminarFiltro(filtroClose){
    let filtro=filtroClose.previousElementSibling.textContent;
    let position=filtros.findIndex(x=>x==filtro);
    filtros.splice(position,1);
    let elementoTag=filtroClose.parentElement;
    elementoTag.parentElement.removeChild(elementoTag);
    visibleCajaFiltros(filtros);
    mostrarAnuncios(DATOS,filtros, "elimnar filtros");
}
// limpiar filtros con clear
function limpiarFiltros(){
    filtros.splice(0);
    agregarFiltro(filtros);
    visibleCajaFiltros(filtros);
    mostrarAnuncios(DATOS,null,"limpiar");
}