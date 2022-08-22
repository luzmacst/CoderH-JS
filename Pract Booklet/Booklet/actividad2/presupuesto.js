let numero = parseInt(prompt('INGRESAR numero'));

if ((numero >=0) && (numero <=1000)){
    console.log ("Presupuesto bajo");
} else if ( (numero >=1001 )&& (numero <=3000)){
    console.log ("Presupuesto medio");
} else if ( numero >=3001) {
    console.log ("Presupuesto alto");
}


// let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
// if ((entrada4 >= 0) && (entrada4 <= 1000)) {
//     alert("PRESUPUESTO BAJO");
// } else if ((entrada4 >= 1001) && (entrada4 <= 3000)) {
//     alert("PRESUPUESTO MEDIO");
// } else if (entrada4 > 3000) {
//     alert("PRESUPUESTO ALTO");
// }
// else {
//     alert("ERROR");