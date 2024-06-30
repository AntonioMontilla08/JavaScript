//Strings o Cadenas de texto

const tweet = 'Aprendiendo JavaScript en el curso de Desarrollo Web Completo"';
const producto2 = "Monitor HD"; 

console.log(producto2);

//length
console.log(tweet.length); //.length indica la cantidad de caracteres del string

//indexOf
console.log(tweet.indexOf('JavaScript')); //Busca si existe una palabra en una en un String y devuelve en que posicion está. En este ejemplo es 12
console.log(tweet.indexOf('Tablet')); //Si la palabra no existe en la cadena de texto devuelve -1 como este caso

//includes
console.log(tweet.includes('JavaScript')); //Busca si existe una palabra en una en un String y devuelve en que posicion está. En este ejemplo es 12
console.log(tweet.includes('Tablet')); //Si la palabra no existe en la cadena de texto devuelve -1 como este caso