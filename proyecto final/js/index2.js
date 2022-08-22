//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

// Centro Estetica
// Solicito al usuario que seleccione el tratamiento a realizarce

let tratamiento = seleccionartratamiento(prompt ("Seleccionar producto: 1) Depilacion 2)HiFu 3)Criolipolisis 4)HimFu ")) ;

// Si el monto del tratamiento supera los $6000 , se realizara un descuento 
function promodesc (valoreal){
    let promocion =0; 
    promocion+= Math.round(valoreal -((valoreal*5)/100));
        console.log (promocion);
        return (promocion); 
}


function montofinal (monto) {
     let valoreal =monto +((monto *21) /100);   
    if (valoreal > 6000){
        //se realiza un descuento en promocion
        promodesc(valoreal);
           } else 
       console.log (valoreal);
       return (valoreal);
     }


 
function seleccionartratamiento (tratamiento){
    let monto =0; 
   
    if (( tratamiento !="") && (tratamiento ==1)){ 
        monto +=2000; 
            montofinal (monto); }
        else if (( tratamiento !="") && (tratamiento ==2)){ 
         monto +=5000;  
         montofinal (monto);} 
         else if (( tratamiento !="") && (tratamiento ==3)){ 
         monto =4500;  
         montofinal (monto);}
         else if (( tratamiento !="") && (tratamiento ==4 )){ 
         monto =4000; 
         montofinal (monto);}
         else  console.log('Lo lamentamos, por el momento no disponemos de ' + tratamiento + '.');
         
    return monto;
    } 
  
   
