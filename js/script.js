// Lista de jogadores inicial
let players = [
    { name: "Flávio", score: 10 },
    { name: "Guilherme", score: 90 },
    { name: "Silas Nascimento Sousa Santos", score: 80 },
    { name: "Kaiki", score: 97 },
    { name: "Guilherme.A", score: 87 },
    { name: "Walesca", score: 89 },
    { name: "Rodrigo", score: 9 }
];

// Função para renderizar a lista de jogadores
function renderPlayers() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = ""; // Limpa a lista atual

    players.forEach(player => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="player">${player.name}</span> <span class="score">${player.score}%</span>`;
        playerList.appendChild(li);
    });
}

// Função para classificar os jogadores por pontuação
function sortRanking() {
    players.sort((a, b) => b.score - a.score); // Ordena em ordem decrescente
    renderPlayers(); // Re-renderiza a lista
}

// Função para adicionar um novo jogador
function addPlayer() {
    const newPlayerName = document.getElementById("newPlayer").value;
    const newPlayerScore = parseInt(document.getElementById("newScore").value);

    if (newPlayerName && !isNaN(newPlayerScore)) {
        players.push({ name: newPlayerName, score: newPlayerScore });
        renderPlayers(); // Re-renderiza a lista com o novo jogador
    } else {
        alert("Por favor, insira um nome de jogador e pontuação válidos.");
    }
}
function removePlayer(){
    const removePlayerName = document.getElementById("removePlayer").value;

    if (removePlayerName){}
}


// Renderiza a lista de jogadores inicialmente
renderPlayers();
