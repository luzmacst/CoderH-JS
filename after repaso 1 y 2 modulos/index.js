class Usuario {
    constructor(nombre, password, email){
        this.nombre = nombre;
        this.password = password;
        this.email = email;
        
    }
}
    
const altausuario =[]; 
//for ( let i =0; i <3 ; i++){
    let nombreingr = prompt("Ingresar Usuario");
    let passwordingr =prompt ("Ingresar password");
    let emailingr = prompt ("Ingresar email");
    let nuevousuario = new Usuario(nombreingr, passwordingr,emailingr); 
    // const Usuario1 = new Usuario(nombreingr,passwordingr,emailingr);
    // altausuario[i]= Usuario1;
    
    altausuario.push(nuevousuario); 
    
    console.log (Usuario); 

//}



// const Usuario1 = new Usuario("almendra","123@4","almendra@gmail.com");
// console.log (Usuario1); 