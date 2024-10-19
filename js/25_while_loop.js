//Sintaxis
//Se declara el indice o iniciador del loop
//Se usa la palabra reservada while y entre parentesis la condicion a evaluar
//entre los corchetes va lo que se quiere evaluar
//Al final, antes del corchete de cirre, se pone el incremento



//Código de abajo comentado solo para no confundir con los siguientes ejemplos, 
/*let i = 0;
while(i < 10){
    console.log(i);
    i++
}*/

/*let i = 1;

while(i <= 100){
    if(i % 2 === 0){
        console.log(`Este número es PAR ${i}`);
    } else {
        console.log(`Este número es IMPAR ${i}`);
    }
    i++
}*/

//Tomado del ejercicio 21
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

let i = 0;

while(i < carrito.length){
    console.log(carrito[i].nombre);
    i++
}