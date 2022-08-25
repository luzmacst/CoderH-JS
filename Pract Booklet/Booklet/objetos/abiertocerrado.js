class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
     estaAbierto(hora) {
        if ((hora >= 8 && hora <=12)||(hora >=13 && hora <=19)){
           return true;
        } return false;

    }
}

const tienda4 = new Tienda ("dog bank", "salta", "pepito", "kiosco"); 

for (let i =0; i <=3; i ++){
    let ingrhora= parseInt(prompt ("ingrese  la hora a consultar"));
    if(tienda4.estaAbierto(ingrhora)){
        console.log("abierto");
    } console.log("cerrada"); 
}