//Declaracion de funcion básica
const sumar = function(n1, n2){
    console.log(n1 + n2);
}
sumar(5, 10);


//Arrow function

//Si son de una sola línea, las llaves son opcionales
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

//Cuando solo se recibe un parametro los parentesis son opcionales
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');



//+++++++++++TOMADO DEL LA CLASE 15++++++++++++++++++ para convertirlo en arrow function


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
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Some
//Se utiliza para arreglos de objetos
//++++++++++++++++++Cuando son arrow function de una sola linea, la palabra "return" no se pone, está implícita
const resultado2 = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado2);

//Reduce 
//Se utiliza para sumar el valor de los productos en el arreglo, el 0 al final es el valor inicial.
//total, en este caso es el acumulador en dodnde se va a ir almacenando la suma a medidia que se va iterando 
//pructo, son los valores del arreglo sobre los cuales se va a iterar 

resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado3);

//Filter
//Si utiliza para filtrar segun los valores o cantidades,etc
//Este ejemplo mostrará los que tienen precio mayor a 400
const resultado4 = carrito.filter(producto => producto.precio > 400);
console.log(resultado4);

