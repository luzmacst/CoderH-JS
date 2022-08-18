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
let montoapagar=0;

do {
    if (cafeelegido.toUpperCase() =='E'){
      montoapagar =+250;
      alert ('su cafe elegido es Espresso y su monto a pagar es $' + montoapagar );
    } else if (cafeelegido.toUpperCase() =='M' ||cafeelegido.toUpperCase() =='C' ){
       montoapagar =+255;
       alert ('su cafe elegido es Macchiato o Cappucino y su monto a pagar es $' + montoapagar);
    } else if (cafeelegido.toUpperCase()=='L'){
        montoapagar =+240;
        alert ('su cafe elegido es Latte y su monto a pagar es $' + montoapagar);
    } else if (cafeelegido.toUpperCase() =='FW'|| cafeelegido.toUpperCase()=='MO'){
        montoapagar =+280;
        alert ('su cafe elegido es Flat White o Mocha y su monto a pagar es $' + montoapagar);

    } else alert ('Seleccione su Café');
} while(entrada != "ESC" )



