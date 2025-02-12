// area de declaração de variáveis
let inputValor = document.getElementById('valorEmReal')
let radioSelect = document.getElementsByName('moedaEstrangeira')
let moeda = ''
let converter = document.getElementById('btnConverter')
let clear = document.getElementById('btnLimpar')
let menssage = document.getElementById('aviso')

let valorDolar = 5.81
let valorEuro = 5.98
let valorLibra = 7.19
let valorBitcoin = 555749.75
let valor = 0

// converter o valor digitado
function moedaConvertida() {
    radioCheck();
    let valorEmNumero = parseFloat(inputValor.value);
    let valorConvertido = 0;

    switch (moeda) {
        case 'Dólar':
            valorConvertido = (valorEmNumero / valorDolar).toFixed(2);
            break;
        case 'Euro':
            valorConvertido = (valorEmNumero / valorEuro).toFixed(2);
            break;
        case 'Libra':
            valorConvertido = (valorEmNumero / valorLibra).toFixed(2);
            break;
        case 'Bitcoins':
            valorConvertido = (valorEmNumero / valorBitcoin).toFixed(8);
            break;
        default:
            menssage.textContent = 'Selecione uma moeda para converter';
            return '';
    }

    return valorConvertido;
}


// eventos de ativação/desativação do botão
function bloquearBtn() {
    if (inputValor.value == 0 || inputValor.value == '' || inputValor.value == null) {
        converter.setAttribute('disabled', 'disabled')
        converter.style.background = '#ccc'
        converter.style.pointer = 'not-allowed'
    }
}

function ativarBtn() {
    if (inputValor.value > 0) {
        converter.removeAttribute('disabled')
        converter.style.background = '#ffc107'
        converter.style.cursor = 'pointer'
    }
}

// verificar qual foi o radio selecionado
function radioCheck() {
    for (let index = 0; index < radioSelect.length; index++) {
        if (radioSelect[index].checked) {
            moeda = radioSelect[index].value
            return moeda
            break
        }
    }
}

// mensagem de recebimento
function mensagemRecebida() {
    menssage.textContent = "o valor " + (inputValor.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + inputValor.value + " é " + moedaConvertida()
}

// eventos relacionados ao input
inputValor.addEventListener('click', function() {
    radioCheck()
    ativarBtn()
})
inputValor.addEventListener('change', ativarBtn)

// eventos relacionados ao botão de conversão
converter.addEventListener('click', function() {
    radioCheck()
    mensagemRecebida()
})

// eventos relacionados ao botão de limpar
clear.addEventListener('click', function() {
    inputValor.focus()
    inputValor.value = ''
    menssage.textContent = ''
})