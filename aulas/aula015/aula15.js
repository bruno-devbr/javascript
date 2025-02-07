/* Aula 15 de JS Dado Virtula */

// SELECIONAR ELEMENROS
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {
    // adicionar animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // ocultar o butao sortear
    btnSortear.style.display = 'none'
    
    // usar setTimeout para executar as as açoes apos 1.17 segundos
    setTimeout(function() {
        // armazenar numero sorteado na variavel
        numeroSorteado = getRandomInt(1, 6)
        
        // escrever o numero sorteado no console
        console.log(numeroSorteado)

        // definir atributo src com base no numero
        imgDado.setAttribute('src', './dado/dado/'+numeroSorteado+'.png')
        //escrever no paragrafo numeroSorteado
        sorteado.textContent = numeroSorteado

        // exibir o butao sortear
        btnSortear.style.display = 'inline-block'

        imgDado.classList.remove('animar')
        imgDado.classList.remove('aparecer')
        
    }, 1750)
})

// FUNCAO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
    Math.ceil(min)
    Math.floor(max)
    return Math.floor(Math.random() * max - min + 1) + min
}