// OBJETO MATH

let resultado;

//Pi 
resultado = Math.PI; //devuelve el número pi

//Redondeo (round, ceil, floor)
resultado = Math.round(2.2); //redondea el número en parentesis
resultado = Math.ceil(2.1); //redondea el número en parentesis, pero siempre hacia arriba. Este ejemplo la respuesta es 3
resultado = Math.round(2.9); //redondea el número en parentesis, pero siempre hacia abajo. Este ejemplo la respuesta es 2

//Raiz cuadrada (sqrt)
resultado = Math.sqrt(144); //Devuelve la raiz cuadrada del numero en parentesis

//Valor absoluto
resultado = Math.abs(-200); //Devuelve el valor absoluto del numero en parentesis

//Min
resultado = Math.min(3, 5, 1, 8, 2, 10); //Devuelve el número con el menor valor. En este caso 1

//Max
resultado = Math.max(3, 5, 1, 8, 2, 10); //Devuelve el número con el mayor valor. En este caso 10

//random
resultado = Math.random(); //Devuelve un número aleatorio entre 0 y 1


console.log(resultado);