console.log("entrando al login");

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log(username);

    // Credenciales para el mesero
    if (username === 'mesero' && password === '1234') {
        window.location.href = 'mesero.html';
    }
    // Credenciales para la cocina
    else if (username === 'cocina' && password === '1234') {
        window.location.href = 'cocina.html';
    } else {
        alert('Credenciales incorrectas. Por favor, inténtelo nuevamente.');
    }
});
