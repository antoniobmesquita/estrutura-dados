const inPrimeiroNumero = document.getElementById("idInPrimeiroNumero");
const inSegundoNumero = document.getElementById("idInSegundoNumero");
const outResultado = document.getElementById("idOutResultado");
const btnAdicionar = document.getElementById("btnAdicao")

function adicionar() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const soma = primeiroNumero + segundoNumero;
    const saida = `${primeiroNumero} + ${segundoNumero} = ${soma}`
    outResultado.innerHTML = saida
}

function subtrair(){
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const subtracao = primeiroNumero - segundoNumero;
    const saida = `${primeiroNumero} - ${segundoNumero} = ${subtracao}`;
    outResultado.innerHTML = saida
}

function multiplicar(){
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const multiplicacao = primeiroNumero * segundoNumero;
    const saida = `${primeiroNumero} * ${segundoNumero} = ${multiplicacao}`;
    outResultado.innerHTML = saida
}

function dividir (){
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const divisao = primeiroNumero / segundoNumero;
    const saida = `${primeiroNumero} / ${segundoNumero} = ${divisao}`;
    outResultado.innerHTML = saida
}

function potenciacao() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const potencia = Math.pow(primeiroNumero, segundoNumero)
    const saida = `${primeiroNumero} ** ${segundoNumero} = ${potencia}`;
    outResultado.innerHTML = saida
}

function calcularRaiz(){
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const raiz = Math.pow(primeiroNumero, (1/segundoNumero))
    const saida = `${primeiroNumero} Raiz ${segundoNumero} = ${raiz}`;
    outResultado.innerHTML = saida

}