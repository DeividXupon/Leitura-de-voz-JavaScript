const minNumero = 1;
const maxNumero = 100;
const numeroSecreto = criaNumero();

function criaNumero() {
    return parseInt(Math.random() * (maxNumero - minNumero + 1) + minNumero);
}
 
const instrucao = document.getElementById('instrucao');
instrucao.innerHTML = `Diga um numero entre ${minNumero} a ${maxNumero}`;

console.log(numeroSecreto)