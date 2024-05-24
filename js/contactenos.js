function validateForm() {
  // Obtener referencias a los campos
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var email = document.getElementById("email");
  var descripcion = document.getElementById("descripcion");
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

  // Validar descripción
  if (descripcion.value.trim() === "") {
    descripcion.classList.add("error");
    isValid = false;
  } else {
    descripcion.classList.remove("error");
  }

  // Devolver true si el formulario es válido, de lo contrario, false
  return isValid;
}