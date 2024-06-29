//Variables

var producto = 'Audifonos Gamer'; //Iniciar variable y asignarle un valor.

var disponible; //Iniciar la variable pero sin asignarle un valor.

producto = true; // Reasignando el valor de la variable.

disponible = true;

var producto1 = 'Computadora',  //Se puede decalarar varia variables a la vez de esta manera, separando con comas (,)
    disponible1 = true,
    categoria = 'Computadoras';

//var 1disponible; // Marca error porque no se puede iniciar con numeros o guion medio
var _disponible;

//ESTILOS PARA LAS VARIABLES
var nombre_producto = 'Monitor HD'; //underscore --> se separan las palabras con quion bajo
var nombreProducto = 'Monitor HD'; //camelCase --> inicar las palabras con Mayusculas, excepto la primera (más utilizado)
var NombreProducto = 'Monitor HD'; //PascalCase --> iniciar todas las palabras con mayuscula
var nombreproducto = 'Monitor HD'; // lowercase --> todo en miniscula (no muy utilizado)

console.log(producto); //Estas son variables distintas, si revisamos, la primera existe, pero la otra no. Porque javaScript es key sensitive. Importan las mayusculas
console.log(Producto);