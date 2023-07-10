class Compra {
    constructor(carritodeCompras) {
        this.carrito = carritodeCompras
    }

    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, prenda)=> acc + prenda.precio, 0)
        }
    }
}
