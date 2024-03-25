// Função para verificar as credenciais de login
function fazerLogin(username, password) {
    // Verificar se o usuário existe no localStorage
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData && userData.password === password) {
        alert('Login bem-sucedido!');
        // Redirecionar para a página de perfil ou outra página após o login
        window.location.href = 'perfil.html';
    } else {
        alert('Nome de usuário ou senha incorretos!');
    }
}

// Função para lidar com o envio do formulário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que o formulário seja enviado

    // Obter os valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fazer login
    fazerLogin(username, password);
});