const iPeso = document.querySelector('#peso')
const iAltura = document.querySelector('#altura')
const btn = document.querySelector('#btnCalc')
const resultImc = document.querySelector('#resultado')
const legenda = document.querySelector('#legenda')
const body = document.querySelector('body')

function calcularImc(){
    const peso = iPeso.value
    const altura = iAltura.value
    let imc = peso / (altura*altura)
    resultImc.classList.remove('magreza')
    resultImc.classList.remove('ideal')
    resultImc.classList.remove('acima')
    resultImc.classList.remove('obeso')

    if(imc<18.5){
        resultImc.innerHTML = imc.toFixed(2)
        legenda.innerHTML = 'Seu IMC está em magraza.'
        resultImc.classList.add('magreza')
    }
    else if(imc<=25){
        resultImc.innerHTML = imc.toFixed(2)
        legenda.innerHTML = 'Seu IMC está no peso ideal.'
        resultImc.classList.add('ideal')
    }
    else if(imc<=30){
        resultImc.innerHTML = imc.toFixed(2)
        legenda.innerHTML = 'Seu IMC está acima do peso.'
        resultImc.classList.add('acima')
    }
    else if(imc>30){
        resultImc.innerHTML = imc.toFixed(2)
        legenda.innerHTML = 'Seu IMC está em obesidade.'
        resultImc.classList.add('obeso')
    }

}