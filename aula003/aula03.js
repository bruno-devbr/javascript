/* Arquivo JS aula 03 operadores e operações */
let n1 = 10; // number inteiro
let n2 = 2; // number inteiro
let n3 = "2"; // string de texto

document.write(`N1 ${n1} <br>`);
document.write(`N2 ${n2} <br>`);
document.write(`N3 ${n3} <br>`);

console.log(n1 + n2); // adição
console.log(n1 - n2); // subtração
console.log(n1 * n2); // multiplicação
console.log(n1 / n2); // divisão
console.log(n1 % n2); // restou ou modulo

console.log(n2 == n3); // igual a
console.log(n2 === n3); // identico a
console.log(n2 != n3); // diferente de | Não=
console.log(n2 !== n3); // nao é identico a | NãoIdentico

console.log(n1 > n2);  // maior que
console.log(n1 < n2); // menor que
console.log(n1 >= n2); //  maior OU igual que
console.log(n1 <= n2); // menor OU igual que

let a = true;
let b = false;

console.log(a && b); // E | AND
console.log(a || b); // OU | OR
console.log(!a); // NAO | NOT | oposto 
console.log(!b);