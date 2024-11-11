//regras de nomes

const $idade = 16
let nome = "Bruno"
var Nome = "Leticia"
const NOME = "Gabi"
let nome2 = "Regina"
// Todas as variaveis funcionam

console.log(`${$idade} ${nome} ${Nome} ${NOME} ${nome2}`)

// escopo

var eu; // global

if (true) {
    let tetris = "jogo"; // bloco
}

function inicio() {
    const number = 1; // função
}