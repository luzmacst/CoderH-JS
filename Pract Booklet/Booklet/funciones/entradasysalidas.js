/*Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.
*/

//let usuarioing = prompt ("Ingrese usuario"); 

// function entrada(){
//     let usuarioing = prompt ("Ingrese usuario"); 
//     return usuarioing ;
// } 

// function procesamiento(valor) {
//     // if (valor !="") {
//     //     valor = "lo cambio";
//     // }
//     return (valor) ;
// } 

// function salida(valor) {
//     alert ("Muestro el valor cambiado " + valor);
// }

// entrada () ;
// procesamiento (usuarioing);
// salida (valor);

//////////////////////////////////////

function entrada(){
    return prompt("INGRESAR DATO");
}

function procesamiento(valor){
    return "LA ENTRADA ES "+valor
}

function salida(valor){
    alert(valor);
}
//SUMAR LA OTRA FORMA DE LLAMADA
salida(procesamiento(entrada()));