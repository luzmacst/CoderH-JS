
// Centro Estetica
// Solicito al cliente que seleccione el tratamiento que quiere realizarce y hago que se busque en los arrays si existe 
// el tratamiento , si existe entonces se realiza la funcion para buscar los precios en otro array para luego aplicarles los
// impuestos y descuentos si corresponde 

let tratamientos = ["2000","3000","4000","5000"];
//const nombrestratam = ["Depilacion","Hifu","Criolipolisis","Himfu"]; 
const idtratamientos = ["1", "2", "3", "4"];
let monto =0;

// Esta funcion toma el ingreso del cliente y busca en el array los precios del tratamiento
function seleccionartratamiento (selecciondetratam, tratamientos){
            if (selecciondetratam == 1){ 
                monto = parseInt(tratamientos[0]);
                console.log(monto);
            } else if (selecciondetratam == 2){
                monto =parseInt(tratamientos[1]);
                console.log(monto);
            }  else if (selecciondetratam == 3){
                monto = parseInt(tratamientos[2]);
                console.log(monto);
          }  else if (selecciondetratam == 4){
                 monto =parseInt(tratamientos[3]);
                console.log(monto); 
          } else console.log("Ingreso incorrecto");
          
    return (monto); 
}

// Se solicita el ingreso al cliente 
let selecciondetratam =prompt("Seleccionar tratamiento: 1) Depilacion 2)HiFu 3)Criolipolisis 4)HimFu  5)ESC");
//Busco si el numero ingresado existe por el tratamiento que quiere realizarse, si existe encontces llama
// a la funcion
let lee = console.log(idtratamientos.includes(selecciondetratam) ); 
if (lee = true ){	
    seleccionartratamiento (selecciondetratam, tratamientos)} 
    else console.log("Ingreso incorrecto"); 

let valoreal=0;
let valorealpromo=0;
montofinal(monto);

//funcion que agrega el imp IVA y en caso de entrar en promo llama a la funcion promo
function montofinal(monto) {
       
        if (monto >= 4000){
            console.log ("lee");
            valorealpromo = monto +(monto *0.21);  
            console.log("El tratamiento elegido se encuentra en  promocion se le aplicara un descuento ");
            promodesc(valorealpromo);
           
           } else if (monto < 4000 && monto >10){
             valoreal = monto +(monto *0,21);
            console.log ("El precio por el tratamiento elegido es : " + valoreal)} ;
            return (valoreal);
     }

   
// Si el monto del tratamiento supera los $4000 , se realizara un descuento 
function promodesc (valorealpromo){
    let promocion =0; 
        promocion = Math.round(valorealpromo -(valorealpromo*0,10));
        console.log ("El Monto con el desc aplicado es " +promocion);
        alert ("Se realizo un descuento en promocion su precio es " + promocion ); 
       // return (promocion); 
}






