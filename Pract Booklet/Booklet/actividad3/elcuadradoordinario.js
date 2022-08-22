// let numero1 = prompt("INGRESAR 1 numero");

// for (i=0; i<numero1; i++) {
//       if (i<4) {
//         alert ("lado");
//         //console.log("lado");
//         break;
//     }
//     // else {
//     //     return ("volver a comenzar");
//     // }
// }


let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        break;
    }
    alert("lado");
}
