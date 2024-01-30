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



