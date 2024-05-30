  
function openPage(pageName, elmnt) 
{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        if (pageName === 'page6') 
        {
            fetch('HTML/contactenos.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('page6').innerHTML = data;
                    document.getElementById('page6').style.display = "block";
                    elmnt.classList.add("active");
                });
        }
        else if (pageName != 'page6')
        {
        document.getElementById(pageName).style.display = "block";
        elmnt.classList.add("active");
        }
        if (pageName === 'page5') 
        {
            fetch('HTML/registracion.html')
                .then(response => response.text())
                .then(data => 
                {
                    document.getElementById('page5').innerHTML = data;
                    document.getElementById('page5').style.display = "block";
                    elmnt.classList.add("active");
                    
                    // Espera a que el contenido del formulario se cargue en el DOM
                    document.addEventListener("DOMContentLoaded", function() {
                        // Agrega el evento de envío de formulario después de que se haya cargado el contenido del formulario
                        document.getElementById('registrationForm').addEventListener('submit', saveUser);
                    });
                });
        }
        else if (pageName != 'page5')
        {
        document.getElementById(pageName).style.display = "block";
        elmnt.classList.add("active");
        }
}

//Este ESCRIPT toma los datos enviados desde el formulario registracion.html y los envia al localstorage
//en JSON y redirige a la pagina HTML\registrados.html que pasa del JSON a una tabla con datos de usuarios
function saveUser(event) 
{
    event.preventDefault(); // Previene el envío del formulario
    console.log('Formulario enviado');

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const mail = document.getElementById('mail').value;
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log({ nombre, apellido, mail, usuario, contrasena });

    const user = { nombre, apellido, mail, usuario, contrasena };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuarios antes:', users);

    users.push(user);
    console.log('Usuarios después:', users);

    localStorage.setItem('users', JSON.stringify(users)); // Convierte el array de usuarios en una cadena JSON y la almacena

    alert('Usuario registrado exitosamente');
    window.location.href = 'HTML/registrados.html';
}

function recoverPassword() {
    alert("Se ha enviado un correo electrónico con instrucciones para recuperar la contraseña.");
}

