let numeroClass = document.getElementById('inputNumero')
let sendClass = document.getElementById('btnChutar')
let soundBtn = document.getElementById('btnSom')
let sound = document.getElementById('musicaDeFundo')
let menssage = document.getElementById('aviso')

function gerarNumeroSecreto() {
    let min = 1
    let max = 10
    number = Math.floor(Math.random() * max - min +1) + min
}

window.onload = gerarNumeroSecreto()

soundBtn.addEventListener('click', function() {
    if (!sound.paused) {
        sound.pause()
        sound.currentTime = 0
    } else { 
        sound.play()
    }
})

numeroClass.addEventListener('click', tocarAudio)
numeroClass.addEventListener('blur', bloquearBtn)

function tocarAudio() {
    if (sound.paused) {
        sound.play()
        numeroClass.removeEventListener('click', tocarAudio)
    }
}

sendClass.addEventListener('click', function() {
    verificarNumero()
    setTimeout(function() {
        aviso.textContent = ''
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        numeroClass.value = ''
    }, 3000)
    if (numeroClass.value == number) {
        gerarNumeroSecreto()
    }
})

function verificarNumero() {
    const valor = Number(numeroClass.value);

    // Verifica se o valor é válido (entre 1 e 10)
    if (isNaN(valor) || valor < 1 || valor > 10) {
        bloquearBtn();
        return;
    }

    // Verifica o número secreto
    if (valor == number) {
        aviso.classList = 'acertou';
        aviso.textContent = 'Acertou! O número secreto era ' + number;
    } else if (valor > number) {
        aviso.classList = 'errou';
        aviso.textContent = 'Chute maior que o número secreto';
    } else if (valor < number) {
        aviso.classList = 'errou';
        aviso.textContent = 'Chute menor que o número secreto';
    }
}

function bloquearBtn() {
    sendClass.disabled = true; // Desabilita o botão
    sendClass.style.background = '#ccc';
    sendClass.style.cursor = 'not-allowed';
    aviso.classList.add('errou');
    aviso.textContent = 'Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10';
    setTimeout(ativarBtn, 3000); // Ativa o botão novamente após 3 segundos
}

function ativarBtn() {
    aviso.textContent = '';
    aviso.classList.remove('acertou');
    aviso.classList.remove('errou');
    numeroClass.value = '';
    sendClass.disabled = false; // Habilita o botão novamente
    sendClass.style.background = '#222';
    sendClass.style.cursor = 'pointer';
}