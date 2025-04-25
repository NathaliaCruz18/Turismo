document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre && email) {
        // Mostrar mensaje de agradecimiento
        alert(`¡Gracias por contactarnos, ${nombre}! Nos comunicaremos con usted.`);
        
        // Borrar los campos del formulario
        document.getElementById('formContacto').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
