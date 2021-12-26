
let formulario= ()=>{
    let email=document.getElementById("email").value;
    let numero=document.getElementById("numero").value;

    if (email == "") {

        alert("Debe de ingresar su correo completo para iniciar el proceso")
        
    } else if(numero == "") {
        
        alert("Debe de ingresar su telefono")
        
    }else{
        console.log(email);
        console.log(numero);

      let button= document.getElementsByTagName("button")[0];
      
       console.log(button.dataset);
       
    }

}