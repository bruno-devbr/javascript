let inputC = document.getElementById('numeroC')
let inputF = document.getElementById('numeroF')
let inputK = document.getElementById('numeroK')

let rangeC = document.getElementById('celsius')
let rangeF = document.getElementById('fahrenheit')
let rangeK = document.getElementById('kelvin')

let clear = document.getElementById('btnZerar')

function showN() {
    inputC.value = rangeC.value
    inputF.value = rangeF.value
    inputK.value = rangeK.value
    calc()
}

rangeC.addEventListener('input', function() {
    showN()
})

function calc() {
    celsius_fahrenheit()
    celsius_kelvin()
}

function celsius_fahrenheit() {
    let celsius_fahrenheit = (rangeC.value * 9/5) + 32
    inputF.value = celsius_fahrenheit.toFixed(2)
}

function celsius_kelvin() { 
    let celsius_kelvin = parseFloat(rangeC.value) + 273.00
    inputK.value = parseFloat(celsius_kelvin).toFixed(2)
}

clear.addEventListener('click', function() {
    rangeC.value = 0
    rangeF.value = 32
    rangeK.value = 273

    inputC.value = 0
    inputF.value = 32
    inputK.value = 273
})