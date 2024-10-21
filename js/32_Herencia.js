class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor curvo de 49"',800);

console.log(producto2);

console.log(producto2.formatearProducto());

//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la revolución', 129, '210387318964');
console.log(libro.formatearProducto());