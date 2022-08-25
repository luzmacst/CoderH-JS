// //solicitar al usuario el registro de 5 tiendas

// for ( let i =0; i <5 ; i++){
//     //let datos = prompt ("Ingresar datos para crear la tienda");
//     let nombre = prompt("Ingresar nombre de la tienda");
//     let direccion =prompt ("Ingresar direccion de la tienda");
//     let propietario = prompt ("Ingresar el nombre del propietario de la tienda");
//     let rubro = prompt("Ingresar el rubro de la tienda"); 
    
//     // es necesario que el bucle vaya cargando los datos de las tiendas

//     const tienda[i] = new Tienda(nombre,direccion,propietario,rubro);
    
// }

// console.log(tienda1);

// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
// }


let ingresados = '';
for (let index = 0; index < 5; index++) {
    let tienda =  new Tienda(prompt("NOMBRE"), 
                             prompt("DIRECCION"), 
                             prompt("PROPIETARIO"),
                             prompt("RUBRO"));

    ingresados+= "Tienda: "+tienda.nombre+" "+
             "Direccion: "+tienda.direccion+" "+
             "Propitario: "+tienda.propietario+" "+
             "rubro: "+tienda.rubro+"\n";
}
alert(ingresados);