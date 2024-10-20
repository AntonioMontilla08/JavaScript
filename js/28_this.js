//This
//Hace referencia a elementos del mismo objeto

const reservacion = {
    nombre: 'Antonio',
    apellido: 'Montilla',
    total: 5000,
    pagado: FontFaceSetLoadEvent,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.informacion());