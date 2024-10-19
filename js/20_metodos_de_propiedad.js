const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar : function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist con el nombre ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

//Se pueden crear más funciones fuera de los objetos de la siguiente manera
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando canción con el id ${id}`);
}

//Para acceder a la funcion, se usa la sintaxis de los metodos 
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Mis Favoritos');
reproductor.reproducirPlaylist('Mis Favoritos');