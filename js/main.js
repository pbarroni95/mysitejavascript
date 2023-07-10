function cargar_pagina() {
    alert('Bienvenidx a nuestra tienda aesthetik! 🕶');
    alert('Abra la consola JS para iniciar la función comprar')
}


const carrito = []

const arrayProductos = [
    { prenda: '💍', codigo: 1, descripcion: 'Collar Metalik', precio: 15000 },
    { prenda: '🎩', codigo: 2, descripcion: 'Piluso Blackside', precio: 25000 },
    { prenda: '🧦', codigo: 3, descripcion: 'Medias Rock', precio: 15000 },
    { prenda: '🧢', codigo: 4, descripcion: 'Gorra Leather', precio: 25000 },
    { prenda: '👒', codigo: 5, descripcion: 'Gorro Winter', precio: 55000 },
    { prenda: '🕶', codigo: 6, descripcion: 'Lentes Tattoo', precio: 20000 }
]

//*creacion de funciones que le den vida a la lista de productos o sea al array*/



function buscarPrenda(codigo) {
    let resultado = arrayProductos.find((prenda) => prenda.codigo === parseInt(codigo))
    return resultado
}




function finalizarCompra() {
    const shopping = new Compra(carrito)
    console.log(`El costo total de tu shopping time es $ ${shopping.obtenerSubtotal()} Muchas gracias por su compra.`)
    alert(`El costo total de tu shopping time es $ ${shopping.obtenerSubtotal()}. ¡Muchas gracias por su compra!😊`)
}

function comprar() {
    let codigo = prompt("Ingresa el código de tu prenda preferida:")
    let prendaElegida = buscarPrenda(codigo)
    if (prendaElegida !== undefined) {
        carrito.push(prendaElegida)
        alert(prendaElegida.descripcion + ' se agregó correctamente al carrito!' + '✌')
        let respuestacliente = confirm('Deseas agregar otro item a tu compra?')
        if (respuestacliente === true) {
            comprar()
        } else {
            console.table(carrito)
            finalizarCompra()
        }
    }
}