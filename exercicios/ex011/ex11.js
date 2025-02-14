// Objetivo: Criar um quiz com 10 perguntas, com som e animações
const questoesArticle = document.getElementsByClassName('questoes')
let numQuestao = document.getElementById('numQuestao')
let pergunta = document.getElementById('pergunta')
let instrucoes = document.getElementById('instrucoes')
let result = document.getElementById('result')
const back = document.getElementsByClassName('back')
let resposta = [] 

const respostaCorreta = document.getElementsByClassName('resposta-correta')
const suaResposta = document.getElementsByClassName('sua-resposta')

const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')

let progresso = document.getElementById('progresso')
let numero = document.getElementById('numero')
let total = document.getElementById('total')
let pontos = 0

const somAcerto = document.getElementById('somAcerto') 
const somErro = document.getElementById('somErro')
const somAplausos = document.getElementById('somAplausos')

// questões
const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Oeste",
    correta      : "c",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a capital do Brasil?",
    alternativaA : "Rio de Janeiro",
    alternativaB : "Brasília",
    alternativaC : "Salvador",
    alternativaD : "Lisboa",
    correta      : "b",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Sul",
    correta      : "d",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A linha do Equador divide a Terra em...",
    alternativaA : "Leste e Oeste",
    alternativaB : "Norte e Sul",
    alternativaC : "Verão e Inverno",
    alternativaD : "Solstícios e Eclipses",
    correta      : "b",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Lado que o sol nasce",
    alternativaB : "Abaixo do Equador",
    alternativaC : "Lado que o sol se põe",
    alternativaD : "Acima do Equador",
    correta      : "a",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o clima predominante do Brasil?",
    alternativaA : "Polar",
    alternativaB : "Tropical",
    alternativaC : "Desértico",
    alternativaD : "Temperado do Norte",
    correta      : "b",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Lado onde o sol se põe",
    alternativaB : "Lado onde o sol nasce",
    alternativaC : "Abaixo do Equador",
    alternativaD : "Acima do Equador",
    correta      : "a",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "Oceania",
    alternativaD : "América",
    correta      : "d",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é a única capital do Brasil cortada pela linha do Equador?",
    alternativaA : "Belém",
    alternativaB : "São Luís",
    alternativaC : "Macapá",
    alternativaD : "Boa Vista",
    correta      : "c",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Considerando a extensão territorial o Brasil é o ...",
    alternativaA : "3º maior",
    alternativaB : "2º maior",
    alternativaC : "4º maior",
    alternativaD : "5º maior",
    correta      : "d",
}

// array de questões
const questoes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

// variável para controlar o índice da questão
let index = 0

// numero de questão
function nQuestao() {
    for (let index = 0; index < questoes.length; index++) {
        numQuestao = questoes[index].numQuestao
        pergunta = questoes[index].pergunta
        alternativaA = questoes[index].alternativaA
        alternativaB = questoes[index].alternativaB
        alternativaC = questoes[index].alternativaC
        correta = questoes[index].correta
        return index
    }
}

// função para exibir as questoes
function exibir() {
    numQuestao.textContent = questoes[index].numQuestao
    pergunta.textContent = questoes[index].pergunta
    a.textContent = questoes[index].alternativaA
    b.textContent = questoes[index].alternativaB
    c.textContent = questoes[index].alternativaC
    d.textContent = questoes[index].alternativaD
    numero.textContent = questoes[index].numQuestao
    total.textContent = 10 
}

// exibe a questão atual
exibir()

// passa para a próxima questão
function proximaQuestao() {
    if (index < questoes.length) {
        index++
        exibir()
    }
}

// armazena a resposta do usuario
function userResposta(clicado) {
    resposta[index] = clicado
    respondido()
}

// sistema de acertos e erros
function respondido() {
    if (resposta[index] == questoes[index].correta) {
        questoesArticle[0].classList.add('acertou')
        somAcerto.play()
        pontos += 10
        setTimeout(function() {
            questoesArticle[0].classList.remove('acertou')
        }, 150);
    } else {
        questoesArticle[0].classList.add('errou')
        somErro.play()
        setTimeout(function() {
            questoesArticle[0].classList.remove('errou')
        }, 150);
    }
    instrucoes.textContent = "Pontos " + pontos
}

// adiciona eventos de clicks nas alternativas
a.addEventListener('click', function () {
    userResposta('a')
    if (index < questoes.length - 1) {
        proximaQuestao()
    } else {
        resultado()
    }
})

b.addEventListener('click', function () {
    userResposta('b')
    if (index < questoes.length - 1) {
        proximaQuestao()
    } else {
        resultado()
    }
})

c.addEventListener('click', function () {
    userResposta('c')
    if (index < questoes.length - 1) {
        proximaQuestao()
    } else {
        resultado()
    }
})

d.addEventListener('click', function () {
    userResposta('d')
    if (index < questoes.length - 1) {
        proximaQuestao()
    } else {
        resultado()
    }
})

function resultado() {
    somAplausos.play()

    const respostaCorreta_array = [
        questoes[0].correta,
        questoes[1].correta,
        questoes[2].correta,
        questoes[3].correta,
        questoes[4].correta,
        questoes[5].correta,
        questoes[6].correta,
        questoes[7].correta,
        questoes[8].correta,
        questoes[9].correta,
    ]

    const suaResposta_array =[
        resposta[0],
        resposta[1],
        resposta[2],
        resposta[3],
        resposta[4],
        resposta[5],
        resposta[6],
        resposta[7],
        resposta[8],
        resposta[9],
    ]

    questoesArticle[0].style.display = 'none'
    result.style.display = 'block'
    back[0].style.display = 'block'

    back[0].addEventListener('click', function() {
        location.reload()
    })

    function mostraresultado() {
        const titulo = document.getElementById('title')
        titulo.textContent = 'Resultado Final'
        instrucoes.textContent = "Pontuação Final " + pontos

        for (let i = 0; i < 10; i++) {
            if (respostaCorreta[i]) {
                respostaCorreta[i].textContent = "Respota correta: " + respostaCorreta_array[i]
            }
            if (suaResposta[i]) {
                suaResposta[i].textContent = "Sua resposta: " + suaResposta_array[i]
            }
        }
    }
    mostraresultado()
}