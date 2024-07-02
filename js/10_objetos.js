//OBJETOS

//En vez de tener 3 declaraciones independientes, se crea 1 sola con propiedades dentro de llaves
//Forma de declarar un objeto
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

//Para acceder a una propiedad, se utiliza la sintáxis de punto 
console.log(producto.precio);

//Otra forma de acceder a las propiedades, pero poco utilizada es
console.log(producto["nombreProducto"])

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

//Eliminar propiedades
delete producto.disponible;
console.log(producto);