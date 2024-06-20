const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
});
