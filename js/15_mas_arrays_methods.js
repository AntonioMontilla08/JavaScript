const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

//forEach
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes
//Se utiliza para validar si un elemento mencionado existe en el arreglo, nos devuelve un booleano. Recomendado para arreglos planos.
const resultado = meses.includes('Marzo');
console.log(resultado);

//Some
//Se utiliza para arreglos de objetos

const resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Celular'
});

console.log(resultado2);