// Centro Estetica
// Solicito al cliente que seleccione el tratamiento que quiere realizarce y hago que se busque en los arrays si existe 
// el tratamiento , si existe entonces se realiza la funcion para buscar los precios en otro array para luego aplicarles los
// impuestos y descuentos si corresponde 
let monto =0;
let valoreal=0;
let valorealpromo=0;

const tratamientos = [
        { id: 1,
          tratamiento: "Depilacion",
          precio: 2000,
        },
        { id: 2,
          tratamiento: "HiFu",
          precio: 3000,
        },
        { id: 3,
          tratamiento: "Criolipolisis",
          precio: 4000,
        },
        { id: 4,
          tratamiento: "HimFu",
          precio: 5000,
        },
  ];
       
 

//falta vincular (que nose como)eventos2.js con tienda1.js para que detecte el ingreso del usuario.
//console.log (usuario);
let selecciondetratam =parseInt(prompt("Seleccionar tratamiento: 1) Depilacion 2)HiFu 3)Criolipolisis 4)HimFu  5)ESC"));

//Busco si el id del tratamiento seleccionado existe, si existe en mi array


let lee = console.log (tratamientos.some((el) => el.id== selecciondetratam));
if (lee = true ){
  for (const tratamiento of tratamientos) {
    if (selecciondetratam ==tratamiento.id ) {
          monto = (tratamiento.precio);
          montofinal(monto);
      }     
  } //console.log("¿Desea agregar otro tratamiento? "); seria el paso a seguir para la prox entrega
} else { alert ("Sr/Sra " + ingresousuario + "Ingreso incorrecto, intente nuevamente ")};


//funcion que agrega el imp IVA y en caso de entrar en promo llama a la funcion promo
function montofinal(monto) {
       let iva =(monto * 21/100) ; 
      let montoiva= monto + iva; 
        if (monto >= 4000){
            
            alert ( "Sr/Sra "  + ingresousuario + " El tratamiento elegido se encuentra en  promocion se le aplicara un descuento ");
             promodesc(montoiva);
           
           } else if (monto < 4000 && monto >100){
           
            alert ("Sr/Sra " +  ingresousuario + " El precio por el tratamiento elegido es : $" + montoiva)} ;
            return (montoiva);
     }

   
function promodesc (valorealpromo){
    let valorconpromo =0;
    let promocion2 =0;
    valorconpromo = Math.round(valorealpromo * 10 / 100);
   promocion2 = Math.round(valorealpromo - valorconpromo);

    alert ("Sr/Sra " + ingresousuario + " Se realizo un descuento en promocion su precio es $ " + promocion2 );
    }



