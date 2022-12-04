document.addEventListener("DOMContentLoaded", (event) => {
    //Inicializo AOS:
    AOS.init();

    //Inicializo Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    //Crear typed js:
    const typed = document.getElementById('span_typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('#span_typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
});

window.onload = function() {
    try {
        TagCanvas.initial=[0.2,-0.05];
        TagCanvas.minSpeed=0.1;
        TagCanvas.shuffleTags=true;
        TagCanvas.splitWidth=1;
        TagCanvas.textFont='Garamond';
        TagCanvas.weight=true;
        TagCanvas.weightMode='colour';
        var gradient = {
            0:    'hsla(149, 65%, 58%, 0.64)', // verde
            0.33: '#00f', // azul
            0.66: '#0f0', // verde
            1:    'hsla(183, 92%, 58%, 0.73)'  // celeste
           };
        TagCanvas.weightGradient = gradient;
        TagCanvas.textHeight='20';
        TagCanvas.outlineMethod='colour'
        TagCanvas.outlineColour = '#ddd';
        TagCanvas.wheelZoom = false;
        TagCanvas.activeCursor='auto';
        //TagCanvas.textColour = '#ffffff';
        //TagCanvas.outlineColour = 'hsla(360, 100%, 100%, 0)';
        TagCanvas.Start('myCanvas','tags');
    } catch(e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };

//SROLLING FUNCTIONS------------------------------------------------------------------------
function scroll_to(){
    //elementos de referencia
    var pos_myinfo = document.getElementById('section_myinfo').getBoundingClientRect();
    var pos_myexperiences = document.getElementById('header_myexperiences').getBoundingClientRect();
    var pos_myskills = document.getElementById('header_myskills').getBoundingClientRect();
    //El problema del scroll de la seccion INFO se da cuando este contador no arranca en 0 (cuando ya se scrolleo la seccion)
    //var texto = document.createTextNode(pos_myinfo.top);
    //document.getElementById('navbar-ico').replaceChild(texto, document.getElementById('navbar-ico').firstChild);
    //------------------------------------------------------------------------------------------------------------
    //----Ubico las cabeceras de cada seccion al tope de la pantalla------------------------
    //Cuando el scrolleo pasa la cabecera de la seccion, seteo el valor en 0----------------
    //asi al volver al mismo con el navbar no queda un margen arriba------------------------
    if (pos_myinfo.top + 325 < window.innerHeight) {
        //document.getElementById('header_myinfo').style.color="red";
        document.getElementById('header_myinfo').style.scrollMarginTop = '1px';
    }
    else if (pos_myinfo.top >= window.innerHeight) {
        //document.getElementById('header_myinfo').style.color="white";
        document.getElementById('header_myinfo').style.scrollMarginTop = '76px';
    }
    else
        //document.getElementById('header_myinfo').style.color="blue";
        document.getElementById('header_myinfo').style.scrollMarginTop = '1px';
    /*
    else if (pos_myinfo.top > window.innerHeight ){
        document.getElementById('header_myinfo').style.color="white";
        document.getElementById('header_myinfo').style.scrollMarginTop = '1px';
    }
    //Necesito el margen cuando el scrolleo esta por arriba de la cabecera de la seccion---
    else if (pos_myinfo.top + 325 > window.innerHeight ){
        document.getElementById('header_myinfo').style.color="blue";
        document.getElementById('header_myinfo').style.scrollMarginTop = '1px';
    }*/


    if (pos_myexperiences.bottom <= window.innerHeight - 330 ){
        document.getElementById('header_myexperiences').style.scrollMarginTop = '1px';
    }
    else if (pos_myexperiences.bottom + 330 > window.innerHeight ){
        document.getElementById('header_myexperiences').style.scrollMarginTop = '-73px';
    }
    if (pos_myskills.bottom <= window.innerHeight - 330 ){
        document.getElementById('header_myskills').style.scrollMarginTop = '1px';
    }
    else if (pos_myskills.bottom + 330 > window.innerHeight ){
        document.getElementById('header_myskills').style.scrollMarginTop = '-36px';
    }
}
//Agrego Listener
document.body.addEventListener("scroll", scroll_to);
//----------------------------------------------------------------------