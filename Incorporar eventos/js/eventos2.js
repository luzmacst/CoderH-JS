//eventos js
//Identificador de cliente y bienvenida

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
//Solicito el ingreso del cliente 
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
  //Ver el registro de clientes 
  console.log(ingresousuario);
  
//Link a tienda
let $button = document.getElementById("btn2");
$button.onclick= iratienda;
function iratienda(evento){
  console.log("funciona");
  location.href="./tienda.html";
}

