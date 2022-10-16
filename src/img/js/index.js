const abas = document.querySelectorAll(".window");

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
        
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".window.selecionado");
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector("informacao.selecionado");

    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    idDoElementoDeInformacoesDaAba.classList.add("selecionado")
}