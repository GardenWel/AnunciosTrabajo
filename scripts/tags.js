
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
let Anuncios=document.getElementById("cuerpoAnuncios");
let tags=Anuncios.getElementsByClassName("tag");
for (const iter of tags) {
    iter.addEventListener("click",()=>{
        let ele=iter.textContent.toLocaleLowerCase();
        if(filtros.indexOf(ele)==-1){
            filtros.push(ele);
            agregarFiltro(filtros);
        }
    })
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
}
// para eleminar tag;
function eliminarFiltro(filtroClose){
    let filtro=filtroClose.previousElementSibling.textContent;
    let position=filtros.findIndex(x=>x==filtro);
    filtros.splice(position,1);
    agregarFiltro(filtros);
    visibleCajaFiltros(filtros);
}
// limpiar filtros con clear
function limpiarFiltros(){
    filtros.splice(0);
    agregarFiltro(filtros);
    visibleCajaFiltros(filtros);
}