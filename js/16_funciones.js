//Declaración de la función
//Se inicia con la palabra reservada function, luego el nombre que se le asigne a la funcion, no debe empezar por numero, y luego un parentesis donde van los argumentos y llaves para el contenido
//Es importarte que la función debe ser llamada para que funcione

function sumar () {
    console.log(10+10);
}

sumar(); //llamado de la función


//Expresión de la función
const sumar2 = function(){
    console.log(3+3);
}

sumar2();


//IIFE
//Sirve para proteger la función, ya que no permite que se mexzclen con otros archivos porque sus variables solo se pueden utilizar en el mismo IIFE
(function(){
    console.log("Esto es una función");
})();


