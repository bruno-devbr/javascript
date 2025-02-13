// Objetivo: Criar um quiz com 5 perguntas sobre pontos cardeais.
let questions = document.getElementById('questoes')
let nQuestao = document.getElementById('numQuestao')
let pergunta = document.getElementById('pergunta')

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