/* Arquivo JS Aula 05 objetos  */

// CRIAR OBJETO
const pessoa = {
    nome   : 'Bruno',
    idade  : 16,
    peso   : 45.5,
    altura : 1.45,
    doador : false
};

let produtos = {
    descricao : undefined,
    preco : undefined
};

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
};

// Como acessar  uma propriedade usando .
/* 
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
*/

// Como acessar  uma propriedade usando []
/* 
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
*/

// OPERAÇÃO IMC = peso / (altura * altura)
const imc = pessoa.peso / (pessoa.altura * pessoa.altura);

// .toFixed(x)
// limita o numero de casas decimais
console.log("imc " + imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Bruno Queiroz";
produtos.descricao = ['Arroz'];
produtos.preco = [4.99]

// Usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo'];
produtos.preco = [...produtos.preco, 9.99, 4.79]

// Usando spreed operator em obejtos const
carros.marca = [...carros.marca, 'WV'];
carros.marca = [...carros.modelo, 'Fusca'];
carros.ano = [...carros.ano, '1979'];