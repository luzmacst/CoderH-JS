/* Crear un algoritmo simple, que le solicite al usuario ingresar datos y luego 
mediante JS , realizar operaciones sobre los mismos*/
let entradaproducto1 = prompt ("Ingrese el monto a pagar del primer producto");
let producto1condesc =0;


if (parseInt (entradaproducto1)> 1500){
    producto1condesc =entradaproducto1 -((entradaproducto1 *20)/100);
} else alert ("El valor no tiene descuento" + entradaproducto1);
alert (producto1condesc);