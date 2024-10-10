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

//Reduce 
//Se utiliza para sumar el valor de los productos en el arreglo, el 0 al final es el valor inicial.
//total, en este caso es el acumulador en dodnde se va a ir almacenando la suma a medidia que se va iterando 
//pructo, son los valores del arreglo sobre los cuales se va a iterar 

const resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

console.log(resultado3);

//Filter
//Si utiliza para filtrar segun los valores o cantidades,etc
//Este ejemplo mostrará los que tienen precio mayor a 400
const resultado4 = carrito.filter(function(producto){
    return producto.precio > 400
});

console.log(resultado4);

