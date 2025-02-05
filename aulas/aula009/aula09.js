/* Aula 09 funções ou metodos no JS */

let titulo = document.querySelector('h1');
titulo.textContent = 'Funções no JS'
let box = document.querySelector('.box');

/* funções sem parametros e sem retorno (procedure) */
function olaMundo() {
    document.write('Olá mundo sem retorno <br>');
}

/* funções sem parametros com retorno */
function olaMundo2() {
    return 'Olá mundo com retorno <br>';
}

// CHAMAR A FUNÇÃO = executar ela 
olaMundo();
document.write(olaMundo2());

let x = 2
let y = 1
let mensagem = "Só sei que nada sei"

/* Funções com parametros sem retorno (procedure) */
function somar(a, b) {
    document.write((a + b) + "<br>");
}

/* Funções com parametrso e retorno (function) */
function somar2(c, d) {
    return (c + d);
}

/* chamar função e executar ela */
somar(x, y);
somar(10, 5);

document.write(`<p> ${somar2(x, y)} </p>`);
document.write(`<p> ${somar2(5, 2)} </p>`);

/* função anonima = nao tem nome pode ou nao ter parametros pode ou na ter retorno */
titulo.addEventListener('click', function() {
    console.log('Clicou no titulo')
});
titulo.style.cursor = "pointer";

/* Arrow Functions ES6 2015 em diante */
const olaMundoArrow = () => document.write('Olá mundo!!!!!!!');

// nao precisa usar a palavra function
// nao precisa usar a palavra return
// nao se usa nome na função
// nao precisa colocar { } se for so uma instrução
const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>';

olaMundoArrow();
document.write(olaMundo2Arrow());