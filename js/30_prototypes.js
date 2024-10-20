function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//El prototype nos permite crear funciones que solo se utilizan en una misma clase
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}.`;
}

Cliente.prototype.formatearCliente = function(){
    return `El Cliente es ${this.nombre} ${this.apellido}.`;
}

const cliente = new Cliente ('Antonio', 'Montilla');
const producto2 = new Producto('Monitor curvo de 49"',800);
const producto3 = new Producto('Laptop',300);

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

