/*Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.
*/

 

function entrada(num){
     redondeo = Math.round (num);
     //return redondeo;
    console.log (redondeo);
    }

    for ( let i =0; i <5; i++){
        let numdecim = parseFloat (prompt("INGRESAR Numero"));
        entrada (numdecim);
    }

////////////////////////77

    
