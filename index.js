var setaDireita = document.getElementById("seta-direita")
var Leonardo = document.getElementById("leonardo")
var Samantha = document.getElementById("samantha")
var Bruna = document.getElementById("bruna")
var setaEsquerda = document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    Bruna.style = "display:flex"
    Samantha.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}


