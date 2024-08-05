const numeros = [10,20,30,40,50]; //Recordar que los arreglos se declaran con corchetes
console.table(numeros); // el (.table) da formato de tabla al arreglo al imprimirlo


//También se pueden declarar arreglos con el constructor de la siguiente manera
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

//AGREGAR ELEMENTOS AL FINAL DEL ARREGLO
    numeros[5] = 60; //Se selecciona la posición del arreglo a agregar y se define. NO ES MUY UTILIZADA ESTA FORMA.
    //Cabe señalar que si se coloca una posición que ya existe, lo que hará es modificar el valor de estq posición.

    console.table(numeros);

    //PUSH
    numeros.push(70); //esta forma independiente del tamaño, siempre agregará el elemento al final del arreglo
    numeros.push(80); //Se pueden agregar múltiples y siempre lo pondrá al final
    numeros.push(90, 100, 110); //O se pueden agregar múltiples en una misma linea de codigo y se agregaran en orden al final del arreglo.
    console.table(numeros);

//  AGREGAR ELEMENTOS AL INICIO DEL ARREGLO

    //UNSHIFT
    numeros.unshift(-10,-20, -30);
    console.table(numeros);

//ELIMINAR ELEMENTOS DEL ARREGLO

meses.pop(meses); //Elimina el último elelmento del arreglo
meses.shift(meses); //Elimina el primer elemento del arreglo 
console.table(meses);

meses.splice(1,1); //Elimina elementos específicos del arreglo. El primer valor indica a partir de que posición se quiere eliminar el valor. El segundo valor indica cuantos elementos se quieren eeliminar, a partir del primer valor indicado
console.table(meses);

//REST OPERATOR Y SPREAD OPERATOR
//No se recomienda eliminar ni agregar valores de un arreglo ya que modifica el valor original del mismo. Actualmente, se recomienda crear nuevos arreglos a partir de los existentes 
const newMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//Agregar elementos al final del nuevo arreglo
const nuevoArreglo = [...newMeses, 'Junio']; //Los tres puntos (...) indican que se use el mismo eleemente, acompañado del elemento a copiar y el segundo valor, los elementos a agregar.
console.table(nuevoArreglo);

//Agregar elementos al inicio del nuevo arreglo
const InicioNuevoArreglo = ['Junio', ...newMeses]; // Para agregar al inicio, se pone el elemento antes de indicar el arreglo a copiar
console.table(InicioNuevoArreglo);