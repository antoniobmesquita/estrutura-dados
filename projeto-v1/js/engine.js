// numeros html para criar e exibir os dados

const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btnCriarConjunto = document.getElementById("btnCriarConjunto");
const saidaDados = document.getElementById("onSaidaConjunto");
const numeroComparado = document.getElementById("inConjunto");
const mostrarResultado = document.getElementById("resultadoComparacao");
const btnComparar = document.getElementById("btnComparar");
const mostrarMaiorNumero = document.getElementById("maiorNumero");
const btnMostrarMaior = document.getElementById("btnMostrarMaior");
const mostrarMenorNumero = document.getElementById("menorNumero");
const btnMostrarMenor = document.getElementById("btnMostrarMenor");
const numeroComparadoBinario = document.getElementById("inConjuntoOrdenado");
const mostrarResultadoBinario = document.getElementById("resultadoComparacaoBinaria");
const btnCompararBinario = document.getElementById("btnCompararBinario");


const conjunto = [];


// Funçao de manipulação do conjunto
function criarConjunto(vetor, tamanho) {
    for (let i = 0; i < tamanho; i++) {
        let numeroAleatorio = Math.floor((Math.random() * 1001))
        vetor[i] = numeroAleatorio

    }
}


function eventoCriarConjunto() {
    const tamanho = Number(tamanhoConjunto.value);
    criarConjunto(conjunto, tamanho);
    const saida = "Conjunto = [" + conjunto.join(' | ') + "]"
    saidaDados.innerHTML = saida
}

btnCriarConjunto.addEventListener('onclick', eventoCriarConjunto())



function buscarNumero(conjunto, numero) {
    let contador = 0
    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i] == numero) {
            contador++
            return i
        }

    }
    return -1
}

console.log(conjunto)

function eventoBuscarNumero() {
    const numero = Number(numeroComparado.value)
    const comparacao = buscarNumero(conjunto, numero)

    mostrarResultado.innerHTML = `O número ${numero} foi encontrado no indíce ${comparacao}`

}
btnComparar.addEventListener('onclick', eventoBuscarNumero())


function definirMaiorNumero(conjunto) {

    let maior = conjunto[0]
    for (const elemento of conjunto) {
        if (elemento > maior) {
            maior = elemento

        }
    }
    return maior
}

function eventoMostrarMaiorNumero() {
    const maiorNumero = definirMaiorNumero(conjunto)
    mostrarMaiorNumero.innerHTML = `O maior número do conjunto é ${maiorNumero}`
}

btnMostrarMaior.addEventListener('onclick', eventoMostrarMaiorNumero())



function definirMenorNumero(conjunto) {
    let menor = conjunto[0]
    for (const elemento of conjunto) {
        if (elemento < menor) {
            menor = elemento
        }
    }
    return menor
}

function eventoMostrarMenorNumero() {
    const menorNumero = definirMenorNumero(conjunto)
    mostrarMenorNumero.innerHTML = `O menor número do conjunto é ${menorNumero}`
}
btnMostrarMenor.addEventListener('onclick', eventoMostrarMenorNumero())


function criarConjunto2(vetor) {
    let vetor2 = []
    for (let i = 0; i < vetor.length; i++) {
        vetor2[i] = vetor[i]

    }
    return vetor2
}

let conjunto2 = criarConjunto2(conjunto)

const mostrarVetor2 = document.getElementById("mostrarVetor2")

function bubbleSort(vetor) {
    let n = vetor.length

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let temp = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = temp
            }

        }

    }
    return vetor
}

function exibirConjunto2() {
    const conjunto2 = criarConjunto2(conjunto)
    const conjuntoOrdenado = bubbleSort(conjunto2)
    const saida = "Conjunto 2 = [" + conjuntoOrdenado.join(' | ') + "]"
    mostrarVetor2.innerHTML = saida
}

function buscaBinaria(vetor, valor) {
    let inicio = 0;
    let fim = vetor.length - 1;
    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);
        if (vetor[meio] === valor) {
            return meio
        }
        if (vetor[meio] < valor) {
            inicio = meio + 1
        } else {
            fim = meio - 1
        }
    }
    return -1
}



function eventoBuscaBinaria() {
    const conjunto2 = criarConjunto2(conjunto)
    const conjuntoOrdenado = bubbleSort(conjunto2)
    const numero = Number(numeroComparadoBinario.value)
    const comparacao = buscaBinaria(conjuntoOrdenado, numero)
    mostrarResultadoBinario.innerHTML = `O número ${numero} foi encontrado no indíce ${comparacao}`

}

btnCompararBinario.addEventListener('onclick', eventoBuscaBinaria())