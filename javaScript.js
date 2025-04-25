document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre && email) {
        alert(`¡Gracias por contactarnos, ${nombre}! Nos comunicaremos con usted `);
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
