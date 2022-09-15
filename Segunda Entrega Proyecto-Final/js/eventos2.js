//Usuarios/clientes js
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 300,
    indicators: true,
  });
  
 // M.AutoInit();

    });
//Identificador de cliente y bienvenida
class Usuarios{
    constructor(ingresousuario,password){
        this.ingresousuario= ingresousuario;
        this.password= password;
        
    }
  }
//Solicito el ingreso del cliente 
  const form = document.querySelector("#formulario");
  const ingresousuario =[];
  
  const enviarFormulario = (event) => {
    ingresousuario.innerHTML= "";
    event.preventDefault();
    let usuarioingr = event.target.usuario.value; 
    let passingr =event.target.password.value;
    const newUsuario =new Usuarios (usuarioingr,passingr);
    ingresousuario.push(newUsuario);
    
    //cuando se registra el usuario , se da la bienvenida 
    document.body.append(' Bienvenido '+ usuarioingr); 
    console.log(newUsuario);
    
     };
  form.addEventListener("submit",enviarFormulario);

  //Ver el registro de clientes 
  // ver de borrar como en tienda, el html para que no aparesca siempre el usuario pegado a otro
 
  




//enviarFormulario();



//Link a tienda
let $button = document.getElementById("btn2");
$button.onclick= iratienda;
function iratienda(evento){
  console.log("funciona");
  location.href="./tienda.html";
}