const inputInicio = document.querySelector('#ninit')
const inputFim = document.querySelector('#nfim')
const btnGerar = document.querySelector('#btngerar')
const numeroElement = document.querySelector('#numero')


btnGerar.addEventListener('click', gerarNumero)

function gerarNumero() {
    let min = Math.ceil(inputInicio.value);
    let max = Math.floor(inputFim.value);
    let numero = Math.floor(Math.random() * (max - min)) + min;
    numeroElement.innerHTML = `${numero}`
}