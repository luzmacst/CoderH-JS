
/*----------------------------------------------*/

/*----------------------------------------------*/
let localidad="";
let nom ="Licencia de conducir";
let numdelicencia=0;
let nomlicencia="";
let direccion="";
let numdirecccion =0;
let pais="";
let fechanac=0;
let sex="";
/*----------------------------------------------*/
/*
class licenciadeconducir {
    this.nom= nombre;
    this.numdelicencia= numero;
    this.direccion=direccion;
    this.pais= pais;
    this.fechanac= fechanac;
    this.sex= sexo;
} */

 let nombrefamiliar []="";
function ingresarnomb (nombrefamiliar) {
    console.log("ingresar nombre de familiar")
    nombrefamiliar[]= nombrefamiliar;
    If (nombrefamiliar === nombrefamiliar){
    console.log ("Ingresar segundo nombre");
    nombrefamiliar[]=nombrefamiliar;
    }
    return nombrefamiliar;

}
/*----------------------------------------------*/
function descuentoproducto (precioadescontar) {
    console.log("ingresar precio del producto a comprar")
    if (precioadescontar ===0){
        console.log("ingresar nuevamente el precio")
    } else (precioadescontar= (precioadescontar - (precioadescontar *0,2))) {
        console.log ("se realizo el descuento del 20 %")
    } return precioadescontar;
}
/*----------------------------------------------*/

let nombreingresado []="";
    nombrealmacenado="Lula";
console.log ("Ingresar nombre");
if (nombreingresado ===nombrealmacenado){
    console.log ("Fui Yo")
} else {
    console.log ("Yo no fui")
}
/*----------------------------------------------*/

let teclaingresada =0;
if (teclaingresada === "y"|| teclaingresada==="Y")
{
    console.log ("Correcto")
} else console.log ("Error")
/*----------------------------------------------*/

let numingresado=0;
console.log ("ingresar 1 numero entre 1 y 4");
if ( numingresado <=1 || numingresado >=4) {
    switch (numingresado){
        case "1": return "Elegiste a Homero";
        case "2": return "Elegiste a Marge";
        case "": return "Elegiste a Bart";
        case "4": return "Elegiste a Lisa";
    } else console.log ("intenta nuevamente");
}

/*----------------------------------------------*/
/* Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos 
fueron cargados, realizar una única salida compuesta por el listado de productos. 
Caso contrario, la salida será “Error: Es necesario cargar todos los productos”. */

functionc( ingresarproducto) {
let productoingresado =[3];

for (i =0, i> productoingresado.length ;i ++ ) {
productoingresado [i]= productoingresado [] + prompt ("Ingresar Producto 1");
 prompt ("Ingresar Producto 2 ");
 prompt ("Ingresar Producto 3 ");
 prompt ("Ingresar Producto 4 ");
}
else { return ("Error: Es necesario cargar todos los productos”" )};

}