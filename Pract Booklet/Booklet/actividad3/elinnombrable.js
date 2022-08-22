/*Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados */

let usuario1 = prompt ("Ingrese el usuario");

 if (usuario1 !== "Voldemort") {

    for (let i =0 ; i < 5  ; i++ ){
        usuario1 += prompt ("Ingrese el usuario ") + "\n";  
               
    }
} alert (usuario1); 

// en el curso hicieron asi
// let entrada    = prompt("INGRESAR NOMBRE");
// let ingresados = '';
// while (entrada != 'Voldemort') {
//     ingresados += entrada +"\n";
//     entrada     = prompt("INGRESAR NOMBRE");
// }
// alert(ingresados);