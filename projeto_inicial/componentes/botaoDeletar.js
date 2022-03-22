const BotaoDeleta = ()=> {
    const botaoDeleta = document.createElement("button")
    botaoDeleta.classList.add("delete-button")
    botaoDeleta.innerText = "Excluir"

    botaoDeleta.addEventListener("click", DeletarTarefa)
    return botaoDeleta    
}

const DeletarTarefa = (evento)=> {
    const botaoDeleta = evento.target
    const deletarTarefa = botaoDeleta.parentElement
    deletarTarefa.remove()
}

export default BotaoDeleta