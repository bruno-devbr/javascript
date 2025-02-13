// Objetivo: Criar um quiz com 5 perguntas sobre pontos cardeais.
let questions = document.getElementById('questoes')
let nQuestao = document.getElementById('numQuestao')
let pergunta = document.getElementById('pergunta')
let instrucoes = document.getElementById('instrucoes')

let numero = document.getElementById('numero')
let total = document.getElementById('total')

let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')

let mensagem = document.getElementById('aviso')
let resposta = []
let pontos = 10
let points = 0

// questoes dentro de objetos
let q1 = { 
    numQuestao: 1,
    pergunta: 'Boreal é o mesmo que...',
    alternativaA: 'Sul',
    alternativaB: 'Leste',
    alternativaC: 'Norte',
    correta: 'c'
}

let q2 = {
    numQuestao: 2,
    pergunta: 'Austral é o mesmo que...',
    alternativaA: 'Oeste',
    alternativaB: 'Sul',
    alternativaC: 'Norte',
    correta: 'b'
}

let q3 = {
    numQuestao: 3,
    pergunta: 'Nascente é o mesmo que...',
    alternativaA: 'Sul',
    alternativaB: 'Leste',
    alternativaC: 'Oeste',
    correta: 'b'
}

let q4 = {
    numQuestao: 4,
    pergunta: 'Poente é o mesmo que...',
    alternativaA: 'Norte',
    alternativaB: 'Leste',
    alternativaC: 'Oeste',
    correta: 'c'
}

let q5 = {
    numQuestao: 5,
    pergunta: 'Onde o sol nasce?',
    alternativaA: 'Norte',
    alternativaB: 'Leste',
    alternativaC: 'Oeste',
    correta: 'b'
}

// armazena as questoes em um array
let questoes = [q1, q2, q3, q4, q5]

// variavel para controlar o index do array
let index = 0

// funcao para controlar o numero da questao
function numQuestao() {
    for (index; index < questoes.length; index++) {
        pergunta.textContent = questoes[index].pergunta
        a.textContent = questoes[index].alternativaA
        b.textContent = questoes[index].alternativaB
        c.textContent = questoes[index].alternativaC
        nQuestao.textContent = questoes[index].numQuestao
        return index
    }
}

// mostrar a questao atual
function exibir() {
    pergunta.textContent = questoes[index].pergunta
    a.textContent = questoes[index].alternativaA
    b.textContent = questoes[index].alternativaB
    c.textContent = questoes[index].alternativaC
    nQuestao.textContent = questoes[index].numQuestao
    numero.textContent = index + 1
    total.textContent = questoes.length
}

// passa para a proxima questao
function proximaQuestao(respostaEscolhida) {
    resposta[index] = respostaEscolhida;

    pontuacao();

    if (index < questoes.length - 1) {
        index++;
        exibir();
    } else {
        resultado();
    }
}


function pontuacao() {
    if (index > 0 && resposta[index - 1] === questoes[index - 1].correta) {
        pontos += 10;
    }
    instrucoes.textContent = `Pontuação: ${pontos}`;
    console.log(pontos);
}


// adiciona um clique no botao e chama a proxima questao
a.addEventListener('click', function () {
    if (index <= questoes.length) {
        proximaQuestao('a')
    }
})
b.addEventListener('click', function () {
    if (index <= questoes.length) {
        proximaQuestao('b')
    }
})
c.addEventListener('click', function () {
    if (index <= questoes.length) {
        proximaQuestao('c')
    }
})

// chama a funcao para exibir a questao
exibir()

// funcao para mostrar o resultado
function resultado() {
    let titulo = document.getElementById('titulo')

    let respostaCorreta = document.getElementById('correta')
    let one = document.getElementsByClassName('one')
    let two = document.getElementsByClassName('two')
    let three = document.getElementsByClassName('three')
    let four = document.getElementsByClassName('four') 
    let five = document.getElementsByClassName('five')

    let One = document.getElementById('one')
    let Two = document.getElementById('two')
    let Three = document.getElementById('three')
    let Four = document.getElementById('four')
    let Five = document.getElementById('five')

    titulo.textContent = 'Resultado'

    if (pontos == 50) {
        mensagem.textContent = 'Parabéns! Você acertou todas as questões.'
    } else if (pontos >= 30) {
        mensagem.textContent = 'Parabéns! Você acertou mais da metade das questões.'
    } else if (pontos >= 10) {
        mensagem.textContent = 'Você acertou algumas questões.'
    }

    one[0].textContent =  "sua resposta: " + resposta[0]
    two[0].textContent =  "sua resposta: " + resposta[1]
    three[0].textContent =  "sua resposta: " + resposta[2]
    four[0].textContent =  "sua resposta: " + resposta[3]
    five[0].textContent =  "sua resposta: " + resposta[4]

    One.textContent =  "resposta correta: " + questoes[0].correta   
    Two.textContent =  "resposta correta: " + questoes[1].correta
    Three.textContent =  "resposta correta: " + questoes[2].correta
    Four.textContent =  "resposta correta: " + questoes[3].correta
    Five.textContent =  "resposta correta: " + questoes[4].correta

    instrucoes.textContent = `Pontuação final: ${pontos}`
    document.querySelector('.questoes').style.display = 'none'
    document.querySelector('.ending').style.display = 'block'
}