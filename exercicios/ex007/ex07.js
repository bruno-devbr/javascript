// declaração de variaveis
let numeroClass = document.getElementById('inputNumero')
let send = document.getElementById('btnChutar')
let soundBtn = document.getElementById('btnSom')
let menssage = document.getElementById('aviso')
let sound = document.getElementById('musicaDeFundo')
let number = 0

// gera um numero aleatorio assim que abrir a pagina
function gerarNumero() {
    let min = 1
    let max = 10
    return number = Math.floor(Math.random() * (max - min + 1)) + min    
}

window.onload = gerarNumero()
console.log(number)

// eventos relacionado a musica de fundo
soundBtn.addEventListener('click', function() {
    if (sound.paused) {
        sound.play()
    } else {
        sound.pause()
        sound.currentTime = 0
    }
})

function tocarMusicaInput() {
    if (sound.paused) {
        sound.play()
        numeroClass.removeEventListener('click', tocarMusicaInput)
    }
}

numeroClass.addEventListener('click', tocarMusicaInput)

// ativar ou desativar o butao
function bloquearBtn() {
    send.setAttribute('disable', 'disable')
    send.style.background = '#ccc'
    send.style.cursor = 'not-allowed'
}

function ativarBtn() {
    send.removeAttribute('disable')
    send.style.background = '#222'
    send.style.cursor = 'pointer'
}

// verifica se o valor inseriodo é mesmo que o gerado
function verificaAcerto() {
    let numero = parseInt(numeroClass.value, 10)
    
    if (numero < 1 || numero > 10) {
        aviso.textContent = 'Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.'
        aviso.classList.add('errou')
        return
    }

    if (numero == number) {
        aviso.classList.remove('errou')
        aviso.classList.add('acertou')
        aviso.textContent = 'Acertou, o número secreto era ' + number
        gerarNumero()
        console.log(number)
    } else if (numero > number) {
        aviso.classList.remove('acertou')
        aviso.classList.add('errou')
        aviso.textContent = 'Chute maior que o número secreto'
    } else if (numero < number) {
        aviso.classList.remove('acertou')
        aviso.classList.add('errou')
        aviso.textContent = 'Chute menor que o número secreto'
    }

    bloquearBtn()
    tempo()
}

send.addEventListener('click', verificaAcerto)

// aparece uma menssagem assim que tirar o foco do input
numeroClass.addEventListener('blur', function() {
    if (numeroClass.value == '') {
        aviso.textContent = 'Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.'
        aviso.classList.add('errou')
    } else {
        aviso.textContent = ''
        aviso.classList.remove('errou')
    }
    
    bloquearBtn()
    tempo()
})

// limita o tempo da mensagem
function tempo() {
    setTimeout(function() {
        numeroClass.value = ''
        aviso.textContent = ''
        aviso.classList.remove('errou')
        aviso.classList.remove('acertou')
        ativarBtn()
    }, 3000)
}