function validarCredenciales() {
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('contrasena').value;
    if (correo === 'usuario'&& contrasena === 'usuario') {
        window.location = 'cliente.html';
        
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }    
}