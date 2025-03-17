// Obtém os elementos HTML
const nomeInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = nomeInput.value.trim();

    // Verifica se o campo não está vazio
    if (nome) {
        
        amigos.push(nome);
        atualizarLista();
        nomeInput.value = '';
        
    } else {
        alert('Por favor, insira um nome!');
    }
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    
    listaAmigos.innerHTML = '';

    // Adiciona cada amigo como um item na lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione ao menos um amigo antes de sortear!');
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o sorteio na lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Amigo secreto sorteado: ${sorteado}`;
}
