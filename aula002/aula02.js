/*
arquivo js externo
*/

document.write('Olá, Mundo!');
console.log('Outro Olá, Mundo!');
// alert('Olá, MUndo!');

let mensagem = "Minha mensagem";
let mensagem2 = "Outra mensagem";
let MeuPeso = 83.5
let MinhaAltura = 1.75
let MinhaIdade = 40
let ehDoador = false
let teste = null

/* CRIAR CONSTANTES e atribuir valor */
const PI = 3.1415
const TAXA = 0.5

teste = "Algum conteudo"

/* ESCREVER O CONTEUDO DE VARIAVEIS E CONSTANTES */
document.write("<p> mensagem: " + mensagem + "</p>");

document.write(`mensagem2: ${mensagem2}`);

document.write("<p> Meu peso: " + MeuPeso + " Kg </p>");

document.write(`Minha altura: ${MinhaAltura}m`);

document.write("<p> Minha idade: " + MinhaIdade + " anos </p>");

document.write(`Doador? ${ehDoador}`);

document.write("<p> Teste: " + teste + "</p>");

document.write("<p> PI: " + PI + "</p>")

document.write("<p> TAXA: " + TAXA + "</p>")