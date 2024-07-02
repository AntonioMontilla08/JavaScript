const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Crear variables de un objeto

//Forma antigua de crear variables de un objeto
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;
//console.log(precioProducto);
//console.log(nombreProducto);

//DESTRUCTURING - Nueva forma de sacar propiedades de un objeto
//const {precio} = producto; 
//const {nombreProducto} = producto;

//Se puede evitar repetir código poniendo todas las propiedades que se deseen extraer dentro de la llave separados por comas
const {precio, nombreProducto} = precio;

console.log(precio);
console.log(nombreProducto);