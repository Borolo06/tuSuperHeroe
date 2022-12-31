let bamh = document.querySelector('.abrir-modal-header');
let mbh = document.querySelector('.div-header');
let bcmh = document.querySelector('.boton-cerrar-modal-header');
bamh.addEventListener("click", () => {
    mbh.style.visibility = "visible"
    botonModoClaro.style.visibility = "visible"
    botonModoOscuro.style.visibility = "visible"
    alert("disfrutalo en modo oscuro si lo ves de noche");
});
bcmh.addEventListener("click", () => {
    mbh.style.visibility = "hidden"
    botonModoClaro.style.visibility = "hidden"
    botonModoOscuro.style.visibility = "hidden"
});
let botonCerrarHeader = document.querySelector('.boton-cerrar-modal-header');
let menuHeader = document.querySelector('.div-header');
let liExclusivos = document.querySelector('.exclusivos');
let liNuevos = document.querySelector('.nuevos');
let liVender = document.querySelector('.vender');
let botonModoOscuro = document.querySelector('.modo-oscuro');
let botonModoClaro = document.querySelector('.modo-claro');
let body = document.querySelector('.contenedor-mobile');
let botonParaElMenu = document.querySelector('.abrir-modal-header');
let header = document.querySelector('header');
let rojoDerecha = document.querySelector('.div-img');
let diseñaElTtraje = document.querySelector('h3');
let superHeroe = document.querySelector('h1');
let textoInfo = document.querySelector('p');
let rojoabajo = document.querySelector('.imagenes-abajo');
let textoIronMan = document.querySelector('h2');
let hr = document.querySelector('.hr-header');
let botonModalUno = document.querySelector('.abrir');
let botonModalDos = document.querySelector('.abrir-modal-dos');
let botonModalTres = document.querySelector('.abrir-modal-tres');
let modalUno = document.querySelector('.contenedor-modal');
let modalDos = document.querySelector('.contenedor-modal-2');
let modalTres = document.querySelector('.contenedor-modal-tres');
let pUno = document.querySelector('.p-modal');
let pDos = document.querySelector('.p-modal-2');
let pTres = document.querySelector('.p-modal-3');
let botonCerrarUno = document.querySelector('.close');
let botonCerrarDos = document.querySelector('.closedos');
let botonCerrarTres = document.querySelector('.closetres');

// aca arranca la declaracion de variables de venta.html

let botonHeader = document.querySelector('.redireccion');
let headerDos = document.querySelector('.header-contenedor-dos');
let textoHeader = document.querySelector('.vende-header');
let bodyDos = document.querySelector('.contenedor-mobile-2');
let contenedorTextoRosa = document.querySelector('.texto-info-contenedor-dos');
let textoContenedor = document.querySelector('.texto-div-tomato');
let contenedorSpider = document.querySelector('.div-vender');
let botonSpider = document.querySelector('.boton-venta');
let contenedorCap = document.querySelector('.div-comprar');
let botonCap = document.querySelector('.boton-comprar');

//recordar ue esto no funciono y para hacer el modo oscuro en "venta.html"
//toca hacerlo dentro de la etiueta script dentro de "venta.html" 

botonModoOscuro.addEventListener("click", () => {
    botonModoClaro.style.visibility = "visible"
    botonModoClaro.style.color = "#fff"
    menuHeader.style.background = "linear-gradient(to left, #23242a, rgb(65, 65, 65) )"
    liExclusivos.style.color = "white"
    liNuevos.style.color = "white"
    liVender.style.color = "white"
    botonModoOscuro.style.visibility = "hidden"
    botonCerrarHeader.style.color = "white"
    botonModoOscuro.style.color = "white"
    header.style.background = "#23242a"
    botonParaElMenu.style.color = "gray"
    body.style.background = "gray"
    hr.style.visibility = "hidden"
    diseñaElTtraje.style.color = "rgb(70, 70, 70)"
    superHeroe.style.color = "#23242a"
    textoInfo.style.color = "rgb(60, 60, 60)"
    rojoDerecha.style.background = "linear-gradient(to right, #23242a, black)"
    rojoabajo.style.background = "linear-gradient(to right, #23242a, black)"
    rojoabajo.style.backgroundSize = "700% 300%"
    textoIronMan.style.color = "gray"
    botonModalUno.style.color = "#23242a"
    botonModalDos.style.color = "#23242a"
    botonModalTres.style.color = "#23242a"
    modalUno.style.background = "gray"
    modalDos.style.background = "gray"
    modalTres.style.background = "gray"
    modalDos.style.boxShadow = "0px 0px 0px transparent"
    modalTres.style.boxShadow = "0px 0px 0px transparent"
    modalUno.style.boxShadow = "0px 0px 0px transparent"
    pUno.style.background = "var(--color-divs-imgs)"
    pDos.style.background = "var(--color-divs-imgs)"
    pTres.style.background = "var(--color-divs-imgs)"
    botonCerrarUno.style.color = "#23242a"
    botonCerrarDos.style.color = "#23242a"
    botonCerrarTres.style.color = "#23242a"
});

botonModoClaro.addEventListener("click", () => {
    botonModoClaro.style.visibility = "hidden"
    menuHeader.style.background = "white"
    liExclusivos.style.color = "black"
    liNuevos.style.color = "black"
    liVender.style.color = "black"
    botonModoOscuro.style.visibility = "visible"
    botonCerrarHeader.style.color = "black"
    botonModoOscuro.style.color = "black"
    header.style.background = "#fff"
    botonParaElMenu.style.color = "black"
    body.style.background = "#fff"
    hr.style.visibility = "visible"
    diseñaElTtraje.style.color = "var(--color-texto-casi-rojo)"
    superHeroe.style.color = "var(--color-seccion)"
    textoInfo.style.color = "black"
    rojoDerecha.style.background = "var(--color-seccion)"
    rojoabajo.style.background = "var(--color-seccion)"
    rojoabajo.style.backgroundSize = "0 0"
    textoIronMan.style.color = "var(--color-texto-amarillo)"
    botonModalUno.style.color = "var(--color-texto-amarillo)"
    botonModalDos.style.color = "var(--color-texto-amarillo)"
    botonModalTres.style.color = "var(--color-texto-amarillo)"
    modalUno.style.background = "#47a386"
    modalDos.style.background = "#47a386"
    modalTres.style.background = "#47a386"
    modalDos.style.boxShadow = "0px 0px 0px transparent"
    modalTres.style.boxShadow = "0px 0px 0px transparent"
    modalUno.style.boxShadow = "0px 0px 0px transparent"
    pUno.style.background = "var(--color-divs-imgs)"
    pDos.style.background = "var(--color-divs-imgs)"
    pTres.style.background = "var(--color-divs-imgs)"
    botonCerrarUno.style.color = "wheat"
    botonCerrarDos.style.color = "wheat"
    botonCerrarTres.style.color = "wheat"
});