const numeros = [10,20,30,40,50]; //Recordar que los arreglos se declaran con corchetes
console.table(numeros); // el (.table) da formato de tabla al arreglo al imprimirlo


//Tsmbién se pueden declarar arreglos con el constructor de la siguiente manera
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

//Se pueden mezclar los arreglos con diferentes tipos de datos e incluso otros arreglos
const arreglo = ["Hola", 10, true, "si", null, {nombre: "Antonio", trabajo: "programador"}, [1,2,3]];
console.log(arreglo);

//ACCEDER A VALORES DEL ARREGLO
console.log(numeros[4]);

//EXTENSION DE UN ARREGLO 
console.log(meses.length);

//RECORRER ARREGLOS CON ITERADOR
numeros.forEach( function(numero){
    console.log(numero);
})