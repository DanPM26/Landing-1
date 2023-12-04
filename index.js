function enviar(e) {
    e.preventDefault(); 
    let name = document.getElementById("nombre").value;
    let lastname = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let envioDatos = document.getElementById("aviso");

    if (!name) {
        console.log(name);
        envioDatos.innerHTML = "Por favor, ingresa un nombre";
    } else if (!lastname) {
        console.log(lastname);
        envioDatos.innerHTML = "Por favor, ingresa un apellido";
    } else if (!email || !isValidEmail(email)) {
        console.log(email);
        envioDatos.innerHTML = "Por favor, ingresa un correo electrónico válido";
    } else {
       
        const datosUsuario = {
            "nombre": name,
            "apellido": lastname,
            "correo": email
        };
 
        envioDatos.innerHTML = "Gracias por contactarnos, nos comunicaremos contigo a la brevedad";
        
        console.log(datosUsuario);

        
    }
}


function isValidEmail(email) {
  
    return /\S+@\S+\.\S+/.test(email);
}
