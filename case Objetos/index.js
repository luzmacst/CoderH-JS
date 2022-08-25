class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}
 // asi lo invocamos con new y constructor
const tienda1 = new Tienda("pepito", "peron 123", "Lara","Almacen");
const tienda2 = new Tienda("Verduleria Vale", "Solano 323", "Valeria","Verduleria");
const tienda3 = new Tienda("Mi tienda", "Moreno 231", "Matias B","Bikers");

// muestro lo que construi
console.log(tienda1);
console.log(tienda2);
console.log(tienda3);