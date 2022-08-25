// //solicitar al usuario el registro de 5 tiendas
class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}
let tiendasingresadas =[]; 
for ( let i =0; i <5 ; i++){
    //let datos = prompt ("Ingresar datos para crear la tienda");
    let nombreingr = prompt("Ingresar nombre de la tienda");
    let direccioningr =prompt ("Ingresar direccion de la tienda");
    let propietarioingr = prompt ("Ingresar el nombre del propietario de la tienda");
    let rubroingr = prompt("Ingresar el rubro de la tienda"); 
    
    // es necesario que el bucle vaya cargando los datos de las tiendas

    const tienda1 = new Tienda(nombreingr,direccioningr,propietarioingr,rubroingr);
    tiendasingresadas[i]= tienda1;
    console.log (tienda1); 
}

 
