// Objetivo: Criar um quiz com 5 perguntas sobre pontos cardeais.
let questions = document.getElementById('questoes')
let nQuestao = document.getElementById('numQuestao')
let pergunta = document.getElementById('pergunta')

let numero = document.getElementById('numero')
let total = document.getElementById('total')

let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')

let mensagem = document.getElementById('aviso')

// questoes dentro de objetos
let q1 = { 
    numQuestao: 1,
    pergunta: 'Boreal é o mesmo que...',
    alternativaA: 'Sul',
    alternativaB: 'Leste',
    alternativaC: 'Norte',
    correta: 'Norte'
}

let q2 = {
    numQuestao: 2,
    pergunta: 'Austral é o mesmo que...',
    alternativaA: 'Oeste',
    alternativaB: 'Sul',
    alternativaC: 'Norte',
    correta: 'Sul'
}

let q3 = {
    numQuestao: 3,
    pergunta: 'Nascente é o mesmo que...',
    alternativaA: 'Sul',
    alternativaB: 'Leste',
    alternativaC: 'Oeste',
    correta: 'Leste'
}

let q4 = {
    numQuestao: 4,
    pergunta: 'Poente é o mesmo que...',
    alternativaA: 'Norte',
    alternativaB: 'Leste',
    alternativaC: 'Oeste',
    correta: 'Oeste'
}

let q5 = {
    numQuestao: 5,
    pergunta: 'Onde o sol nasce?',
    alternativaA: 'Norte',
    alternativaB: 'Leste',
    alternativaC: 'Oeste',
    correta: 'Leste'
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
pergunta.textContent = questoes[index].pergunta
a.textContent = questoes[index].alternativaA
b.textContent = questoes[index].alternativaB
c.textContent = questoes[index].alternativaC
nQuestao.textContent = questoes[index].numQuestao
numero.textContent = index + 1
total.textContent = questoes.length

// passa para a proxima questao
function proximaQuestao() {
    if (index < questoes.length) {
        index++
        numQuestao()
    }
}

// adiciona um clique no botao e chama a proxima questao
a.addEventListener('click', proximaQuestao)
b.addEventListener('click', proximaQuestao)
c.addEventListener('click', proximaQuestao)