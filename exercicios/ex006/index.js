let form = document.querySelector('form')

let Nota1Class = document.getElementById('nota1')
let Nota2Class = document.getElementById('nota2')

let send = document.getElementById('btnCalcular')
let clear = document.getElementById('btnLimpar')

let result = document.getElementById('media')
let sit = document.getElementById('situacao')

let danger = document.getElementById('aviso')

function validarNumero() {
    let nota1 = parseFloat(Nota1Class.value)
    let nota2 = parseFloat(Nota2Class.value)

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        danger.classList.add('alerta')
        danger.textContent = 'Digite uma nota entre 0.0 e 10.0'

        setTimeout(function() {
            danger.classList.remove('alerta')
            danger.textContent = ''
            result.value = ''

            sit.classList.remove('aprovado')
            sit.classList.remove('reprovado')
            sit.classList.remove('recuperacao')

            form.reset()
        }, 2000)

        
    }
}

send.addEventListener('click', function() {
    event.preventDefault();

    let nota1 = parseFloat(Nota1Class.value)
    let nota2 = parseFloat(Nota2Class.value)

    let media = (nota1 + nota2) / 2
    result.value = media

    if (media <= 3) {
        sit.classList.add('reprovado')
        sit.value = 'Reprovado(a)'
    } else if (media <= 7) {
        sit.classList.add('recuperacao')
        sit.classList.remove('reprovado')
        sit.classList.remove('aprovado')
        sit.value = 'Recuperação'
    } else if (media <= 10) {
        sit.classList.add('aprovado')
        sit.classList.remove('reprovado')
        sit.classList.remove('recuperacao')
        sit.value = 'Aprovado'
    } 
})

clear.addEventListener('click', function() {
    sit.classList.remove('aprovado')
    sit.classList.remove('reprovado')
    sit.classList.remove('recuperacao')
})