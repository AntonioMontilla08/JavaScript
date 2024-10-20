// Object Literal

const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor
//Debe usar la palabra resercvada function
//Luego se declara el nombre de la clase y por convención, debe empezar con mayúscula y parentesis
//Luego las llaves

function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor curvo de 49"',800, true);
const producto3 = new Producto('Laptop',300, true);
const producto4 = new Producto('Mouse Gamer',120, false);

console.log(producto2);
console.log(producto3);
console.log(producto4);