const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1 Kg',
    medida: '1m'
}

//Rest Operator
 const nuevoProducto = {...producto, ...medidas}; //Se crea un nuevo objeto y con los 3 puntos (...) delante de cada 1, se declaran los que se quieran agregar

 console.log(producto);
 console.log(nuevoProducto);