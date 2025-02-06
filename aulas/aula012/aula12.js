/* Aula 13 de JS Estruturas de Repetição */

let carros = ['Fusca', 'Brasilia', 'Gurgel'];

/* FOR = para faça */
/* i = iterador, iteração ou index */
for (let i = 1; i <= 5; i++) {
    document.write(i + " ");
}

for (let i = 5; i >= 1; i--) {
    document.write(i + " ");
}

for (let i = 0; i < carros.length; i++) {
    document.write(`<li> ${carros[i]} </li>`);
}

/* FOREACH forEache = para cada */
let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia'];

frutas.forEach(function(i, frutas) {
    document.write(`${frutas} ${i} <br>`);
});

carros.forEach(function(carros) {
    document.write(`${carros} <br>`);
})

/* WHILE enquanto */

// criar variavel de contador fora do laço
let contador = 0;

while (contador < frutas.length) {
    console.log(frutas[contador]);
    contador++;
}
// aqui o contador esta com o valor 5
console.log(contador);

// DO WHILE = faça enquanto

// criar variavel de contador fora do laço
let iterador = 0;

do {
    console.log(carros[iterador]);
    iterador++;
} while (iterador < carros.length);

console.log(iterador);