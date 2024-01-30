function mostrarContrasena() {
    var contrasenaInput = document.getElementById("contrasena");
    var mostrarContrasenaBtn = document.getElementById("mostrarContrasenaBtn");

    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
        mostrarContrasenaBtn.textContent = "Ocultar";
    } else {
        contrasenaInput.type = "password";
        mostrarContrasenaBtn.textContent = "Mostrar";
    }
}

function validarCredenciales() {
        var correo = document.getElementById('correo').value;
        var contrasena = document.getElementById('contrasena').value;
        if ((correo === 'usuario@gmail.com' || correo === 'usuario') && contrasena === 'usuario') {
            alert('Validacion del usuario correcta');
            setTimeout(function() {
                window.location.href = '/Proyecto/Proyecto-EnergiaRenovable/HTML/cliente.html';
            }, 1000);
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
        
}

