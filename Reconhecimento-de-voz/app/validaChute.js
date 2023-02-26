const aviso = document.querySelector(".ajuda");

function validaValorChute(chute) {

    const numero = +chute

    if(NumeroEmaiorOuMenorQueEserado(numero)){
        aviso.innerHTML = `Valor invalodo: O numero deve estar entre ${minNumero} ate ${maxNumero}`
    }

    if(eUmNumero(numero)){
        aviso.innerHTML = `Valor invalodo: '${chute}' não é um numero`
    } else {
        if(numero === numeroSecreto){
            document.body.innerHTML = `<main class="conteudo"> <h1 class="titulo">VOCÊ ACERTOU</h1>
            <h2 class="sub-titulo">O numero secreto é ${numeroSecreto}</h2> </main>`
        }else if(numero > numeroSecreto){
            aviso.innerHTML = "O numer secreto é mEnor - - -"
        } else{
            aviso.innerHTML = "O numer secreto é mAior + + +"
        }
    }

}

function eUmNumero(numero) {
    return Number.isNaN(numero);
}

function NumeroEmaiorOuMenorQueEserado(numero) {
    return numero > maxNumero || numero < minNumero;
}