//En el parentesis van las condiciones del for
//En la primera parte, antes del primer punto y como (;), va el índice o el valor inicial
//En la segunda parte , entre el primer y el segundo punto y coma(;), va la condición del loop
//En la tercera parte, después del segundo punto y coma(;), va el incremento del índice luego de validar el primer ciclo

//Código de abajo comentado solo para no confundir con los siguientes ejemplos, 

/*for (let i = 0; i < 10; i++){
    console.log(i);
}*/

//Identificar si el número es par
/*for (let i = 1; i <= 100; i++){
    if( i % 2 === 0){
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
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

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}