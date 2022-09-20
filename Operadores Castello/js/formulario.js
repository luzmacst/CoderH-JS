//Usuarios/clientes js
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 300,
    indicators: true,
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
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
//Solicito el ingreso del cliente y es donde valido con operador ternario si la pass tiene al menos 8 caracteres?

  const form = document.querySelector("#formulario");
  const ingresousuario =[];
  
  const enviarFormulario = (event) => {
    document.body.append(" ");
    ingresousuario.innerHTML= "";
    event.preventDefault();
    let usuarioingr = event.target.usuario.value; 
    usuarioingr.length < 4 ? alert  ("Ingrese usuario de mas de 4 caracteres") : null;
    let passingr =event.target.password.value;
    // valido que la contraseña sea mayor a 4 caracteres 
    passingr.length < 4 ? alert  ("Ingrese contraseña de mas de 4 caracteres") : null;
    
    const newUsuario =new Usuarios (usuarioingr,passingr);
    ingresousuario.push(newUsuario);

    
    //cuando se registra el usuario , se da la bienvenida 
    // Se podria agregar la bienvenida de otra forma , con algun estilo Css
        document.body.append(' Bienvenida a nuestra Web , gracias por elegirnos '+ usuarioingr); 
    console.log(newUsuario);
    
     };
  form.addEventListener("submit",enviarFormulario);
  //Luego del registro se tendria que direccionar a la web principal o a la tienda , e importar el nombre del usuario 
  // ingresado

 
  
enviarFormulario();


//Link a tienda
let $button = document.getElementById("btn2");
$button.onclick= iratienda;
function iratienda(evento){
  console.log("funciona");
  location.href="./tienda.html";
}