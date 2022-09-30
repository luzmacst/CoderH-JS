//Formulario y comprobacion de Clientes
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {
      duration: 300,
      indicators: true,
      
    });
    document.addEventListener('DOMContentLoaded', function() {
      let elems = document.querySelectorAll('select');
      let instances = M.FormSelect.init(elems, options);
    });
   // M.AutoInit();
  
});

// Desarrollo del codigo 
let newUsuario ={};
let newUsuarioJSON=[];

//tomo datos de mi BD
fetch('./data.json')
.then(response => response.json())
.then(data => putdata(data));
  

function putdata(data){
    const veodatos= data;
   
    veodatos.forEach(element => {
       let usuariosJSON=element.usuario;
       let passwordJSON=element.password;
       newUsuarioJSON.push(new Usuarios (usuariosJSON,passwordJSON));
         }); 
       // console.log(newUsuarioJSON);   
 
 }


//Identificador de cliente y bienvenida
class Usuarios{
    constructor(ingresousuario,password){
        this.ingresousuario= ingresousuario;
        this.password= password;
        
    }
  }

//Selecciono el formulario para obtener los datos del DOM
const form = document.querySelector("#formulario");
const ingresousuario =[];


//Identifico los datos que se ingresan

const enviarFormulario = (event) => {
    ingresousuario.innerHTML= "";
    event.preventDefault();
    let usuarioingr = event.target.usuario.value; 
    console.log(usuarioingr);
    let passingr =event.target.password.value;
    console.log(passingr);
    // valido que la contraseña sea mayor a 4 caracteres 
    passingr.length < 4 ? alert  ("Ingrese contraseña de mas de 4 caracteres") : null;
    const busco = newUsuarioJSON.find( dato => dato.ingresousuario ==usuarioingr);
    //console.log(busco); 
    if (busco != undefined){
      const busco2 = newUsuarioJSON.find( dato2 => dato2.password ==passingr);
      if( busco2 != undefined){
          direccionar();
        } else alert("Credenciales incorrectas, intente nuevamente");
   
      } 
};

// detecto el clic en el formulario y llamo a la funcion para evaluar los datos del DOM
form.addEventListener("submit",enviarFormulario);

//Si el usuario esta en la BD se direcciona a la web ppal
function direccionar(){
  location.href="./index3.html";
}



 