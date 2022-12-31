let venta = document.querySelector('.boton-venta');

venta.addEventListener("click", () => {
    let precio = prompt("Ingresa el precio que consideras justo para vender este articulo");
    alert("El articulo sera vendido por " + precio);
});

let comprar = document.querySelector('.boton-comprar');

comprar.addEventListener("click", () => {
    let banco = prompt("Ingresa el banco al que perteneces");
    let cuenta = prompt("Ingresa tu cuenta de ahorros o tu cuenta corriente");
    alert("De tu cuenta " + banco + " identificada con el numero " + cuenta + " se restara el valor del articulo");
});