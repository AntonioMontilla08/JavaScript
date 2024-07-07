"use strict" //Correr JS en modo extricto. es decir, que utuilice todas las bienas practicas y si hay algun error, no se ejecuta y muestra el error

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Freeze
Object.freeze(producto); //Una desventaja de los objetos es que aunque sea un const, se pueden añadir o eliminar propiedades. El método freeze congela el objeto para que no se pueda modificar

console.log(Object.isFrozen(producto)); //Se utiliza para saber si un objeto está sellado o no. Devuelve la respuesta en booleano.

producto.imagen = 'imagen.jpg';// Si intentamos agregar la propiedad imagen al objeto producto depués de que se le aplique freeze 

console.log(producto);//Al imprimir el objeto, solo muestra las propiedades originales


//SEAL

Object.seal(producto); //Tampoco permite agregar o eliminar propipiedades, pero si permite modificarlas.