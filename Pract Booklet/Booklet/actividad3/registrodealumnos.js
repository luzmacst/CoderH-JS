/*Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.*/


// let alumno1 = prompt('INGRESAR 1er alumno');
// let alumno2 = prompt('INGRESAR 2do alumno');
// let alumno3 = prompt('INGRESAR 3do alumno');
// let alumno4 = prompt('INGRESAR 4er alumno');
// let alumno5 = prompt('INGRESAR 5to alumno');
// let alumno6 = prompt('INGRESAR 6to alumno');
// let alumno7 = prompt('INGRESAR 7to alumno');
// let alumno8 = prompt('INGRESAR 8to alumno');
// let alumno9 = prompt('INGRESAR 9to alumno');
// let alumno10 = prompt('INGRESAR 10 mo alumno');

// if ((alumno1 !="") &&(alumno2 !="") &&(alumno3!="") &&(alumno4 !="") &&(alumno5 !="") &&(alumno6 !="") &&(alumno7 !="") &&(alumno8 !="") &&(alumno9 !="") &&(alumno10 !="")){
//     alert ("Los alumnos ingresados son : " +alumno1 +" "+ alumno2 + " " +alumno3 );
// }

let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";  // aca agrega un salto de linea
}
alert(alumnos);