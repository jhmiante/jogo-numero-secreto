function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div> 'Valor Inválido' </div>`
    }

    if (numeroForMaiorouMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Número Inválido: Fale um Numero entre ${menorValor} e ${maiorValor} </div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
            O número secreto é maior
            <i class="fa-sharp fa-solid fa-arrow-up"></i>
        </div>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
            O número secreto é menor
            <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorouMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
