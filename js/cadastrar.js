document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    // Pegar os valores dos inputs
    const nome_jogador = document.querySelector("#nome").value
    const time_jogador = document.querySelector('#time').value
    const gols_jogador = document.querySelector('#gols').value
    const assistencias_jogador = document.querySelector('#assistencias').value
    const foto_jogador = document.querySelector('#foto').value
    
    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: "id" + new Date().getTime(),
        nome: nome_jogador,
        time: time_jogador,
        gols: gols_jogador,
        assistencias: assistencias_jogador,
        foto: foto_jogador,
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"
    console.log('Informações Cadastradas:', jogador);

    salvar(jogador)
    // Redirecionar o usuário para a página inicial
})

function salvar(jogador) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    window.location.href = "index.html"
}