//eventos de Materialize
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 300,
    indicators: true,
  });
// M.AutoInit();

});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
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
    const $itemCod =$item.querySelector('.cod-titulo').textContent;
    const $itemName =$item.querySelector('.name-tratamiento').textContent;
    const $itemPrecio=$item.querySelector('.precio-tratamiento').textContent;
   // const $itemCantidad=$item.getElementsByClassName('.cant-seleccionada').value;
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
  console.log($inputelemento);
       for (let i=0; i< tratamiento.length; i++){
        if(tratamiento[i].id.trim() ===newtratamiento.id.trim()){     //intente cambiar por ternario aca pero es largo igual
          tratamiento[i].cantidad ++;
          const inputValue= $inputelemento[i];
          console.log(inputValue);
          inputValue.value++;                       //aveces no funciona bien esta opcion         
          carritoTotal ();                      // Va sumando el total seleccionado
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
     selecHTML.classList.add('.itemCarrito');
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

//Borrar algo del Carrito FALTA TERMINAR DE REALIZAR ESTA FUNCION
function borraralgocarrito (e){
  const $botonborrado=e.target;
  const tr=$botonborrado.closest('.itemCarrito');
  const $identid=tr.querySelector('#gral').textContent;  //da error aca ver donde toma bien
  for (let i=0; i< tratamiento.length; i++){      
    if(tratamiento[i].id.trim()==$identid.trim()){
      tratamiento.splice(i,1);
      console.log("hago borrado");
    }
  }
    tr.remove();
  console.log($botonborrado);
  carritoTotal ();
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