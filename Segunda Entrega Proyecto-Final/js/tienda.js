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
// Eventos para la tabla del carrito
let tablaseleccion =document.querySelector("#seleccioncarrito tbody");
let tratamiento =[];
mostrarseleccion();
class Tratamiento {
    constructor (id,tratamiento,precio){
      this.id=id;
      this.tratamiento=tratamiento;
      this.precio=precio;
      }
    }

//Creo un array para guardar la seleccion del Cliente
let seleccionboton1=0;
let seleccionboton2=0;
let seleccionboton3=0;
let seleccion =0;
let addtratamiento=0;
let addprecio=0;

//Segun la seleccion del cliente se carga al array tratamiento
 function savetratamiento1 () {
    seleccionboton1 =document.getElementById("tablacarrito")
    seleccion = seleccionboton1.rows[1].cells[0].innerHTML;
    addtratamiento= seleccionboton1.rows[1].cells[1].innerHTML;
    addprecio =seleccionboton1.rows[1].cells[2].innerHTML;
    const newCarrito =new Tratamiento (seleccion,addtratamiento,addprecio);
    tratamiento.push(newCarrito);
    console.log (newCarrito);
    cargarLS ();
    }
    
 
  function savetratamiento2 () {
      seleccionboton2 =document.getElementById("tablacarrito")
      seleccion = seleccionboton2.rows[2].cells[0].innerHTML;
      addtratamiento= seleccionboton2.rows[2].cells[1].innerHTML;
      addprecio =seleccionboton2.rows[2].cells[2].innerHTML;
      const newCarrito =new Tratamiento (seleccion,addtratamiento,addprecio);
      tratamiento.push(newCarrito);
       console.log (newCarrito);
       cargarLS ();
  }

  function savetratamiento3 () {
        seleccionboton3 =document.getElementById("tablacarrito")
        seleccion = seleccionboton3.rows[3].cells[0].innerHTML;
        addtratamiento= seleccionboton3.rows[3].cells[1].innerHTML;
        addprecio =seleccionboton3.rows[3].cells[2].innerHTML;
        const newCarrito =new Tratamiento (seleccion,addtratamiento,addprecio);
        tratamiento.push(newCarrito);
        console.log (newCarrito);
        cargarLS ();
  }

// Se crea el Carrito con la seleccion y se muestra la seleccion

// //Boton cargar carrito
let $buttoncarrito = document.getElementsByName("action");
         
      
function mostrarseleccion (){
    tablaseleccion.innerHTML= "";
    tratamiento.forEach(selec => {
    const selecHTML = document.createElement(`tr`)
    selecHTML.innerHTML=`<th >${selec.id}</th>
               <td class="name-tratamiento">${selec.tratamiento}</td>
                <td class="precio-tratamiento">${selec.precio}</td>`; 
                tablaseleccion.appendChild(selecHTML);
              });
     }
      
//LocalStorage

// funcion para llamar a guardar en LS
function cargarLS (){
  const nuevoaddcarrito = JSON.stringify(tratamiento); 
  localStorage.setItem("Agregotratamiento", nuevoaddcarrito);
  const tratamlocalstorage =localStorage.getItem("Agregotratamiento");
  console.log (tratamlocalstorage);
  const nuevoTRATParseado =JSON.parse(tratamlocalstorage);
     
}
