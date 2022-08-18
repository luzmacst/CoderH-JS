//Crear un algoritmo utilizando un ciclo
// Generado de numeros de atencion al cliente de un local


let numasig =0;

let ingresarnomb = prompt ("Ingrese su nombre");                            // solicito el nombre del cliente

if ( ingresarnomb !="") {                                                 // corroboro que se ingrese un nombre 
        
    for (let i = 1 ; i < 4; i++) {    
         numasig = +i;                                                       // ciclo para asignar numero
        let consumidorf = prompt ("Ingrese si es consumidor final S /N ");      // discrimino el tipo de factura 
                                      
    if (consumidorf =="S") {    
        alert ( ingresarnomb + " ,sera atendido con el numero " + numasig);
        break; 

    } else if (consumidorf =="N") {
        alert ("Pasar por caja Numero 2");
        break; 
    } else alert ("Error en el ingreso, seleccione S o N"); 
    } 
} else alert ("Ingrese su nombre"); 
