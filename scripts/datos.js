// imitación de un archivo json
let DATOS=[
    {empresa:"Photosnap",titulo:"Senior Frontend Developer",tags:["frontend","senior","html","css","javascript"],fecha:1,tiempoLaboral:"Full Time",lugar:"USA only",destacado:true,URLimg:"images/photosnap.svg"},
    {empresa:"Manage",titulo:"Fullstack Devloper",tags:["Fullstack","Midweight","Python","React"],fecha:1,tiempoLaboral:"Part Time",lugar:"Remote",destacado:true,URLimg:"images/manage.svg"},
    {empresa:"Account",titulo:"Junior Frontend Developer",tags:["frontend","junior","React","Sass","javascript"],fecha:5,tiempoLaboral:"Part Time",lugar:"USA only",destacado:false,URLimg:"images/account.svg"},
    {empresa:"MyHome",titulo:"Junior Frontend Developer",tags:["frontend","junior","css","javascript"],fecha:15,tiempoLaboral:"Part Time",lugar:"USA only",destacado:false,URLimg:"images/myhome.svg"},
    {empresa:"Loop Studios",titulo:"Software Engineer",tags:["full stack","midweight","Javascript","Sass","Ruby"],fecha:4,tiempoLaboral:"Full Time",lugar:"WorldWide",destacado:false,URLimg:"images/loop-studios.svg"},
    {empresa:"Falcet",titulo:"Junior Backend Developer",tags:["backend","junior","ruby","RoR"],fecha:5,tiempoLaboral:"Full Time",lugar:"UK only",destacado:false,URLimg:"images/photosnap.svg"},
    {empresa:"Shortly",titulo:"Junior Developer",tags:["frontend","junior","html","sass","javascript"],fecha:4,tiempoLaboral:"Full Time",lugar:"WorldWide",destacado:false,URLimg:"images/shortly.svg"},
    {empresa:"Insure",titulo:"Junior Frontend Developer",tags:["frontend","junior","Vue","javascript","sass"],fecha:2,tiempoLaboral:"Full Time",lugar:"WorldWide",destacado:false,URLimg:"images/insure.svg"},
    {empresa:"Eyecam Co.",titulo:"Full Stack Enginner",tags:["Fullstack","midweight","javascript","javascript","django","python"],fecha:6,tiempoLaboral:"Full Time",lugar:"WorldWide",destacado:false,URLimg:"images/eyecam-co.svg"},
    {empresa:"The Air Filter Company",titulo:"Fron-end Dev",tags:["frontend","junior","React","Sass","javascript"],fecha:34,tiempoLaboral:"Part Time",lugar:"WorldWide",destacado:false,URLimg:"images/the-air-filter-company.svg"}
];


function mostrarAnuncios(datos){
    let cuerpoAnuncios=document.getElementById("cuerpoAnuncios");
    let template="";
    datos.forEach(anuncio => {
        template+=`<article class="anuncio">
        <div class="anuncio-padre-flex ${anuncio.fecha>3?'':'new'}"><!--se trabajara con esto-->
          <div class="anuncio-cajaImgDatos">
            <div class="anuncio-padre-imgEmpresa">
              <img class="anuncio-imgEmpresa" src="${anuncio.URLimg}" alt='logo de la empresa' >
            </div>
            <div class="anuncio-datos">
              <div>
                <h4 class="anuncio-nombre-empresa text-tur spartan-bold">${anuncio.empresa}</h4>
                ${anuncio.fecha>3? "":"<span class='etiqueta-algo new spartan-bold'>NEW!</span>"}
                ${anuncio.destacado? "<span class='etiqueta-algo featured spartan-bold'>FEATURED</span>":""}
              </div>
              <h3 class="spartan-bold nombre-anuncio">
                ${anuncio.titulo}
              </h3>
              <div class="spartan-light">
                <span>${anuncio.fecha}d ago</span>
                <span>${anuncio.tiempoLaboral}</span>
                <span>${anuncio.lugar}</span>
              </div>
            </div>
          </div> 
          <hr class="anuncio-separador">
          <div class="anuncio-tags">
            ${recorreTags(anuncio.tags,"<div class='tag text-tur'>","</div>")}
          </div>
        </div>
      </article>`;
    });
    cuerpoAnuncios.innerHTML=template;
}
mostrarAnuncios(DATOS);

function recorreTags(elemento,inicioHTML,cierreHTML){
    let mistring="";
    for (const iter of elemento) {
        mistring+=`${inicioHTML+iter+cierreHTML}`;
    }
    return mistring;
}