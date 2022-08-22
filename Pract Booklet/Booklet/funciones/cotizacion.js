/*Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
*/
let cambiar = prompt (" Ingrese si cambia Dolar 1 o cambia Pesos 2 ");
let importe = prompt("ingrese el importe a cambiar ");

switch (cambiar){
    case "1" : cotizarDolar (importe);
    break;
    case "2" : cotizarPesos (importe);
    break;
    
}
function cotizarDolar(pesos){
    // suponemos que el dolar esta 135 x cada $ 1
    cambiaradolar  = pesos * 200 ;
    //return redondeo;
   console.log (cambiaradolar);
   }

function cotizarPesos (dolar) {
    cambiarapesos = dolar / 200;
    console.log (cambiarapesos);
}
