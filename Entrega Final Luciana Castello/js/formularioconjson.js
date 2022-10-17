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

  xfetch();


async function xfetch (){
  try {
    const response =await fetch ('./Json/data.json');
    const data =await response.json ();
   // console.log(data);
    putdata(data);
  } catch (error) {
    console.log(error);
  }
} 

function putdata(data){
    const veodatos= data;
   // console.log(veodatos);
   
    veodatos.forEach(element => {
       let usuariosJSON=element.usuario;
       let passwordJSON=element.password;
       newUsuarioJSON.push(new Usuarios (usuariosJSON,passwordJSON));
         }); 
       
 }


//Identificador de cliente y bienvenida
class Usuarios{
    constructor(ingresousuario,password){
        this.ingresousuario= ingresousuario;
        this.password= password;
    }
  }

//Selecciono el formulario para obtener los datos del DOM
const $form = document.querySelector("#formulario");
//console.log($form)

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
    passingr.length < 4 ? Swal.fire("Ingrese una contraseña de mas de 4 Caracteres",
      "Aceptar para continuar") : null;
    const busco = newUsuarioJSON.find( dato => dato.ingresousuario ===usuarioingr);
    console.log(busco); 
      if (busco ==undefined){
        console.log("lee aca");
        Swal.fire("Usuario incorrecto, intente nuevamente",
        "Aceptar para continuar") }
        else  if (busco != undefined){
      const busco2 = newUsuarioJSON.find( dato2 => dato2.password ==passingr);
          if( busco2 != undefined){
          direccionar(busco);
        } else Swal.fire("Contraseña incorrecta, intente nuevamente",
        "Aceptar para continuar");
   
      } ; 
}



if($form)
{
  $form.addEventListener("submit",enviarFormulario,false);
};


 //Si el usuario esta en la BD se direcciona a la web ppal
function direccionar(usuario){
   const ingresver = document.querySelector('h4');
  const ver = usuario.ingresousuario;
  console.log(ver);
  ingresver.textContent = `Que bueno que estas aca ${ver}!`;
   Swal.fire("Bienvenido , ¿Lista para hacerse un cariño?"); 
   setTimeout(()=> {
     location.href="./index3.html";
       //alert ("Bienvenido, esta siendo direccionado, haga click en Aceptar");
   }, 2000);
  }

