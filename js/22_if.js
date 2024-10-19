//IF
//comparando iguales
const puntaje = 100;
if(puntaje == 1000){
    console.log('Sí, el puntaje es 1000');
} else {
    console.log('No es igual');
}


//Comparando mayor o menor que
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito){
    console.log('El usuario puede pagar')
} else {
    console.log('Fondos insuficientes');
}


//Compaando múltiples opcones
const rol = 'Editor';
if (rol === 'Administrador'){
    console.log('Acceso a todo el sistema');
} else if(rol === 'Editor'){
    console.log('Eres editor, puede entrar, pero no puedes hacer mucho');
} else {
    console.log('No tienes acceso');
}