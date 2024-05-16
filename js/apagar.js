function apagar(id){
    // Pegar os jogadores do localStorage
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    
    console.log('jogadores:',jogadores[0].id);
    console.log('jogadores id:',id);


    console.log(jogadores.filter(t => id == t.id))

    const jogadoresATT = jogadores.filter((t) => t.id !== id)
    console.log(jogadoresATT);
    
    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadoresATT))
    
    window.location.reload()

    
}