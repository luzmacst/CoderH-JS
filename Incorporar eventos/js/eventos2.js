

class Usuarios{
    constructor(ingresousuario, apellidousuario,password,direccion,email,telefono){
        this.ingresousuario= ingresousuario;
       // this.apellidousuario=apellidousuario;
         this.password= password;
        // this.direccion=direccion;
        // this.email=email;
        // this.telefono=telefono;
    }
  }
//Solicito el ingreso del usuario 
  const form = document.querySelector("#formulario");
  const ingresousuario =[];
  
  const enviarFormulario = (event) => {
    event.preventDefault();
    
    let usuarioingr = event.target.usuario.value; 
    let passingr =event.target.password.value;
    ingresousuario.push(new Usuarios({usuarioingr, passingr}));
    //cuando se registra el usuario , se da la bienvenida 
    document.body.append(' Bienvenido '+ usuarioingr); 
     };
  form.addEventListener("submit",enviarFormulario);
  
//Este boton no funciona bien, la idea es al presionar tendria que ir al link de la tienda
 function link(){
    location.href = "./tienda.html"; 
 }; 
let $boton = document.querySelectorAll(".btn2");
console.log($boton); 
 $boton.onmousedown = () => {console.log ("?")};
   $boton.onclick = () => {console.log(`se hace`)};
   $boton.addEventListener("click", link);

// let iratienda ="./tienda.html";
// $boton.addEventListener("url", iratienda );


  
//  