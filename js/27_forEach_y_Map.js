const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//FOREACH
//Solo se pueden ejecutar en arreglos y se ejecuta por cada elemento del arreglo
//Se utiliza principalmente cuando se quieren mostrar los elementos del arreglo en pantalla o enviarlos a la consola

carrito.forEach(producto => console.log(producto.nombre));

//MAP
//Solo se pueden ejecutar en arreglos y se ejecuta por cada elemento del arreglo
//Se utiliza para crear nuevos arreglos

carrito.map(producto => console.log(producto.nombre));

//POR EJEMPLO
//Declaramos nuevas constantes, dejamos implicito el return, declaramos cada elemento solo el nombre y los imprimimos en consola, solo el arreglo2, que es del map aparecerá porque está diseñado para eso; en el arreglo1 aparecerá undefined  


const arreglo1 = carrito.forEach(producto => producto.nombre);
const arreglo2 = carrito.map(producto => producto.nombre);

console.log(arreglo1);
console.log(arreglo2);


//EN CONCLUSION 
//Se deben utilizar de la siguiente manera

//foreach
carrito.forEach(producto => console.log(producto.nombre));

//map
//Recordar almacenar en un nuevo nombre
const arreglo3 = carrito.map(producto => producto.nombre);

//También se puede utilizar para cambiar el formato de los arrreglos
const arreglo4 = carrito.map( producto => `${producto.nombre} -- ${producto.precio}`);
console.log(arreglo4);
