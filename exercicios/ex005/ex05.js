// Declaração de variaveis e integração com os inputs
let nomeClass = document.querySelector('#nome');
let idadeClass = document.querySelector('#idade');
let pesoClass = document.querySelector('#peso');
let alturaClass = document.querySelector('#altura');

let send = document.querySelector('#btnEnviar');
let clear = document.querySelector('#btnLimpar');

let result = document.querySelector('#resultadoImc');


// ações dos butoes
send.addEventListener('click', function() {
    event.preventDefault(); // nao deixa sair da pagina

    // variaveis pros valores dos inputs
    let nome = nomeClass.value;
    let idade = idadeClass.value;
    let peso = pesoClass.value;
    let altura = alturaClass.value;

    //variavel pro calculo
    let imc = (peso / (altura * altura))

    // limita os decimais do resultado do imc
    result.value = imc.toFixed(1);

    // variaveis pros resultados
    let nomeContent = document.querySelector('.nome');
    let idadeContent = document.querySelector('.idade');
    let pesoContent = document.querySelector('.peso');
    let alturaContent = document.querySelector('.altura');
    let imcContent = document.querySelector('.imc')

    // verifica se vc esta em peso normal ou nao
    let quantPeso = ' '
    if (imc < 18.5) {
        quantPeso = 'Abaixo do Peso';
    } else if (imc < 25) {
        quantPeso = 'Peso Normal';
    } else {
        quantPeso = 'sobrepeso';
    }
    
    // caixa de resultados
    nomeContent.textContent = nome;
    idadeContent.textContent = idade + ' Anos';
    pesoContent.textContent = peso + 'Kg';
    alturaContent.textContent = altura + 'm';
    imcContent.textContent = `${imc} ${quantPeso}`;
});

clear.addEventListener('click', function() {
    event.preventDefault();

    // retira os valores dos iputs deixando eles vazio
    nomeClass.value = " "; 
    idadeClass.value = " ";
    pesoClass.value = " ";
    alturaClass.value = " ";

    result.value = " ";
});