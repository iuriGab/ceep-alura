const BotaoConclui = ()=> {
    const botaoConclui = document.createElement("button")
        
    botaoConclui.classList.add("check-button")
    botaoConclui.innerText = "concluir"

    botaoConclui.addEventListener("click", tarefaCompleta)

    return botaoConclui    
}

const tarefaCompleta = (evento)=> {
    const botaoConclui = evento.target
    const concluirTarefa = botaoConclui.parentElement
    concluirTarefa.classList.toggle("done")
}

export default BotaoConclui