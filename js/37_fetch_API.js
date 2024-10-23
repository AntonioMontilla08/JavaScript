function obtenerEmpleados() {
    const archivo = 'empleados.json';

    //CON PROMISES

    fetch(archivo)
        .then( resusltado =>  resusltado.json()) //Aquí primero se indica si es json o text, en este caso text        
        //.then( datos => console.log(datos.empleados)) //Luego aqui se muestran los datos
        
        //Utilizando destructuring
        .then (datos =>{
            const { empleados } = datos;
            //console.log(empleados);  //se comentó para iterar en el arreglo

            empleados.forEach(empleado => {
                //console.log(empleado);       
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

            });
        })
    }
obtenerEmpleados();

//TAMBIEN SE PUEDE USAR CON ASYNC AWAIT
console.log('++++++++++++++++++++++++++++++++++');

async function obtenerEmpleados2() {
    const archivo = 'empleados.json';

    const resultado = await  fetch (archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados2();