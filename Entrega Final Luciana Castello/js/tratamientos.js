//eventos de Materialize
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.carousel');
  let instances = M.Carousel.init(elems, {
    duration: 300,
    indicators: true,
  });
// M.AutoInit();

});
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems);
});



//Crear clase tratamiento
class Tratamientos {
    constructor (id,tratamiento,precio,cantidad){
      this.id=id;
      this.tratamiento=tratamiento;
      this.precio=precio;
      this.cantidad=cantidad;
      }
    }

//Creo un array para guardar la seleccion del Cliente
let tratamiento =[];

let $botonselc =document.querySelectorAll('.btn-dark');
const $botoncomprar = document.querySelector('.btn-success')
if ($botoncomprar ){
  $botoncomprar.addEventListener('click', realizarcompra);
}


$botonselc.forEach(btn => {
    btn.addEventListener('click', savetratselec)
  }) ;

 
let $tablaseleccion =document.querySelector("#addSelec");   //aca se cargaran los tratm seleccionados


function savetratselec (e){
    const $buttonadd =e.target;                 
    const $item=$buttonadd.closest('.card');      
    const $itemid =$item.querySelector('h6').textContent;;
    const $itemName =$item.querySelector('h5').textContent;
    const $itemPrecio=$item.querySelector('p').textContent ;
    const $itemCantidad=1;
    const newtratamiento =new Tratamientos($itemid,$itemName,$itemPrecio,$itemCantidad);    
     mostrarseleccion (newtratamiento);
    // console.log(newtratamiento);
      cargarLS ();
}

function mostrarseleccion (newtratamiento){  
     const $inputelemento= $tablaseleccion.getElementsByClassName('input-elem');     //es addcarrito
    for (let i=0; i< tratamiento.length; i++){
          if(tratamiento[i].tratamiento.trim() === newtratamiento.tratamiento.trim()){    
            tratamiento[i].cantidad ++;
            const inputValue =$inputelemento[i];
            inputValue.value++;
            carritoTotal ();    
            return null;
       }
    }
     tratamiento.push(newtratamiento);            
     console.log(newtratamiento);
     cargarseleccion() ; 
} 



//Ir cargando la seleccion del tratamiento
function cargarseleccion(){
   $tablaseleccion.innerHTML= "";    
   tratamiento.map (item => {    
   const selecHTML = document.createElement(`tr`); 
     selecHTML.classList.add('itemCarrito');  
      const contenido =`<th class ="name-tratam">${item.tratamiento}</th>
                        <td>${item.precio}</td>
                        <td> </td>  <input type="number" value= ${item.cantidad} class="input-elem" >
                        <td> <button class="btn delete-btn btn-sm"> x </button></td>`;    
  selecHTML.innerHTML =contenido;
  $tablaseleccion.append(selecHTML);             
  selecHTML.querySelector('.delete-btn').addEventListener('click', borraralgocarrito);
  selecHTML.querySelector('.input-elem').addEventListener('change', modificarcantidad);  //saque el change
    });
  carritoTotal ();
  cargarLS ();
  }  

//Total de compra
function carritoTotal (){
    let total =0;
    const $itemCargaTotal=document.querySelector('.totalseleccionado');
    console.log($itemCargaTotal);
    tratamiento.forEach((item) => {
        const precio= Number(item.precio.replace ("$", " "));
        total =total + (precio *item.cantidad);
        console.log(item.cantidad);
      });
      $itemCargaTotal.innerHTML=`Total $${total}`; 
  }


//Borrar algo del Carrito aca se podria poner una libreria para confirmar el borrado
 function borraralgocarrito (e){ //removeitem
  swal("Cuidado, esta borrando su selección");
  const $botonborrado=e.target;
  const borraralgo=$botonborrado.closest('.itemCarrito');  
  const itemName =borraralgo.querySelector('.name-tratam').textContent;
     for (let i=0; i< tratamiento.length; i++){  
       if(tratamiento[i].tratamiento.trim()===itemName.trim()) {  
            tratamiento.splice(i, 1);  
            borraralgo.remove(); 
            carritoTotal ();    
          } 
        } 
  }

const modificarcantidad = evento =>{  
    const $sumaadd= evento.target;
    const $modificaralgo=$sumaadd.closest('.itemCarrito'); 
    const itemName =$modificaralgo.querySelector('.name-tratam').textContent;
    tratamiento.forEach(item =>{
      if(item.tratamiento.trim()===itemName){
        console.log("realiza esto?");
        $sumaadd.value < 1 ? ($sumaadd.value =0) : $sumaadd.value;
        item.cantidad= $sumaadd.value;
        carritoTotal ();
        }
    });
    
    console.log(tratamiento);
   }
  

   function realizarcompra (){
    swal("A Seleccionado Comprar!", "...Sera direccionado a un sitio seguro!");
 
   }


  ////////LocalStorage///////

// funcion para llamar a guardar en LS
function cargarLS (){
  const nuevoaddcarrito = JSON.stringify(tratamiento); 
  localStorage.setItem("Agregotratamiento", nuevoaddcarrito);
  const tratamlocalstorage =localStorage.getItem("Agregotratamiento");
  //console.log (tratamlocalstorage);
  const nuevoTRATParseado =JSON.parse(tratamlocalstorage);
     
}


//boton para login
let $buttonlogin = document.getElementById("btn-login");
//console.log ($buttonlogin);
if ($buttonlogin) {
  $buttonlogin.addEventListener ('click' , formlogin ,false ); 

} ; 

function formlogin(evento){
  console.log("funciona");
  location.href="./formulario.html";
}   


