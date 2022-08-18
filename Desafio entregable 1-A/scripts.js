/*Formato: Página HTML con código fuente en Javascript. Consigna: crear un algoritmo que repita un bloque de instrucciones.
 En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola. 
 Aspectos a incluir en el entregable: 
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta , que incluya la definición de un algoritmo en
 JavaScript que emplee bucles e instrucciones condicionales. 
 Ejemplos:

- Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
- Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
- Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/



let cafeelegido = prompt ("Ingresar Tipo de Café -Espresso E / - Macchiato  M /- Latte L");
let cantazucar="";
let montoapagar=0;

if (cafeelegido.toLowerCase() == "E"|| cafeelegido.toLowerCase() =="M"|| cafeelegido.toLowerCase() =="L") {
switch (cafeelegido){
    case 'E':  
        console.log ("Su cafe elegido es Espresso el precio es $250");
        montoapagar +=250;
    break;
    case 'M':
        prompt("Su cafe elegido es Macchiato $280");
    montoapagar +=280;
    break;
    case 'L':
        console.log ("Su cafe elegido es Latte $260");
    montoapagar +=260;
    break;

    case 'FW':
        console.log ("Su cafe elegido es Flat White $260");
    montoapagar +=260;
    break;
    case 'C':
        console.log ("Su cafe elegido es Cappucino $260");
    montoapagar +=260;
    break;
    case 'MO':
        console.log ("Su cafe elegido es Mocha $260");
    montoapagar +=260;
    break;
    case 'D':
        console.log ("Su cafe elegido es Doppio $260");
    montoapagar +=260;
    break;
    case 'LB':
        console.log ("Su cafe elegido es Long Black $260");
    montoapagar +=260;
    break;
    default:
        break;

    }
   /*  cantazucar = prompt ("¿quiere agregar azucar?");
        if (cantazucar =="S"){
        console.log ("se agrego azucar")
        montoapagar = +5; */
  /* else 
  if (cantazucar=="N"){
  console.log ("sin azucar"); */

//  } else {
//     return ("debe elegir el tipo de cafe");

// }
console.log(" El monto a pagar por su cafe es ,");
alert($montoapagar);
}
