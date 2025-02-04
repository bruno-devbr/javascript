/* Arquivo JS Aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite'];
var codigos = Array(10, 20, 30);
var test = Array(10);
test[0] = "oi";
test[9] = "Tudo bem?";
test[10] = "opa";
let meses = ['Jan', 'Fev', 'Mar', 'Abr'];
meses[0] = "Janeiro";

// ADICIONAR no final push = empurre
produtos.push('Açucar', 'Trigo');
codigos.push(40, 50, 60, 70);
meses.push('Mai', 'Jun', 'Ago', '07');

// REMOVER do final pop = estourar
produtos.pop();
codigos.pop();
meses.pop();
meses.pop();

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maça');

// REMOVER do inicio shift
produtos.shift();

// REMOVER de uma posição especifica splaice
// splice = imendar
// posição inicial, quantos remover
codigos.splice(1, 3);

// COPIAR array slice = fatiar porção
// posição inicial, quantos copiar
let meses1 = meses.slice();
let meses2 = meses.slice(0, 3);

//  VER TAMANHO DO ARRAY lenght comprimento
// meses.lenght;
// meses1.lenght;
// meses2.lenght;

//spreed operator ... copiar
let teste = [...produtos, 'Ovo', 'Pêra']