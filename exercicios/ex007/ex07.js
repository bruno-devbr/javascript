let inputNumero = document.getElementById('inputNumero')
let btnChutar = document.getElementById('btnChutar')
let aviso = document.getElementById('aviso')

let musicaDeFundo = document.getElementById('musicaDeFundo')
let btnSom = document.getElementById('musicaDeFundo')

let musica = document.getElementById('musicaDeFundo')

function gerarNumeroSecreto(min, max) {
    Math.ceil(min)
    Math.floor(max)
    let number = Math.floor(Math.random() * max - min +1) + min
    return number
}

function tocarMusicaDeFundo() {
    musicaDeFundo.play()
}

function desativarBtnChutar() {
    btnChutar.setAttribute('disable', 'disable')
    btnChutar.style.cursor = 'not-allowed'
    btnChutar.style.background = '#ccc'
}

function ativarBtnChutar() {
    btnChutar.removeAttribute('disable')
    btnChutar.style.background = '#222'
    btnChutar.style.cursor = 'pointer'
}

inputNumero.addEventListener('blur', function() {
    if (inputNumero.value == '') {
    aviso.setAttribute("class", "errou")
    aviso.textContent = 'Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.'
    }
})

btnChutar.addEventListener('click', function() {
    if (inputNumero.value == gerarNumeroSecreto(1, 10)) {
        aviso.setAttribute("class", "acertou")
        aviso.textContent = 'Acertou, o número secreto era'
    } else if (inputNumero.value < gerarNumeroSecreto(1, 10)) {
        aviso.setAttribute("class", "errou")
        aviso.textContent = 'Chute menor que o número secreto'
    } else if (inputNumero.value > gerarNumeroSecreto(1, 10)) {
        aviso.setAttribute("class", "errou")
        aviso.textContent = 'Chute maior que o número secreto'
    }
})

function ativarDesativarMusica() {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}