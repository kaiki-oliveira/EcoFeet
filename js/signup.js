// Função para cadastrar um novo usuário
function cadastrarUsuario(username, email, password) {
    // Verificar se o usuário já existe no localStorage
    const password2 = document.getElementById("password2").value;

    if(password2 !== password){
        alert('As senhas não conhecidem!')
        return;
    }
    if (localStorage.getItem(username)) {
        alert('Usuário já cadastrado!');
    } else {
        // Armazenar os dados do usuário no localStorage
        localStorage.setItem(username, JSON.stringify({ email: email, password: password }));
        alert('Usuário cadastrado com sucesso!');
    }
}

// Função para lidar com o envio do formulário
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que o formulário seja enviado

    // Obter os valores do formulário
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('password2').value;

    // Cadastrar o usuário
    cadastrarUsuario(username, email, password);

    // Limpar os campos do formulário
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password2').value = '';
});