// Acceso al DOM, aquí :)
/*const container = document.querySelector('div#container.container')
const inputSearch = document.querySelector('input#inputSearch')*/

const imagenLogo = 'img/Logo_Rocy_Lozy.png'
const imgLogo = document.getElementById('logo')
const titulo = document.getElementById('titulo')
const slogan = document.getElementById('slogan')
const container = document.querySelector('div#container.container')

imgLogo.src = imagenLogo
slogan.textContent = 'Enterate de la colección aesthetik otoño-invierno 2023'
stock.textContent = 10

function retornarCardsHTML(producto) {
    return `<div class="div-card">
                <div class="prenda">
                    <h1>${producto.prenda}</h1>
                </div>
                <div class="descripcion">
                    <p>${producto.descripcion}</p>
                </div>
                <div class="precio">
                    <p>$ ${producto.precio}</p>
                </div>
                <div class="comprar"><button class="button button-outline" id="${producto.codigo}">add</button></div>
           </div>`
}

function cargarProducto() {
    arrayProductos.forEach((producto) => {
        container.innerHTML += retornarCardsHTML(producto)
    })
}
cargarProducto(arrayProductos)

