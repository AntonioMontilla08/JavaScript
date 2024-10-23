const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado');//El promise se cumple
    } else{
        reject('No se pudo iniciar sesion');//el promise no se cumple
    }
})

console.log(usuarioAutenticado);

//Para acceder a los valores del promise se hace así

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch(error => console.log(error))

//En los Promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplió
//Rejected: Se ha rechazado o no se pudo cumplir