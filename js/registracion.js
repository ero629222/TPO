
function validateForm() {
    // Aquí puedes agregar tus validaciones, por ejemplo:
    // Verificar que las contraseñas coincidan, validar el formato del correo electrónico, etc.
    // Si alguna validación falla, puedes mostrar un mensaje de error y retornar false para evitar que se envíe el formulario
    // Obtener referencias a los campos

        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");
        var usuario = document.getElementById("usuario");
        var contrasena = document.getElementById("contrasena");
        var isValid = true;
      
        // Validar nombre
        if (nombre.value.trim() === "") {
          nombre.classList.add("error");
          isValid = false;
        } else {
          nombre.classList.remove("error");
        }
      
        // Validar apellido
        if (apellido.value.trim() === "") {
          apellido.classList.add("error");
          isValid = false;
        } else {
          apellido.classList.remove("error");
        }
      
        // Validar email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
          email.classList.add("error");
          isValid = false;
        } else {
          email.classList.remove("error");
        }
      
        // Validar usuario
        if (usuario.value.trim() === "") {
          usuario.classList.add("error");
          isValid = false;
        } else {
          usuario.classList.remove("error");
        }
    
        // Validar password
        if (password.value.trim() === "") {
            password.classList.add("error");
            isValid = false;
          } else {
            password.classList.remove("error");
          }
    
                
    return true; // Retornar true si el formulario es válido
}

function recoverPassword() {
    // Aquí puedes agregar la lógica para recuperar la contraseña, por ejemplo:
    // Enviar un correo electrónico al usuario con instrucciones para restablecer su contraseña
    alert("Se ha enviado un correo electrónico con instrucciones para recuperar la contraseña.");
}
