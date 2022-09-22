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

// Desarrollo del Codigo para el Carrito 


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

 let $botonselc =document.querySelectorAll("#btngrl");
   // console.log($botonselc);
  // console.dir($botonselc); 
  $botonselc.forEach(btn => {
    btn.addEventListener('click',savetratselec)
  }) ;

//Seleccion del  tratamiento
function savetratselec (e){
    const $buttonadd =e.target;                 
    //console.log($buttonadd);
    const $item=$buttonadd.closest(`#gral`);      //identifico donde se hace click para traer toda la info
    //console.log ($item);
    const $itemCod =$item.querySelector('.cod-titulo').textContent;
    const $itemName =$item.querySelector('.name-tratamiento').textContent;
    const $itemPrecio=$item.querySelector('.precio-tratamiento').textContent;
    const newtratamiento =new Tratamientos($itemCod,$itemName,$itemPrecio,1);     //inicio la cantidad en 1
      
    mostrarseleccion (newtratamiento);
     cargarLS ();
}

// //Boton cargar carrito
let $buttoncarrito = document.getElementsByName("action");
let $tablaseleccion =document.querySelector("#seleccioncarrito tbody");   //aca se cargaran los tratm seleccionados
//console.log($tablaseleccion);

cargarseleccion();

// Funcion para ir sumando la cantidad para un mismo tratamiento    
 function mostrarseleccion (newtratamiento){
  const $inputelemento= $tablaseleccion.getElementsByClassName('input-elem'); 
 // console.log($inputelemento);
       for (let i=0; i< tratamiento.length; i++){
        if(tratamiento[i].id.trim() ===newtratamiento.id.trim()){    
          tratamiento[i].cantidad ++;
          const inputValue= $inputelemento[i];
          //console.log(inputValue);
          inputValue.value++;                               
          carritoTotal ();                      
          return null;
        }
  }
 tratamiento.push(newtratamiento);            
 //console.log(newtratamiento);
  cargarseleccion() ;
 } 


//console.log($tablaseleccion);

//Ir cargando la seleccion del tratamiento
function cargarseleccion(){
 
    $tablaseleccion.innerHTML= "";
    tratamiento.map (item => {      
     const selecHTML = document.createElement(`tr`);
     selecHTML.classList.add('itemCarrito');
      const contenido =`<th class="cod-titulo">${item.id}</th>
                <td class="name-tratamiento">${item.tratamiento}</td>
                <td class="precio-tratamiento"><span></span>${item.precio}</td>
                <td class="cant-seleccionada"><input type="number" min="1" value=${item.cantidad} class="input-elem"></td>   
                <td><button class="delete-btn">Borrar</button></td> ` ;    //ver de arreglar que funcione el btn borrado
                selecHTML.innerHTML =contenido;
                $tablaseleccion.append(selecHTML);             
               selecHTML.querySelector('.delete-btn').addEventListener('click', borraralgocarrito);
                
              });
    carritoTotal ();
        
    cargarLS ();

    }
//cargarseleccion();

//Suma el total del Carrito de Compras
function carritoTotal (){
  let total =0;
  const $itemCargaTotal=document.querySelector('.Item-Total');
  //console.log($itemCargaTotal);
  tratamiento.forEach((item) => {
    const precio= Number(item.precio.replace ("$", " "));
    total =total + (precio *item.cantidad);
  });
  $itemCargaTotal.innerHTML=`Total $${total}`;
}

//Borrar algo del Carrito aca se podria poner una libreria para confirmar el borrado
function borraralgocarrito (e){
  swal("Cuidado, esta borrando un item");
  const $botonborrado=e.target;
  //console.log($botonborrado);
   const tr=$botonborrado.closest('.itemCarrito');  //obtiene el contenedor de la clase mas cercana a lo que pongamos en ()
   console.log(tr);
   const $identid=tr.querySelector('.cod-titulo').textContent; 
   const $cantidadid =tr.querySelector('.cant-seleccionada');

   console.dir($cantidadid);
    for (let i=0; i< tratamiento.length; i++){      
      tratamiento[i].id==$identid ? tratamiento.splice(i, 1) : console.log("No se borro nada");
        
        }
     tr.remove();               //falta terminar de arreglar ya que borra todo 
  // console.log($botonborrado);
   carritoTotal ();
}

//Funcion para la compra de los tratamientos , tambien se agrego una libreria
function comprartratamientos (){
  swal("A Seleccionado Comprar!", "...Sera direccionado a un sitio seguro!");
}

//LocalStorage

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
$buttonlogin.onclick= login;
function login(evento){
  console.log("funciona");
  location.href="./formulario.html";
}