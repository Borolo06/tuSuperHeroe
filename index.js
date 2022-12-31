let abrir = document.querySelector('.abrir');
let cerrar = document.querySelector('.close');
let contenedor = document.querySelector('.contenedor-modal');

abrir.addEventListener("click", () => {
    contenedor.classList.add('show');
});

cerrar.addEventListener("click", () => {
    contenedor.classList.remove('show');
});

let modaldos = document.querySelector('.abrir-modal-dos');
let closemd = document.querySelector('.closedos');
let cmdd = document.querySelector('.contenedor-modal-2');

modaldos.addEventListener("click", () => {
    cmdd.classList.add('show-3');
});

closemd.addEventListener("click", () => {
    cmdd.classList.remove('show-3');
});

let openmt = document.querySelector('.abrir-modal-tres');
let closemt = document.querySelector('.closetres');
let cmt = document.querySelector('.contenedor-modal-tres');

openmt.addEventListener("click", () => {
    cmt.classList.add('show-4');
});

closemt.addEventListener("click", () => {
    cmt.classList.remove('show-4');
});