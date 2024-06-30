//ORDEN DE LAS OPERACIONES

let resultado;

resultado = 20 + 30 * 2; //divisiones y multiplicaciones se realizan primero y luego las sumas y restas
resultado = (20 + 30) * 2; //el contenido de los parentesis tiene prioridad sobre las demas operaciones

console.log(resultado);

//incrementos(++) o decrementos(--) 

let puntaje = 10;

console.log(++puntaje); //Aqui primero hace el incremento y luego imprime el puntaje
console.log(puntaje++); //Aqui primero imprime el puntaje y luego hace el incremento

//incrementos o decrementos mayores de 1
puntaje += 10; //Hace incrementos en la cantidad que indica el número, en este caso de 10 en 10