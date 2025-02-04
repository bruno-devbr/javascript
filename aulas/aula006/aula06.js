//comentario em linha

/* 
comentario em bloco
*/

// criar variaveis use let ou var
let produto = 'Arroz';
let quant = 2;
let PrecoUnitario = 4.99;
let PrecoTotal = quant * PrecoUnitario;
document.write(`Preço Total: R$${PrecoTotal} <br>`);
console.log(new Intl.NumberFormat('pt-BR').format(PrecoTotal));

document.write(`Preço Total: ${PrecoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <hr>`)

// criar constante
const nome = 'Bruno Queiroz';
const peso = 45.5;
const altura = 1.50;
const imc = peso / (altura * altura);

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br> <br>`);

let nota1 = 7.5;
let nota2 = 5.5;
let nota3 = 4.0;
let NotaFinal = nota1 + nota2 + nota3
document.write(`Nota Final: ${NotaFinal} <br> <br>`)

let compra = 1999.99;
let desconto = 145.42;
let PrecoFinal = compra - desconto;
document.write(`Preço Final ${PrecoFinal.toLocaleString('pt-BR', { style : 'currency', currency: 'BRL' })} <br>`);
document.write(`Preço Final ${PrecoFinal} <br>`);