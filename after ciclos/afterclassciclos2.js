//Crear un programa que imprima los números en el intervalo (10, 50]
// let num =10;
// for (let i=0; i<= 50; i +10 ){
//     num=num+1;
// }

//--------------
//------
//Crear un programa que imprima los números pares desde 0 hasta un número ingresado por el usuario.

// let numingre = parseInt( prompt ("ingrese un numero"));
// for (let i =0; i <= numingre; i++)
//     if(numingre %2 ==0){
//     console.log("numingre",i);
// }

// for (let i =50 ; i >=0 ; i --){
//     console.log(i);
// }

// for (let i =50 ; i >=0 ; i -= 10){
//     console.log(i);
// }

// let numingre = parseInt( prompt ("ingrese un numero"));
// for (let i =0; i <= numingre; i++){
//     if(numingre %10 ==0){
//     console.log("numingre",i);
//     }
// }

// let numero =;
// let suma =0;
// for (let i=10; i <numero *10; i *=10){
//     let digito =numero %i;
//     let resultado =parseInt
// }

// let numero=10;
// for (let x =0; x< numero ;x++){
//     let cadena ="";
//     for (let y =0; y <numero; y ++)
//     {
//         if(y ==x || x ==numero -y - 1){
//             cadena +="*";
//         } else {
//             cadena +=" ";
//         }
//     } 
//     console.log (cadena);
// }


//Scrabble 
// let letra1= "A,E,O,I,S,N,L,R,U,T";
// let letra2="D,G";
// let letra3="C,B,M,P"
//     letra4="H,F,V,Y"
//     letra5="CH,Q";
//     letra8="J,LL,Ñ,RR,X";
//     letra10="Z";
//let letraingr = "A,B,C,CH,D,E,F,G,H,I,J,K,L,LL,M,N,Ñ,O,P,Q,R,RR,S,T,U,V,W,X,Y,Z";
// let puntos=0;
// let acum =0;
// let letraingr= prompt ("Ingrese una letra del alfabeto"); 
// while (letraingr !==""){
//  for (let i =0; i <11; i++){
//     if (letraingr == "D"||letraingr =="G"){
//         puntos = +2;
//         acum =i++;
//      }  else if (letraingr =="C" || letraingr =="B" ||letraingr =="M" ||letraingr =="P") {
//         puntos =+ 3;
//     } else if (letraingr =="h" || letraingr =="F" || letraingr =="V" || letraingr =="Y"){
//         puntos =+4;
//         acum =i++;
//     } else if (letraingr =="CH"||letraingr =="Q"){
//         puntos =+5;
//     } else if (letraingr =="J" || letraingr =="LL" || letraingr =="Ñ" || letraingr =="RR" || letraingr =="X"){
//         puntos = +8;
//         acum =i++;
//     } else if (letraingr =="Z"){
//         puntos=+10;
//         acum =i++
//     } else
//      puntos=+1;
//      acum =i++;
// } 

//  } console.log(" sus puntos acumulados son " + puntos , "y realizo " , + acum , " tiradas") ;



// let numero = parseInt(prompt("Ingrese un número"));
// let numero2 = parseInt(prompt("Ingrese un número"));
let suma = 0;

function sumardigitos (numero) {
  for (let i = 10; i < numero * 10; i *= 10) {
  let digito = numero % i;
  let resultado = parseInt(digito / (i / 10));
  suma = suma + resultado;
}  return suma;
}

console.log(sumardigitos(3,3));
console.log (suma);